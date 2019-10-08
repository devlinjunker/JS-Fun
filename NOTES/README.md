# Notes from Development


## Sections
[Testing](/NOTES/test.md)  
[Documention](/NOTES/doc.md)  
[Build](/NOTES/build.md)  
[Databases](/NOTES/db.md)  
[Frameworks](/NOTES/framework.md)  
[Continuous Integration/Development](/NOTES/cicd.md)  
[App Performance](/NOTES/perf.md)  

**UI**  
[HTML5/Canvas](/NOTES/html.md)  
[CSS](/NOTES/css.md)  


## General


Markdown Cheatsheet:
https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet#emphasis


## Up Next TODOs:
 - ~~[ ] Make Transition to VSCode/Typescript~~
  - ~~[ ] Review atom packages for functionality (make notes below with concerns)~~
  - ~~[ ] Basic Typescript project (see test.typescript)~~
  - ~~[ ] Full Typescript Webpack UI project~~
  - ~~[ ] launch.json (see build.md - for server/spec/script files)~~
 - [x] Basic Server Webpack Template
 - [ ] Example DB Services
 - [ ] Githooks
 - [ ] Auto JS Versioning
 - [ ] Project Manager Extension???
  - (seems low priority as I can code without it... but also an easy win and demo...) 
  - Moving away from atom makes old github repo useless... but good practice I suppose
 - [ ] Node 10/12


## Project Ideas
 - [x] CLI Node Library  
   - [ ] Node 10 + with loop and proper input
 - [x] Portfolio website 
   - [ ] Hexo?  
 - [ ] Github API Project Management Webpage
 - [ ] Atom Plugin/VSCode Extension for commit size (warn too many changes per file/too many files)
 - ~~[ ] Source Code Mapper via (typescript/babel) dependency map~~ see madge in [build notes](/NOTES/build.md)  
 - [ ] SSO Server
   - [ ] Google Account Integration
   - [ ] Hosted NewsBlur Integration?
 - [ ] Javascript Game (Soccer? Bouncing ball moving?)   
   - [ ] Browser Game  
   - [ ] Node Game  
 - [ ] NewsBlur (Uprades/Django)
 - [ ] Graphical Node/Web based interface(??)  
 - [ ] Tasker?Productive-me? Server/Client Todo App (Goals, Desires, Chores)  (React Native App?)
 - [ ] AI Sandbox/CTF type thing?  
 - [ ] Encrypted DB Node Libraries  

## Other
 - [x] Basic Node Project  
 - [x] Node Library Project (then imported)  
 - [x] Atom Packages  
 - [..] Atom Project Manager Package (open files and editor configuration)  
 - [ ] VS Code
 - [ ] Websockets  
 - [ ] Howler Audio Library  
 - [ ] Emacs and OrgMode  
 - [ ] Worg  
 - [ ] Jq  
 - [ ] iCal? CalDav? Mail Server?
 - [ ] i18n? translations server?



### Ideas for Application Folder Structures

#### Full Application
```
|-- package.json  
|-- other config files  (.eslintrc, .babelrc, webpack.config, karma.config?)
|-- bin/                <--- contains shell scripts for starting/stopping/installing? (maybe Fabric instead)
|-- src/  
|---- api/              <--- contains api code with rest intefaces  
|------ entry.js        <--- entrypoint to server  
|------ controller/     <--- contains controllers for server endpoints
|-------- user.js       <--- controller for user endpoints
|-------- user.spec.js  <--- tests user.js
|------ service/        <--- contains services for handling/saving data
|---- web/              <--- contains webapp code  
|---- common/  
|-- out/
|---- public/           <--- web app output  
|---- api/              <--- api output
|-- test/               <--- contains test config (maybe helpers)
|---- bootstrap.js      <--- starts and configures the test runner for our test files
|---- e2e/              <--- FEND integration tests?
```

#### Script (Node v6)
```
|-- package.json
|-- other config files (.eslintrc, .babelrc, .flowconfig)
|-- src/
|---- index.js          <--- runs script
|---- other folders/js  
|-- out/                <--- output after babel compile
```

#### Library/Module
**IN PROGRESS**

```
|-- package.json
|-- other config
|-- src/
|---- index.js          <--- sets up library/module exports
```
