export default function template(html, initialState) {
  return `<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Sample Web Page</title>
    <script id="initialState" type="application/json">${initialState}</script>
  </head>
  <body>
    <div id="contents" class="container-fluid">${html}</div>
    <script src="/bundles/webClient.js"></script>
  </body>
</html>
`;
}
