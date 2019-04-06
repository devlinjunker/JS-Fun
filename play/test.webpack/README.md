# Test Webpack Browser App

Simple web application template for using ES6 with babel, and enabling css and image imports for simple project management

Example: https://github.com/Ziv-Barber/react-boilerplate-mocha

## Testing, Development and Running

`npm run dev`  
To test the application by hosting on a development server to test the current codebase

`npm run dev-watch`  
To watch the files for changes during development and hot reloading webpack
development server

`npm run build`  
To compile the application with webpack to the `public` directory

`npm run test`  
To run all of the unit tests in the codebase once

`npm run test-watch`
To watch for changes during development and running the unit tests to verify they haven't broken


## Dependencies
See [package.json](package.json#L18) for full list of current dependencies
 - Webpack + Loaders
 - Babel
 - ESLint
 - Webpack Dev Server
 - Mocha, Chai, Sinon


## TODO
 - [ ] [Loading Fonts?](https://webpack.js.org/guides/asset-management/#loading-fonts)  
 - [x] Flow  
 - [x] Linting  
 - [x] Automatic Unit Tests  
  - [x] Only for a specific build script
  - [ ] Console output breaks prod compilation?  
 - [..] Automatic Documentation  
  - [x] Warn on file not documented  
 - [ ] Commit Enforcement [Commitizen](http://commitizen.github.io/cz-cli/)
 - [ ] Husky Githooks  
  - branch specific? (release branch can increment version number?)  
 - [ ] Proper Versioning (package.json version at `-SNAPSHOT` in master branch) https://github.com/semantic-release/semantic-release    
 - [x] Look into webpack/flow aliases for project imports  
 - [..] Clean up output, so only error or recompile is shown  
  - Karma
 - [ ] Node version  
  - [ ] Require for node project/at least warn?  
  - [ ] 10+ includes await/async?  
 - [ ] Common vs Production vs Dev Config  
  - `WEBPACK_ENV` property (process.env.WEBPACK_ENV)
 - [ ] Uglify production code  


 - [ ] Script Template  
 - [ ] API Template  
 - [ ] FEND Template  
 - [ ] Typescript Template   
 - [ ] explore HtmlWebpackPlugin if templating index.html page  
 - [ ] https://webpack.js.org/guides/hot-module-replacement/  


### CleanWebpackPlugin
Cleans the public directory on build

### HtmlWebpackPlugin
Generates an index.html file in the output directory

### Babel
Use Webpack Babel-Loader to find files with .js extension and use babel to process and compile es2015+ files

### Style loader
Merge and processes all css imported in the project source files  
 - [ ] Does it process css extensions? How?

### File Loader
Includes any files imported in project source files in the output directory. Mostly used for images right now and including links to them.


### FlowWebpackPlugin
Runs flow during webpack compilation and spits out flow syntax errors/ requires flow static typing  
  - [ ] Look into production compile failing on flow error  
  - [x] Look into failing compile/build - seems not possible for web app, maybe for node though...   
    - add `failOnError` [false] param to fail webpack default run (need to kill and restart dev-server on error if true)  
    - add `failOnErrorWatch` [false] not sure I see this working...
    - set `reportingSeverity` [error]  
      `error` to prevent dev server from reloading the webpage  
      `warning` to display messages as warnings in console, still reloads webpage and runs failing code  
**NOTE:** Need to add any webpack aliases to .flowconfig  

### Linting  
 - [x] Add .eslintrc.* (yaml so we can have comments) with flow extensions   
 - [x] Add ESLint Loader to Webpack  
  - [x] Require Comment Headers in all files  

**ESLint options:**  
  [ ] fix  
  [ ] cache - speed up build  
  [ ] formatter - for formatting output  
  [ ] eslintPath - for using specific version  
  [ ] emitError - always errors  
  [ ] emitWarning - always warnings  
  [ ] quiet - only errors  
  [ ] failOnWarning  
  [ ] failOnError  
  [ ] outputReport - errors to file  

### Unit Tests
 - Lets use Mocha, seems more flexible  
 - Moved babel config to .babelrc so shared  
 - **NOTE:** stubbing console.log is dangerous for test result output  
 - mocha.opts helps running mocha be simpler  
  - [x] consider moving into `./test/` directory so we don't need to ref  
 - [ ] Test bootstrap (global init) file  
 - [x] Automatic Unit Tests during development (`npm run test-watch`)
  - Karma runner can be used for focusing on tests
    - during development and testing we can just run mocha with `--watch` param (see commit [fe98d3f](https://github.com/devlinjunker/basic.webpack/commit/fe98d3f8434fc770b191638ccc323fa7d9f04c83))
      - is a problem for webapps though because browser env globals are not available unless we use karma
    - [x] Integrate Karma and Webpack


### Clean Output while running
  This might require creating bash scripts for the npm commands. These will control the terminal output and be able to refresh/clear etc.


### Basic Project
 - [..] Local Database, key based store/retrieval of values
  - Raw, key value input.
  - Basic non-failing unit tests.
  - [ ] Weather based on stored location
    - Polished Frontend nice view (with tasks/photos?)
    - Tests that require backend and async resolution
 - [ ] Server for SSO/Login storage
 - [ ] Script -  Source Code Mapper
