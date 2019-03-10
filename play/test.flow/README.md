# Flow JS Static Type Checker

Testing FlowJS Static Type Checker.

[Flow Documentation](https://flow.org/en/)

**ToDo:**  
[x] Update Flow to 0.8  
[x] Combine with Babel using flow preset  
[ ] Look into flow changelog

## Dependencies

Flow 0.54

## Usage

Include `// @flow`` comment at the top of each file to be checked.

`npm run test` to init .flowconfig if doesn't exist, and start the flow background process

or

`./node_modules/.bin/flow`



### Notes

Duplicate Webpack aliases with [options] in `.flowconfig file`
