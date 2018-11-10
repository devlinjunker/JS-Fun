# Example Node and Babel/ECMA6
This is is a quick test of the Babel/ECMA6 compilation.
Contains a Quick recursive application with interface for task management using only the built-in node libraries, as well
as an example testing ECMA6 classes and inheritence.

Uses Babel to compile source code to output directories in Node/Browser compatible

ToDo:  
[ ] Review Babel7 https://babeljs.io/docs/en/v7-migration  
[ ] Babel Config in package.json

## Usage

CLI:  
`npm run build-cli` to compile CLI application to dist directory  
`npm run cli` to run the recursive CLI app  

ECMA6 Class Test:  
`npm run build-app2` to compile the example ecma6 class tests to app2 directory  
`npm run app2` to run the example ecma6 class tests  


## Development Process

Notes:  
This is bad composition for a program, don't want to fill up the stack with recursive frames  

** Setup:**  
``npm install babel-cli babel-preset-env``  
``echo "{ "presets" : ["env"]}" >> .babelrc``
``./node_modules/babel-cli/bin/babel.js src/ -d dist``  
``node dist/index.js``  

1) found readline (built-in node I/O module)  
2) tried readline.on("line", <callback>) but this triggered every time a new line
feed character was read on the stdin/out (even when writing \n characters)  
3) readline.question(<prompt>, <callback>)  
4) Started with while loop... but Node is asynchronous and caused flickering  
5) found example using async recursive function (https://stackoverflow.com/questions/24464404/how-to-readline-infinitely-in-node-js?answertab=votes#tab-top)
and built in one file with anonymous closure (var loop = function(){})()  
6) This was all in index.js and wanted to separate into own module for CLI  
7) Tried exporting App class with a loop method  
8) Settled on exporting named recursive function that can be started from outside
of module (Two examples, const/var/let and if callback vs switch statement)  

Questions:  
1) Which is more efficient? Module export vs inline index.js?
2) Does the variable definition (const/var/let) matter?
