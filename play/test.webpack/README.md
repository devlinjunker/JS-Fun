## Webpack Browser App

Simple web application template for using ES6 with babel, and enabling css and image imports for simple project management

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
  [ ] Look into failing compile/build

**TODO:**  
[ ] [Loading Fonts?](https://webpack.js.org/guides/asset-management/#loading-fonts)  
[x] Flow  
[ ] Linting  
[ ] Automatic Unit Tests  
 &nbsp; &nsbp; [ ] Console output breaks build?  
[ ] Automatic Documentation  
 &nbspl &nbspl [ ] Warn on file not documented  
[ ] Husky Githooks  
 &nbsp; &nbsp; branch specific? (release branch can increment version number?)  
[ ] Proper Versioning (package.json version at `-SNAPSHOT` in master branch)   

[ ] Script Template  
[ ] API Template  
[ ] FEND Template  
[ ] explore HtmlWebpackPlugin if templating index.html page  
[ ] https://webpack.js.org/guides/hot-module-replacement/  

[ ] L8R Common, Production and Dev Config  
