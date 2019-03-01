# Build


Q: Refactoring in atom? (on file basis)  
js-refactor plugin: ``ctrl+alt+'R'``

**Tools:**  
[x] Uglify - Minimizer  
[x] Prettier - Code Formatter (Reprints code to match defined style)  
also beautify js and atom beautify for formatting  
[x] Browserify - Gathers requires/includes and compresses into deliverable
 (replaced by webpack)  
[x] Babel - ECMA6 Compiling - Needed for Flow Static Type Compiling too  
[x] Flow -  Static Type Checker (Extension of Javascript) - Seem to need Babel
(or Webpack?) for this...  
&nbsp;&nbsp;https://flow.org/en/docs/types/   
[x] EsLint - Linter (Checking for JS errors) - Need this and Webpack/Babel apparently...  
[ ] HTML Linter  

Note: SASS/LESS/CSS Preprocessors seem to be out in favor of importing CSS into
precompiled JS files (React/Webpack especially)  

**Projects:**  
[x] Babel + Flow + EsDoc + EsLint + Prettier  
 &nbsp; &nbsp; https://hackernoon.com/configure-eslint-prettier-and-flow-in-vs-code-for-react-development-c9d95db07213  
[ ] Above + Webpack + Uglify  
[x] Webpack -  Front-End packager for bundling required libraries and other files, also can manage babel/minifying/  

[ ] Typescript + TSLint  
  Typescript vs Babel?


[ ] Validate JS for API Endpoint Contracts  
 &nbsp; &nbsp; Use Shared Models between API and UI  
 &nbsp; &nbsp;  - Constructors can throw the error messages that are used in validation  
 &nbsp; &nbsp;  - FEND can extend the class to add FEND specific properties
 &nsbp; &nbsp; 
