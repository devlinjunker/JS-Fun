# Build


Q: Refactoring in atom? (on file basis)  
js-refactor plugin: ``ctrl+alt+'R'``

** Tools: **  
 - [x] Uglify - Minimizer  
 - [x] Prettier - Code Formatter (Reprints code to match defined style)  
also beautify js and atom beautify for formatting  
 - [x] Browserify - Gathers requires/includes and compresses into deliverable (replaced by webpack)  
 - [x] Babel - ECMA6 Compiling - Needed for Flow Static Type Compiling too  
 - [x] Flow -  Static Type Checker (Extension of Javascript) - Seem to need Babel (or Webpack?) for this...  
  - https://flow.org/en/docs/types/   
 - [x] EsLint - Linter (Checking for JS errors) - Need this and Webpack/Babel apparently...  
 - [ ] HTML Linter  
 - [ ] VS Code debug scripts (from Way)

Note: SASS/LESS/CSS Preprocessors seem to be out in favor of importing CSS into
precompiled JS files (React/Webpack especially)  

** Thoughts: **
 - [ ] Swagger/OpenAPI Endpoint Documentation and testing?
 - [ ] Validate JS for API Endpoint Contracts   
   - Use Shared Models between API and UI  
   - Should this be separate vs same repo as client and api?
   - Constructors can throw the error messages that are used in validation  
   - FEND classes extend the validation/backend class
    - has getModel method, with return type of validation class that can be passed to API methods with validation class typed params  
    -  Also contains state properties and other FEND specific values  
 - separate vs combined client and api?
  - shared things: constants, endpoint contract (and validation), models, renderers use on both sides?
  - what about server generated UI? If separate how will it create the same UI?
  - Can we share with other (non fend) clients?
    - [ ] non js clients?
    - [ ] documentation?
    - [ ] exported
 - [ ] Health Check?
 - [ ] Performance Logging (track with request with unique id)
 - [ ] GELF ELK Logging


 Larger App Feature Process:
  1. Features to User Stories
  2. User Stories to Mockups
  3. User Stories + Mockups = Questions + Iteration
  4. Dev Tasks
   - Tests (Manual, Automation)
   - UI
   - Backend Integration

** Projects: **  
 - [x] Babel + Flow + EsDoc + EsLint + Prettier  
  - https://hackernoon.com/configure-eslint-prettier-and-flow-in-vs-code-for-react-development-c9d95db07213  
 - [ ] Above + Webpack + Uglify  
 - [x] Webpack -  Front-End packager for bundling required libraries and other files, also can manage babel/minifying/  
 - [ ] Typescript + TSLint
   - [ ] Typescript vs Babel?
