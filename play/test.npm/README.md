# Node Development Ideas
Markdown Cheatsheet:
https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet#emphasis

**Current Process for Creating new Node/NPM project**  
1) mcd (mkdir;cd;)  
2) git init  
3) npm init  
4) edit package.json scripts to edit build process


## Idea for Folder Structure

```
|-- package.json  
|-- other config files  
|-- src/  
|---- index.js <- calls app.js  
|---- app.js <- CLI  
|---- app.spec.js <- tests app.js
|---- server.js <- runs server with rest intefaces  
|---- client.js <- client code  
|---- common/  
|-- dist/  (if non web app)  
|-- public/  (if web app)  
|-- test <-- for test config
|-- e2e
```

## Ideas
Libraries and Project Ideas

### Build
[x] Babel - ECMA6 Compiling - Needed for Flow Static Type Compiling too  
[x] Flow -  Static Type Checker (Extension of Javascript) - Seem to need Babel
(or Webpack?) for this...  
&nbsp;&nbsp;https://flow.org/en/docs/types/   
[x] EsLint - Linter (Checking for JS errors) - Need this and Webpack/Babel apparently...  
[x] Uglify - Minimizer  

[x] Prettier - Code Formatter (Reprints code to match defined style)  
also beautify js and atom beautify for formatting  
[x] Browserify - Gathers requires/includes and compresses into deliverable
 (replaced by webpack)  

[ ] HTML Linter  

[x] Babel + Flow + EsDoc + EsLint + Prettier  
&nbsp;&nbsp;https://hackernoon.com/configure-eslint-prettier-and-flow-in-vs-code-for-react-development-c9d95db07213  

[ ] Above + Webpack + Uglify  
[..] Webpack -  Front-End packager for bundling required libraries and other files, also can manage babel/minifying/  
&nbsp;&nbsp;Need to explore HtmlWebpackPlugin if templating index.html page  
&nbsp;&nbsp;https://webpack.js.org/guides/hot-module-replacement/  
[ ] Webpack FEND  
[ ] Webpack API  


Q: Refactoring in atom? (on file basis)  
js-refactor plugin: ``ctrl+alt+'R'``

Note: SASS/LESS/CSS Preprocessors seem to be out in favor of importing CSS into
precompiled JS files (React/Wbepack especially)  

### Documentation
[c] Styleguidist  
[x] EsDoc - integrated with atom?(dockblockr for atom generation)  
~~[] Yuidoc?~~(esdoc seems way better)   

### Testing
[x] Mocha  (business logic)  
[x] Chai (Assertion Library)  
[x] Istanbul (Code Coverage - mix with other testing library)  
&nbsp;&nbsp;Need to look into report formats more  
[ ] Postman (APIs)  
[ ] Nightwatch (user experience validation)  
[ ] Jest  (React components)  
[x] Winston - Logging  
&nbsp;&nbsp;https://strongloop.com/strongblog/compare-node-js-logging-winston-bunyan/  
[ ] Mocha vs Jasmine Comparison Repo
&nbsp;&nbsp; Practice Global files  
[ ] Protractor  
[ ] Cucumber    
[ ] Cucumber + E2E (Protractor/Nightwatch)

### Databases
[x] MongoDB?  
~~[] MapDB?~~ (Java only)  
[x] MySQL?  
[x] elasticsearch  
[] ECMA6 interface/extensions? (task, elastic_task, mongo_task, mysql_task, task_manager, app using task manager and instantiating elastic_task vs mongo_task)  
&nbsp;&nbsp; - interface not needed because javascript weak typing (what about flow?)  


### HTMl5/Canvas
[ ] Paper.js  
[ ] Easel.js  
&nbsp;&nbsp;http://www.createjs.com/demos/easeljs/spritesheet  
[ ] d3.js  

### Frameworks
[..] React  
 https://facebook.github.io/react/docs/conditional-rendering.html  
 https://facebook.github.io/react/tutorial/tutorial.html  
[ ] Express.js  
[ ] Meteor  
https://www.meteor.com/tutorials/react/creating-an-app  
https://guide.meteor.com/index.html  
[ ] Redux  
[ ] Angular 2  
[ ] Material UI  
http://www.material-ui.com/#/get-started/installation   
[ ] React Native  

### Continuous Integration
[ ] Travis CI  
[ ] Codecov (or istanbul badge https://github.com/intuit/istanbul-cobertura-badger)  
[x] EsDoc Badge (See EsDoc)   
[ ] Gitlab instance  
[ ] Githooks

### Other
[x] Basic Node Project  
[x] Node Library Project (then imported)  
[ ] Howler Audio Library  
[ ] Performance Testing  
[ ] Logging/Kibana  
[ ] Websocket test

### CSS
[ ] https://maintainablecss.com/chapters/semantics/  

### Projects
[x] CLI Node Library  
[ ] Encrypted DB Node Libraries  
[ ] Tasker Server/Client App (Goals, Desires, Chores)   
[ ] Portfolio website (Probably Wordpress)  
[ ] Javascript Game (Soccer? Bouncing ball moving?)  
[ ] Graphical Node/Web based interface  
[ ] AI Sandbox/CTF type thing?  
[ ] Browser Game  
[ ] Node Game  
