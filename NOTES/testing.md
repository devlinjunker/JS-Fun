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
- Use `fit` and `fdescribe` during test writing and development rather than commenting tests
- Test the behavior, not implementation
- Don't always mock, use the "real" version of the objects if:
    - test setup is still easy
    - does not create a shared state between the tests
    - does not make AJAX requests, API calls, page reloads
    - consistent speed
- Create tests for each bug/defect
- Be aware of the differenc between e2e/integration tests and unit tests
- Review Test code First (Ideally should be own commits in PR)

[] Look into Factories for setup code [*](https://github.com/mawrkus/js-unit-testing-guide#consider-using-factory-functions-in-the-tests)
