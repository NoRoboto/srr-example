export const htmlTemplate = (reactDom, reduxState, helmetData) =>
  (`<!DOCTYPE html>
  <html>
    <head>
        <meta charset="utf-8">
        ${ helmetData.title.toString() }
        ${ helmetData.meta.toString() }
        <title>React SSR</title>
    </head>
    <body>
        <div id="app">${ reactDom }</div>
        <script>window.REDUX_DATA = ${ JSON.stringify(reduxState) }</script>
        <script src="./app.bundle.js"></script>
    </body>
  </html>`);
