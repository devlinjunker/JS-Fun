# Testing

 - [x] Mocha (business logic)
 - [x] Chai (Assertion Library)  
 - [x] Istanbul (Code Coverage - mix with other testing library)  
   - [ ] Need to look into report formats more
   - [ ] cobertura (other test coverage)
 - [x] Winston - Logging  
   - [x] https://strongloop.com/strongblog/compare-node-js-logging-winston-bunyan/  
 - [x] Karma  
 - [x] Practice Global files  
 - [ ] Show filepath in test output  
 - [ ] Only run tests on chaged files: https://stackoverflow.com/questions/43140501/can-webpack-report-which-file-triggered-a-compilation-in-watch-mode
 - [ ] Contract Testing https://github.com/DiUS/pact-workshop-js  
 - [ ] Swagger JS (API Testing based on API Docs)  
 - [ ] Newman + Postman (API Testing)
 - [ ] Mocha vs Jasmine Comparison Repo
 - [ ] Look into Factories for setup code [*](https://github.com/mawrkus/js-unit-testing-guide#consider-using-factory-functions-in-the-tests)  
 - [ ] Cucumber    
 - [ ] Cucumber + E2E (Protractor/Nightwatch)  
 - [ ] Cypress.io
 - [ ] Protractor  
 - [ ] Nightwatch (user experience validation)  
 - [ ] Jest  (React components -- Don't think jest is just react)  
 - [ ] Testing Best Practices/Ideas: https://medium.com/@me_37286/yoni-goldberg-javascript-nodejs-testing-best-practices-2b98924c9347
 - [ ] Property Testing: https://github.com/dubzzz/fast-check#readme
 - [ ] Snapshot Testing?

## Ideas
 - Cucumber js style (TDD) validation (validate.js style)

## __Unit Testing in Javascript__  
from https://github.com/mawrkus/js-unit-testing-guide

**Ideally use TDD (Test Driven Development)**
  1. Write a simple failing test
  2. Make the test pass by writing the minimum amount of code
  3. Refactor the code by applying design principles/patterns
-  start by writing the simplest failing test, then adding incrementally more complex test cases

**NEVER comment out tests** - Either fix or remove [*](https://github.com/mawrkus/js-unit-testing-guide#dont-comment-out-tests)

- Tests names should begin with `should...`, and ideally should be structured based on functionality
- Avoid Logic/Looping in tests, write new test for each specific test case
- Try to only create expectations based on input  (pre-condition, state, parameters) and output (result, event, view changes)
- Use `beforeAll` and `beforeEach` to properly re-use setup code for ALL tests
- Use `it.only` (`fit`) and `describe.only` (`fdescribe`) during test writing and development rather than commenting tests
- Test the behavior, not implementation
- Don't always mock, use the "real" version of the objects if:
    - test setup is still easy
    - does not create a shared state between the tests
    - does not make AJAX requests, API calls, page reloads
    - consistent speed
- Create tests for each bug/defect
- Be aware of the differenc between e2e/integration tests and unit tests
- Review Test code First (Ideally should be own commits in PR)

- Best Practices: https://medium.com/@me_37286/yoni-goldberg-javascript-nodejs-testing-best-practices-2b98924c9347

## Mocha

Framework for writing and running test files  
  - `mocha.opts` file for [configuration](https://mochajs.org/#command-line-usage), specify on commandline or in `./test/` directory
  - has no expectation/assertion library
  - include chai for asserting test values
  - [ ] [Reporters](https://mochajs.org/#reporters)
  - `it()` calls without second argument (function) will be marked as pending (not written yet)
  - '.skip()' or `.only()` used for isolating tests
  - `this.slow(ms)` warns on slower tests
  - `this.retries(num)` enables test retries
  - when using babel include `--require source-map-support` in mocha.opts for proper stack trace lines


## Sinon (Stubbing, Mocking)
 Use sandbox in tests, bootstrap can use the global sinon object for global stubs, but we want to be
 able to stub things for only the tests  
 - [ ] [Best Practices](https://semaphoreci.com/community/tutorials/best-practices-for-spies-stubs-and-mocks-in-sinon-js)
  - ~Wrap test functions in `sinon.test()` to ensure we clean up the sinon objects when test is complete~
  - sinon.test is removed to sinonTest package, but we can create sandbox ourself and clean it up when we're done with each test
    - [..] Global test objects

## Karma

Test running framework, for configuring how to run tests which frameworks and specific javascript environments to test.
 - Use Karma 3 for Node v6
 - auto watch files and re run tests
 - useful for running test in the right environment
  - by itself, mocha just runs in Node and doesn't have access to browser globals
  - Karma can specify to run the Mocha framework in Chrome so these environment globals are available


## Contract Testing

Pact and PactJS for Microservice contract testing, define what you expect endpoint to return and will also help you test that your expectations from endpoint will be met.


## Test Doubles
Generic term for any kind of pretend object used in place of a real object for testing purposes

**Dummy** objects are passed around but never actually used. Usually they are just used to fill parameter lists.
**Fake** objects actually have working implementations, but usually take some shortcut which makes them not suitable for production (an in memory database is a good example).
**Stubs** provide canned answers to calls made during the test, usually not responding at all to anything outside what's programmed in for the test.
**Spies** are stubs that also record some information based on how they were called. One form of this might be an email service that records how many messages it was sent.
**Mocks** are objects pre-programmed with expectations which form a specification of the calls they are expected to receive.

 - Avoid mocks in favor of stubs and spies
 - Look into Fakes
 - Don't focus on internal expectations
  - Do I use it to test functionality that appears, or could appear, in the requirements document? If no, it’s a smell of white-box testing.
