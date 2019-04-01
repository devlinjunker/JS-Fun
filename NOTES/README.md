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



### Idea for Application Folder Structure

```
|-- package.json  
|-- other config files  
|-- src/  
|---- server/ <- server code with rest intefaces  
|------ entry.js <- entrypoint to server  
|------ entry.spec.js <- tests entry.js
|---- client <- client code  
|---- common/  
|-- dist/  (if non web app)  
|-- public/  (if web app)  
|-- test/ <-- for test config (maybe helpers)
|-- e2e
```


### Idea for Library/Module Folder Structure
**IN PROGRESS**

```
|-- package.json
|-- other config
|-- src/
|---- index.js <- sets up library/module exports
```

## Project Ideas
 - [x] CLI Node Library  
  - [ ] Node 10 + with loop and proper input
 - [ ] Source Code Mapper via dependency map  
 - [ ] Portfolio website - Hexo?  
 - [ ] SSO Server
  - [ ] Google Account Integration
 - [ ] Graphical Node/Web based interface  
 - [ ] Tasker Server/Client App (Goals, Desires, Chores)   
 - [ ] Javascript Game (Soccer? Bouncing ball moving?)  
 - [ ] AI Sandbox/CTF type thing?  
 - [ ] Browser Game  
 - [ ] Node Game  
 - [ ] Encrypted DB Node Libraries  

## Other
 - [x] Basic Node Project  
 - [x] Node Library Project (then imported)  
 - [ ] Howler Audio Library  
 - [ ] Websockets  
 - [..] Atom Packages  
 - [..] Atom Project Manager Package (open files and editor configuration)  
  - [ ] VS Code
 - [ ] Emacs and OrgMode  
 - [ ] Worg  
 - [ ] Jq  
