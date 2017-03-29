# preact-async
Samples of usage of suggested async rendering feature

## Problem

(P)React is notoriously anxious to always render first with whatever it has at any instant and, if needed, re-render as many times as required. This often forces developers to plan for rendering components without data, only to re-render when the data finally arrives.

## Possible solution?

It would be great to have some lifecycle method that could return a Promise so that the rendering could be postponed until resolved.  This is particularly useful in cases such as:

* Server-side rendering: Rendering on the server only gives you one chance.  You cannot render an empty component and re-render when the data arrives. This requires either to fetch the data by some separate means or do two renders, one to prime the requests for data and the final one when all the data has arrived.

* Code-splitting: hard to do when not all your components are available.

Both cases require the developer to device and manage some means to asynchronously fetch the bits and pieces, sometimes developing some complex infrastructure of utility modules and data structures to support it.

So, I tried to provide an alternative.

## What if?

What if `componentWillMount` and `componentWillReceiveProps`, which currently return nothing, could accept returning a Promise?

The values the Promise is resolved to (presumably an Object) would be merged along the Component properties so that the `render` method has them available.  For [example](https://github.com/Satyam/preact-async/blob/master/client/dataLoading/index.jsx#L5-L18):

```js
componentWillMount() {
  return fetch(
    `${HOST}:${PORT}/${this.props.id}`,
    {
      headers: {
        Accept: 'application/json',
      },
    }
  ).then(response => (
    response.ok
    ? response.json()
    : Promise.reject(response.statusText)
  ));
}
```

A similar function could be provided for `componentWillReceiveProps`.  Though the [example](https://github.com/Satyam/preact-async/blob/master/client/dataLoading/index.jsx) shows the component itself doing its own fetch, in practice this would be delegated to a High-order Component that takes care of data fetching while the actual rendering would be done by a stateless component.  

The HoC might `dispatch` a Redux asynchronous action. If using an action creator (as is common practice), since `dispatch` returns whatever its dispatched action creator returns, the HoC would just need to return the call to `dispatch`.

```js
componentWillMount() {
  const dispatch = this.props.dispatch;
  const id = this.props.id;
  return dispatch(dataFetchingActionCreator(id));
}
```

(The `connect` HoC from [react-redux](https://github.com/reactjs/react-redux/blob/master/docs/api.md#connectmapstatetoprops-mapdispatchtoprops-mergeprops-options) adds `dispatch` to the properties if it doesn't get a second argument)

When rendering on the server side, while the components get rendered to a string, the Redux store gets populated, at which point it can be serialized and merged into the HTML from the rendering process and sent to the client.

---


Loading components from dynamically loaded code-segments could be done with something like [this](https://github.com/Satyam/preact-async/blob/master/client/codeSplit/loadAsync.jsx)

```js
export default class LoadAsync extends Component {
  componentWillMount() {
    const comp = this.props.component;
    if (comp && typeof comp.then === 'function') {
      return comp.then(component => ({ Child: component }));
    }
  }
  render({ Child }) {
    return <Child />;
  }
}
```

This Component would dynamically load the component and then render it when available. It could be used like [this](https://github.com/Satyam/preact-async/blob/master/client/codeSplit/index.jsx#L10)

```js
import A from './a';
import LoadAsync from './loadAsync';

export default function CodeSplit() {
  return (
    <div>
      <A />
      <LoadAsync
        component={import('./b').then(module => module.default)}
      />
    </div>
  );
}
```

The `component` attribute receives the Promise returned by the new `import()` function.  The reason why `LoadAsync` cannot simply receive a module location (i.e.: `'./b'`) is because module packagers such as WebPack ([see](https://webpack.js.org/guides/code-splitting-import/)) need to do a static analysis of the `import()` function arguments to resolve modules to be packaged, thus, it doesn't allow to pass a variable to `import`.

### The patch:

They key is in [`setComponentProps`](https://github.com/Satyam/preact/blob/async-lifecycle-methods/src/vdom/component.js#L19), where both `componentWillMount` and `componentWillReceiveProps` are located.  Instead of just calling them, ignoring any possible return, I accept a `promisedProps` return value [here](https://github.com/Satyam/preact/blob/async-lifecycle-methods/src/vdom/component.js#L50-L61) and then, if `promisedProps` is something and it has a `.then` property, I chain `mergeProps` into the chain of promises:

```js
if (promisedProps && typeof promisedProps.then === 'function') {
  promisedProps.then(mergeProps);
} else {
  mergeProps();
}
```

Otherwise (the normal case) I simply call `mergeProps`, proceeding in a synchronous fashion.

The `mergeProps` function is basically the same bottom half of `setComponentProps` except for the [line](https://github.com/Satyam/preact/blob/async-lifecycle-methods/src/vdom/component.js#L29) where the extra properties returned by the Promise are merged into the existing ones:

```js
component.props = Object.assign(props, newProps || {});
```

The existing tests run without problems with this patch.

### Unfortunately, it doesn't work

The app renders with the static parts and though both the dynamic data and the dynamically loaded component are both successfully loaded and the corresponding `render` methods are called, the page has already been created with the static elements and it is not refreshed when the asynchronous data/module arrives.

Doing server-side rendering via `preact-render-to-string` ([shown here](https://github.com/Satyam/preact-async/blob/master/webServer/uwa.jsx)) I am able to produce the HTML in just one go with the asynchronous data included

It fails to render the dynamically loaded component properly showing `[object Object]` instead.   This somehow proves that it has already loaded it (otherwise, it would be `null` or `undefined`) but I don't get to render it as a Component.
