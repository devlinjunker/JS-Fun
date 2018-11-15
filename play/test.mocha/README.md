# Example Application with Mocha Test Framework

Now with ECMA6 support and added nyc (istanbul?)

Also EsDoc will display tests, just needed to configure .esdoc.json

**ToDo:**  
[ ] Mocha vs Jasmine  
[ ] Karma ?  
[ ] Run modified tests on save  
[ ] Test Coverage saved in files  
[ ] Chai and Chai as promised  
[ ] Sinon  
[ ] Read about best practices  

## dependencies
- mocha 3.5
- babel-core 6.2
- babel-preset-env 1.6

## Usage

To run mocha test by themselves:  
``./node_modules/.bin/mocha``

To see coverage with nyc (istanbul?):  
``./node_modules/.bin/nyc ./node_modules/.bin/mocha``  
