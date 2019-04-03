# Build


Q: Refactoring in atom? (on file basis)  
js-refactor plugin: ``ctrl+alt+'R'``

**Tools:**  
 - [x] Uglify - Minimizer  
 - [x] Prettier - Code Formatter (Reprints code to match defined style)  
also beautify js and atom beautify for formatting  
 - [x] Browserify - Gathers requires/includes and compresses into deliverable (replaced by webpack)  
 - [x] Babel - ECMA6 Compiling - Needed for Flow Static Type Compiling too  
 - [x] Flow -  Static Type Checker (Extension of Javascript) - Seem to need Babel (or Webpack?) for this...  
  - https://flow.org/en/docs/types/   
 - [x] EsLint - Linter (Checking for JS errors) - Need this and Webpack/Babel apparently...  
 - [ ] HTML Linter  

Note: SASS/LESS/CSS Preprocessors seem to be out in favor of importing CSS into
precompiled JS files (React/Webpack especially)  

 - [ ] Validate JS for API Endpoint Contracts   
  - Use Shared Models between API and UI  
  - Constructors can throw the error messages that are used in validation  
  - FEND classes extend the validation class
   - has getModel method, with return type of validation class that can be passed to API methods with validation class typed params  
   -  Also contains state properties and other FEND specific values  

**Projects:**  
 - [x] Babel + Flow + EsDoc + EsLint + Prettier  
  - https://hackernoon.com/configure-eslint-prettier-and-flow-in-vs-code-for-react-development-c9d95db07213  
 - [ ] Above + Webpack + Uglify  
 - [x] Webpack -  Front-End packager for bundling required libraries and other files, also can manage babel/minifying/  
 - [ ] Typescript + TSLint
   - [ ] Typescript vs Babel?
