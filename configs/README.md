# Angular Build

Temporary build for non-dispatched+standalone angular applications. It could be runned on WebpackDevServer or on page without another webpack builds.

## Add app

* Create %app_name%/webpack.app.%app_name%.js file.
* Add %app_name% to app.js file.

## Config example

webpack.app.finance-express.js
```
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

  // files to build
  entry: {
    'finance-express': [
      './apps/finance-express/finance-express.app.ts',
      './apps/finance-express/styles.scss'
    ]
  },

  // dev server config
  plugins: [
    new HtmlWebpackPlugin({
      chunks: ['finance-express', 'common'],
      template: 'apps/finance-express/index.html',
      filename: 'finance-express.html'
    })
  ]

};
```

## App env (optional)

You can create env params that will be available in application.

### Create

* add files in %add_name% directory: env.common.js, env.prod.js, env.specific.js.
* env.common.js - basic config, specific/prod will be merged in it.
* env.specific.js - will not be added to repository. 

### Access in app

In your application, params will be available here: process.env.%APP_NAME% (app name "uppercased" and "underscored"). It is a webpackDefinePlugin issue.

For example (in finance-express app):

```
process.env.FINANCE_EXPRESS
```

## Run dev-server with your app

Application will be hosted at http://localhost:8080

```
npm start --app=finance-express
```

## Build all apps

Bundles from this directory could not be used in monolite app. Because it conflicted with main bundles.

To /web/dist/ng/

```
npm start build:ng
```


