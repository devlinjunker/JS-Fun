# esdoc test application

This is an example using ESDoc to generate static javadoc style documentation pages for a javascript project.  

View the generated docsite [here](/play/test.esdoc/docs/index.html)

**Notes:**  
View the badge at docs/badge.svg like so:   

![](./badge.svg) (on docsite)

![](./docs/badge.svg) (on README.md)


**ToDo:**  
[ ] To get the manual you have to set the manual option in the .esdoc.json file [???]  

## Dependencies
ESDoc 1.0

## Usage
`npm run doc` to generate static doc in docs folder  
`open docs/index.html` to browse local file system or host docs folder with server of choice

## Project Setup

``npm install esdoc esdoc-standard-plugin``  
Create .esdoc.json:  
```
{  
  "source": "./src",  
  "destination": "./docs",  
  "plugins": [{"name":"esdoc-standard-plugin"}]  
}
```  
``./node_modules/.bin/esdoc``
