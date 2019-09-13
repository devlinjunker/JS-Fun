# ESLint Exploration

Testing ESLint configurations. Thoughts about ESLint or open questions will be left here.

**Todo:**  
 - [?] ESLint HTML Plugin  ????
 - [x] Mocha Environment  
 - [x] Require Comment File Headers https://github.com/Stuk/eslint-plugin-header  
  - Check webpack test project  
 - [x] YAML Configuration file  
 - [..] Flowtype Rules https://github.com/gajus/eslint-plugin-flowtype
 - [ ] Module Import Rules: https://www.npmjs.com/package/eslint-plugin-import
 - Rules to add:
  - [ ] Warn on no await: https://eslint.org/docs/rules/require-await  
  - [ ] No destructuring during import. Use separate line
  - [ ] exports follow conventions
  - [ ] spaces inside brackets (functions, objects)
  - [ ] file name rules: https://www.npmjs.com/package/eslint-plugin-filenames
  - [ ] Naming conventions
    - mutable_variables_with_underscores
    - dont_use_underscore_for_trailing_numbers1
    - CONSTANTS_WITH_CAPS
    - class_instance.methodsWithCamelCase
    - ClassNamesWithFirstLetterCapitalized
    - html-element-names-and-css-classes-with-dashes

## Dependencies
ESLint 5.9

## Notes
Plugins:
  - prettier
  - flowtype
  - header
    - for requiring file headers

Environments:
  - browser
  - es6
  - node
  - mocha


## My Style ([file](https://raw.githubusercontent.com/devlinjunker/JS.Fun/master/play/test.eslint/.eslintrc.yaml)):

Use `eslintConfig` option in package.json (this repo doesn't do that for simplicity)  

2 space indentation  

always use `===` or `!==`  

Single Quotes only  

Always require semicolons

Prevent single if statements inside of else blocks (`no-lonely-if`)  

Prevent trailing spaces on lines (`no-trailing-spaces`)  

Prevent shadowing variables in outer scope (`no-shadow`)  

Prevent Duplicate imports from same module (`no-duplicate-imports`)  

Require an new line at EOF (`eol-last`)  

Enforce spaces before/after keywords (`if`, `else`, `class`, `function`) (`keyword-spacing`)  

Require spaces after comment operators (`//` or `/*`) (`spaced-comment`)  

Require spaces around infix operators (`space-infix-ops`)  

Never put space in parens (maybe add: unless an single object?) (`space-in-parens`)  

Require space before function parenthesis (`space-before-function-paren`)  

Require space before blocks (`space-before-blocks`)  

Require JSDoc on Functions, Methods and Classes (`require-jsdoc`)  

Require Valid JSDoc (`valid-jsdoc`)  

~Multiline comments should be star block format (`multiline-comment-style`)~ (erroring)  

```
"multiline-comment-style": [
  "error",
  "starred-block"
],
```

### Warnings

Warn if over Maximum Line Length (110) (`max-len`)  

Warn if files over 500 lines (`max-lines`)  

Warn if class methods don't use `this` (`class-methods-use-this`)  

Warn if async methods do not contain `await` (`require-await`)  

Warn on use of console (want to error during special commits)

Warn on `alert()`, `confirm()` or `prompt()`  (`no-alert`)  

Warn on Empty Functions (`no-empty-function`)  


### Arrays
Arrays with 2 or more items should have spaces before and after the brackets (`array-bracket-newline`)  

Array Elements should have new lines after each element when 3 more items are in the array, or if an element is multiple lines  (`array-element-newline`)

Enforce trailing comma in arrays (`comma-dangle`)

### Objects
Enforce space after colon in objects (`key-spacing`)  

Enforce Space around Object Curlys (`object-curly-spacing`)

Enforce consistent new lines after curlys (`object-curly-newline`)  


### ECMA6
Enforce not using `var` (only `let` or `const`) (`no-var`)  

Prefer `const` if variable not reassigned (`prefer-const`)  

Require Arrow function bodys to use curly braces (`arrow-body-style`)  

Require Parens around arrow function parameters (`arrow-parens`)

Require spaces around arrow function arrow (`arrow-spacing`)  

Prefer Arrow Callbacks except named functions (`prefer-arrow-callback`)


## Key spacing
"beforeColon": false (default) | true  
   false: disallows spaces between the key and the colon in object literals.  
   true: requires at least one space between the key and the colon in object literals.  
"afterColon": true (default) | false  
   true: requires at least one space between the colon and the value in object literals.  
   false: disallows spaces between the colon and the value in object literals.  
"mode": "strict" (default) | "minimum"  
   "strict": enforces exactly one space before or after colons in object literals.  
   "minimum": enforces one or more spaces before or after colons in object literals.  
"align": "value" | "colon"  
   "value": enforces horizontal alignment of values in object literals.  
   "colon" enforces horizontal alignment of both colons and values in object literals.  
"align" with an object value allows for fine-grained spacing when values are being aligned in object literals.  
"singleLine" specifies a spacing style for single-line object literals.  
"multiLine" specifies a spacing style for multi-line object literals.  

## ESLint Recommended (11/2018)


`for-direction` enforce “for” loop update clause moving the counter in the right direction.  

`getter-return` enforce return statements in getters   

`no-compare-neg-zero` disallow comparing against -0  

`no-cond-assign` disallow assignment operators in conditional expressions  

`no-console` disallow the use of console  

`no-constant-condition` disallow constant expressions in conditions  

`no-control-regex` disallow control characters in regular expressions  

`no-debugger` disallow the use of debugger  

`no-dupe-args` disallow duplicate arguments in function definitions  

`no-dupe-keys` disallow duplicate keys in object literals  

`no-duplicate-case` disallow duplicate case labels  

`no-empty` disallow empty block statements  

`no-empty-character-class` disallow empty character classes in regular expressions  

`no-ex-assign` disallow reassigning exceptions in catch clauses  

`no-extra-boolean-cast` disallow unnecessary boolean casts  

`no-extra-semi` disallow unnecessary semicolons  

`no-func-assign` disallow reassigning function declarations  

`no-inner-declarations` disallow variable or function declarations in nested blocks  

`no-invalid-regexp` disallow invalid regular expression strings in RegExp constructors  

`no-irregular-whitespace` disallow irregular whitespace outside of strings and comments  

`no-obj-calls` disallow calling global object properties as functions  

`no-regex-spaces` disallow multiple spaces in regular expressions  

`no-sparse-arrays` disallow sparse arrays  

`no-unexpected-multiline` disallow confusing multiline expressions  

`no-unreachable` disallow unreachable code after return, throw, continue, and break statements  

`no-unsafe-finally` disallow control flow statements in finally blocks  

`no-unsafe-negation` disallow negating the left operand of relational operators  

`use-isnan` require calls to isNaN() when checking for NaN  

`valid-typeof` enforce comparing typeof expressions against valid strings  

`curly` enforce consistent brace style for all control statements  

`dot-location` enforce consistent newlines before and after dots  

`dot-notation` enforce dot notation whenever possible  

`eqeqeq` require the use of === and !==  

`no-case-declarations` disallow lexical declarations in case clauses  

`no-empty-pattern` disallow empty destructuring patterns  

`no-fallthrough` disallow fallthrough of case statements  

`no-global-assign` disallow assignments to native objects or read-only global variables  

`no-octal` disallow octal literals  

`no-redeclare` disallow variable redeclaration  

`no-self-assign` disallow assignments where both sides are exactly the same  

`no-unused-labels` disallow unused labels  

`no-useless-escape` disallow unnecessary escape characters  

`no-delete-var` disallow deleting variables  

`no-undef` disallow the use of undeclared variables unless mentioned in /* global*/ comments  

`no-unused-vars` disallow unused variables  

`no-mixed-spaces-and-tabs` disallow mixed spaces and tabs for indentation  

`constructor-super` require super() calls in constructors  

`no-class-assign` disallow reassigning class members  

`no-const-assign` disallow reassigning const variables  

`no-dupe-class-members` disallow duplicate class members  

`no-new-symbol` disallow new operators with the Symbol object  

`no-this-before-super` disallow this/super before calling super() in constructors  

`require-yield` require generator functions to contain yield  

## Environments

browser - browser global variables.  
node - Node.js global variables and Node.js scoping.  
commonjs - CommonJS global variables and CommonJS scoping (use this for browser-only code that uses Browserify/WebPack).  
shared-node-browser - Globals common to both Node.js and Browser.  
es6 - enable all ECMAScript 6 features except for modules (this automatically sets the ecmaVersion parser option to 6).  
worker - web workers global variables.  
amd - defines require() and define() as global variables as per the amd spec.  
mocha - adds all of the Mocha testing global variables.  
jasmine - adds all of the Jasmine testing global variables for version 1.3 and 2.0.  
jest - Jest global variables.  
phantomjs - PhantomJS global variables.  
protractor - Protractor global variables.  
qunit - QUnit global variables.  
jquery - jQuery global variables.  
prototypejs - Prototype.js global variables.  
shelljs - ShellJS global variables.  
meteor - Meteor global variables.  
mongo - MongoDB global variables.  
applescript - AppleScript global variables.  
nashorn - Java 8 Nashorn global variables.  
serviceworker - Service Worker global variables.  
atomtest - Atom test helper globals.  
embertest - Ember test helper globals.  
webextensions - WebExtensions globals.  
greasemonkey - GreaseMonkey globals.  
