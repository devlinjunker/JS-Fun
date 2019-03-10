## Webpack Browser App

Simple web application template for using ES6 with babel, and enabling css and image imports for simple project management


**TODO:**  
[ ] [Loading Fonts?](https://webpack.js.org/guides/asset-management/#loading-fonts)  
[x] Flow  
[x] Linting  
[ ] Automatic Unit Tests  
 &nbsp; &nbsp; [ ] Console output breaks build?  
[ ] Automatic Documentation  
 &nbsp; &nbsp; [x] Warn on file not documented  
[ ] Husky Githooks  
 &nbsp; &nbsp; branch specific? (release branch can increment version number?)  
[ ] Proper Versioning (package.json version at `-SNAPSHOT` in master branch)   
[x] Look into webpack/flow aliases for project imports  
[ ] Clean up output, so only error or recompile is shown  
[ ] Common vs Production vs Dev Config  
[ ] Uglify production code  

[ ] Script Template  
[ ] API Template  
[ ] FEND Template  
[ ] Typescript Template   
[ ] explore HtmlWebpackPlugin if templating index.html page  
[ ] https://webpack.js.org/guides/hot-module-replacement/  


### CleanWebpackPlugin
Cleans the public directory on build

### HtmlWebpackPlugin
Generates an index.html file in the output directory

### Babel
Use Webpack Babel-Loader to find files with .js extension and use babel to process

### Style loader
Merge and processes all css imported in the project source files  
  [ ] Does it process css extensions? How?

### File Loader
Includes any files imported in project source files in the output directory. Mostly used for images right now and including links to them.


### FlowWebpackPlugin
Runs flow during webpack compilation and spits out flow syntax error  
  [ ] Look into node app compile failing on flow error  
  [x] Look into failing compile/build - seems not possible for web app, maybe for node though...   
    - add `failOnError` [false] param to fail webpack default run (need to kill and restart dev-server on error if true)  
    - add `failOnErrorWatch` [false] not sure I see this working...
    - set `reportingSeverity` [error]  
      `error` to prevent dev server from reloading the webpage  
      `warning` to display messages as warnings in console, still reloads webpage and runs failing code  
**NOTE:** Need to add any webpack aliases to .flowconfig  

### Linting  
 - Add .eslintrc.* (yaml so we can have comments) with flow extensions   
 - Add ESLint Loader to Webpack  
 [x] Require Comment Headers in all files  
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
 Lets use Mocha, seems more flexible
