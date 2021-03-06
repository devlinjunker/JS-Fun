# Karma Testing

Practice with Karma testing framework. Example application with unit tests that should be run on multiple browsers.

**TODO:**
 - [x] Combine Webpack and Karma https://stackoverflow.com/a/50950418
   - [..] Alternative Usage of Karma + Webpack (One large bundle vs many bundles 1 per file) https://github.com/webpack-contrib/karma-webpack#alternative-usage
 - [ ] Clean output

### Notes
- Autowatches files to re run the tests on save
- Provides browser environment variables for tests so we don't have to mock everything out
- Added browserify so that we could use `import` or `export` with javascript modules during karma tests
 - User Babel Transformer with browserify to transpile files
- Need to add flow-types rather than import the mocha library (browserify didn't like this)
- Karma-ESLint Plugin needed to run eslint during Karma autowatch
  - Should we do this or run in webpack? What is the marin "runner" in our process? Karma vs webpack?
  - Karma Dev vs Webpack production? or Karma for both?
  - Different configs depending on build?
- Karma-webpack plugin for using webpack as a preprocessor
  - Want to run both in one npm command, instead of using babelify to transpile code, use webpack
  - Karma-sourcemap-loader needed for using sourcemap files from webpack
  - Webpack config actually instantiates the webpack dev server and enables hot module reloading by visiting http://localhost:3000/webpack-dev-server/
  - Had problems with Karma using the rebuilt bundles, solved by using the alternative method linked above

### Dev/Tests/Running

`npm run watch` to watch all of the files and re-run tests with karma and mocha on change.
Also run a Webpack Dev Server in the at http://localhost:3000 for running the application during development

`npm run test` to only run all of the unit tests for the application once

`npm run dev-watch` to only run the webpack development server and watch for changes on the files to reload
