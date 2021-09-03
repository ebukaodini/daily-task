# daily-task
A basic todo application that follows the kanban style of task management.

How to link the Redux to the Database:
+ Build the redux reducer to handle global state of different features
+ Let the reducer actions handle the database operations and update state when successful.
  i.e Acting like the controller in an MVC architecture

How to connect the the database to the redux:
+ We are using PouchDb
+ Instances of the database is opened and closed with every redux action.