# Karma Testing

Practice with Karma testing framework. Example application with unit tests that should be run on multiple browsers.
 - Autowatch files to re run the tests on save
 - Added browserify so that we could use `import` or `export` with javascript modules during karma tests
  - User Babel Transformer with browserify to transpile files
 - Need to add flow-types rather than import the mocha library (browserify didn't like this)
 - Karma-ESLint Plugin needed to run eslint during Karma autowatch

**TODO:**
 - [ ] Combine Webpack and Karma https://stackoverflow.com/a/50950418
 - [ ] Clean output


### Dev/Tests/Running

`npm run dev-watch` to run the webpack development server and watch for changes on the files to reload

`npm run test` to run all of the unit tests for the application

`npm run test-watch` to run all of the test files with karma and mocha, with watching for changes to re-run the tests on save

`npm run watch` ... TODO: Combine Webpack and Karma
