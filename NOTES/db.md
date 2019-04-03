# Databases

 - [x] MongoDB?  
 - [x] ~~MapDB?~~ (Java only)  
 - [x] MySQL?  
 - [x] elasticsearch  
 - [ ] ECMA6 interface/extensions? (task, elastic_task, mongo_task, mysql_task, task_manager, app using task manager and instantiating elastic_task vs  mongo_task)  
  - interface not needed because javascript weak typing (what about flow?)  


- Multiple MySQL queries should *always* be placed in a transaction(on one connection) - this usually isn't a problem, but can be if load balancers are part of the environment
  - This includes INSERT + SELECT interactions
