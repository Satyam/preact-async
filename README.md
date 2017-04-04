# preact-async

> Samples of usage of suggested asynchronous render-to-string feature.

## Problem

Server-side rendering when asynchronous data sources are involved is somewhat complicated.  Frequent solutions to this issue are:

* Doing two renders:  in React the first uses `renderToStaticMarkup` which is relatively fast, and the second uses `renderToString`.  The first render would prime all the components so that each would issue all the data requests it needs.  Some mechanism to count pending requests is required. When there are no more pending requests, then the final render can be done with all the data already available, and that, along with the data itself, sent to the client.
* Device a data structure to both contain routing information and data-fetch requests.  Depending on the route requested, all data would be requested first and then the components rendered.

The first solution has the obvious drawback that two renders are required.  The second that an ad-hoc structure for both data and routing is needed.  Though React-router prior to version 4 favored a centralized router so that converting a central routing table to actual `<Route>` components is straightforward, version 4 can do both centralized and distributed routing, which is a more flexible way, so that a central routing table no longer fits.

## Possible solution?

* Provide an asynchronous Promise-based renderer that will signal when it is done.
* Components can request data in a lifecycle method and return a Promise.

The obvious candidate for such a method is `componentWillMount` which is normally called when rendering server-side.  This method normally doesn't return anything. In normal rendering, any return from this method is ignored so it really doesn't hurt if a Promise is returned. An asynchronous server-side renderer might wait on this Promise before carrying on.  Thus, by the time it finishes, both the data and the markup are already available.

## Example with Redux

```js
export default function (req, res) {
  asyncRender(
    <Provider store={store}>
      <Client />
    </Provider>
  )
  .then(html => {
    const initialState = store.getState();
    res.send(template(html, JSON.stringify(initialState)));
  });
}
```

A server-side asynchronous render would call `asyncRender` which is used pretty much like `renderToString` except that instead of returning a string, it returns a Promise which resolves to the same string. By the time it does, the Redux store is populated with the data so it can be easily extracted into `initialState` and then both inserted into the HTML page template to be sent to the client.

The example does not use routing but it could be easily done, React-router provides the [`<StaticRouter>` component](https://reacttraining.com/react-router/web/guides/server-rendering) that reads the requested URL from `req.url` and provides the same features as the client-side router.

The [component](https://github.com/Satyam/preact-async/blob/master/client/components/person/index.jsx#L13-L30) itself is relatively simple:

```js
export class PersonComponent extends Component {
  componentWillMount() {
    const { dispatch, idPerson } = this.props;
    return dispatch(getPersonById(idPerson));
  }
  componentWillReceiveProps({ dispatch, idPerson }) {
    return dispatch(getPersonById(idPerson));
  }
  render({ name }) {
    return (
      <p>Hello {name}!</p>
    );
  }
}
```

On the `componentWillMount` lifecyle method (and also in the `componentWillReceiveProps` for the benefit of client-side rendering), it dispatches an asynchronous action creator asking for the data for the corresponding `idPerson`.  The `dispatch` method of Redux returns whatever its action creator returns which, for async action creators it is usually a Promise as it is [in our case](https://github.com/Satyam/preact-async/blob/master/client/store/persons/actions.js#L27).

## Changes to preact-render-to-string

I have added a [async.js](https://github.com/Satyam/preact-render-to-string/blob/asyncRendering/src/async.js) file which is basically the original [index.js](https://github.com/Satyam/preact-render-to-string/blob/asyncRendering/src/index.js) modified to handle promises, specially when calling [`componentWillMount`](https://github.com/Satyam/preact-render-to-string/blob/asyncRendering/src/async.js#L154-L158) which, if it returns a Promise, it will put further rendering on hold. When the data is fetched, whatever is returned, presumably an object, is [merged](https://github.com/Satyam/preact-render-to-string/blob/asyncRendering/src/async.js#L142) along the rest of the properties.  Since we are using Redux `conect` high-order component, which already deals with [looking up data](https://github.com/Satyam/preact-async/blob/master/client/components/person/index.jsx#L28-L30) in the store, we return `void` from the  [action creator](https://github.com/Satyam/preact-async/blob/master/client/store/persons/actions.js#L40).

The new file duplicates many lines of code from the original, but this is a proof-of-concept and trying to avoid those duplicates would involve a lot of refactoring which is besides the point at this stage.

A [test](https://github.com/Satyam/preact-render-to-string/blob/asyncRendering/test/asyncRender.js) is provided based on all the original test plus additional tests for the asynchronous features.  It only fails one of the original tests, namely [dangerouslySetInnerHTML should override children](https://github.com/Satyam/preact-render-to-string/blob/asyncRendering/test/asyncRender.js#L410-L413), which is due to the refactoring of the code, not to  any intrinsic issue with the asynchronous part of the rendering.

## Advantages

Only one rendering is done on the server side and any routing can be used.

On the client side, React's own `renderToString` adds a checksum to the generated HTML plus ids on each component.  This allows the client-side renderer to recognize the markup and check its validity so that, if the checksum matches, it won't refresh the DOM, it will only attach the DOM event listeners.

Preact doesn't do this, however, if you run the sample code, when you ask for `http://localhost:8080`, which does not do server-side rendering, you will see the app doing two extra requests to `person_1.json` and `person_2.json` which are the mock database records.  When asking for `http://localhost:8080/ssr` then those two data requests don't show while, at the same time, the initial page load already contains the final markup plus the data.

Thus, even if the UI ends up refreshed, though it would only show as a flicker, the number of requests to the server is reduced.
