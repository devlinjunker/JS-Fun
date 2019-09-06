# Build


Q: Refactoring in atom? (on file basis)  
js-refactor plugin: ``ctrl+alt+'R'``

## Tools: 
 - [x] Uglify - Minimizer  
 - [x] Prettier - Code Formatter (Reprints code to match defined style)  
  - also beautify js and atom beautify for formatting  
  - prettier needed for a lot of `--fix` options in linters
 - [x] Browserify - Gathers requires/includes and compresses into deliverable (replaced by webpack)  
 - [x] Babel - ECMA6 Compiling - Needed for Flow Static Type Compiling too  
 - [x] Flow -  Static Type Checker (Extension of Javascript) - Seem to need Babel (or Webpack?) for this...  
  - https://flow.org/en/docs/types/   
 - [x] EsLint - Linter (Checking for JS errors) - Need this and Webpack/Babel apparently...  
 - [ ] HTML Linter  
  - https://github.com/htmlhint/HTMLHint/wiki/Rules
 - [ ] VS Code/Atom IDE debug scripts for server/spec files (Atom Node-Debugger, VSCode launch.json)

 ```
  {
    "type": "node",
    "request": "launch",
    "name": "Nodemon restart @ app and env.properties",
    "restart": true,
    "console": "integratedTerminal",
    "runtimeExecutable": "nodemon",
    "args": ["--ext", "js,properties", "--delay", "0.5", "./bootstrap/bootstrap.js", "--run", "api-service", "|", "bunyan", "&", "tsc", "--watch"]
  },
  {
    "type": "node",
    "request": "launch",
    "name": "mocha test",
    "runtimeExecutable": "mocha",
    "restart": true,
    "console": "integratedTerminal",
    "internalConsoleOptions": "neverOpen",
    "args": ["--opts", "${workspaceFolder}/mocha.opts", "--watch", "&", "tsc", "--watch"]
  }
  ```


Note: SASS/LESS/CSS Preprocessors seem to be out in favor of importing CSS into
precompiled JS files (React/Webpack especially)  

## Design Thoughts:
 - Write test files first!
  - Even if no exceptions, write comments that explain test strategy
 - [ ] Write api server endpoints with contract models and mock return data
  - Where does validation fit? (See below)
  - If no server yet, set up dataservice classes with the same
 - [ ] Validate JS for API Endpoint Contracts   
   - Use Shared Models between API and UI
    - Models and Contracts defined in API `src/data` directory (UI imports these from API to know what to expect)
   - Should this be separate vs same repo as client and api?
   - Constructors can throw the error messages that are used in validation  
   - FEND classes extend the validation/backend class
    - has getModel method, with return type of validation class that can be passed to API methods with validation class typed params  
    -  Also contains state properties and other FEND specific values  
 - separate vs combined client and api?
  - shared things: constants, endpoint contract (and validation), models, renderers use on both sides?
  - what about server generated UI? If separate how will it create the same UI?
  - Can we share with other (non fend) clients?
    [ ] non js clients?
    [ ] documentation?
    [ ] exported to api
    [ ] not just clients? can we do this with backend endpoints
 - [ ] Swagger/OpenAPI Endpoint Documentation and testing?
 - [ ] Health Check?
 - [ ] Performance Logging (track with request with unique id)
 - [ ] GELF ELK Logging
 - [ ] Review Design Patterns and Anti-Patterns (https://sourcemaking.com/design_patterns)

 Larger App Feature Process:
  1. Features to User Stories
  2. User Stories to Mockups
  3. User Stories + Mockups = Questions + Iteration
  4. Dev Tasks
   - Tests
    - Define:
      - Manual
      - Unit
      - Integration
    - Write
      - Unit
        - Setup
        - Expectations
   - API
    - Contract Models with UI (Swagger?)
    - Mock Data Returned
   - UI
    - Use API Contract Modles for UI development
   - Backend Integration
   - Automation testing


  ### Notes:
    - commits explain development history (try to follow above)
    - comments if nothing else for unit tests
    - restrict lines/functions/files changed per commit/PR?
    - Documentation? How to enforce?
    - Proper branch/merge strategy


## Projects: 
 - [x] Babel + Flow + EsDoc + EsLint + Prettier  
  - https://hackernoon.com/configure-eslint-prettier-and-flow-in-vs-code-for-react-development-c9d95db07213  
 - [ ] Above + Webpack + Uglify  
 - [x] Webpack -  Front-End packager for bundling required libraries and other files, also can manage babel/minifying/  
 - [ ] Typescript + TSLint
   - [ ] Typescript vs babel/flow repo?
    - typescript might have better tooling and community?
    - find references doesn't seem to exist in flow?
