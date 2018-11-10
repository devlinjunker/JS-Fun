# Example Node and Babel/ECMA6
This is is a CLI interface for task management using only the built-in node
libraries  

Uses Babel to compile ``src/`` -> ``dist/`` in Node/Browser compatible

## Usage


``npm install babel-cli babel-preset-env``  
``echo "{ "presets" : ["env"]}" >> .babelrc``
``./node_modules/babel-cli/bin/babel.js src/ -d dist``  
``node dist/index.js``

## Development Process

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

Q: Which is more efficient? Module export vs inline index.js?

Q: Does the variable definition (const/var/let) matter?
