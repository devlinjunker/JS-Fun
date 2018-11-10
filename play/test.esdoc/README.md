# esdoc test application

This is an example of how to use esdoc

to get the manual you have to set the manual option in the .esdoc.json file

View the badge at docs/badge.svg like so: ![](./docs/badge.svg)

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
