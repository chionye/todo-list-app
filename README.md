
# Wajesmart Frontend Assessment

A solution todo app that authenticates users and allow them to create a new task, delete a task, mark a task as completed and filter through tasks


## Installation

Create a directory and move into the folder
```bash
  mkdir new_folder
  cd new_folder
```

   clone this project
```bash
  git clone https://github.com/chionye/todo-list-app.git .
``` 
Install concurrency using npm
```bash
  npm install
``` 

Install dependencies for client and server
```bash
  npm run setup
``` 

create a new mysql database named todo

To run the app
```bash
  npm run dev 
```


## Running Tests

To run tests, navigate into client folder

```bash
  cd client
``` 

Run test script

```bash
  npm run test
```
## Assumptions

In order to complete the task assigned, especially the part of the authentication and authorization of a user, a backend had to be created. Two MySQL tables named Users and Todos were created to hold the list of users and to save newly created data into the database. On application load, it fetches the json data from the JSONPlaceholder API (https://jsonplaceholder.typicode.com/todos) which was used to populate the application but not saved in the database. It was assumed that the focus of this exercise was to judge several criteria especially on the frontend design and as such the only database operations that were incorporated are the creation of a user, user login and saving a new task. Others such as deleting tasks and marking the tasks as completed were all handled on the frontend by employing strategic use of state management practices.
## Branching Strategy

The GitHub repository has 4 main branches: main, develop, feature-auth and feature-todo-app. Following the Git Flow branching strategy, the main branch was used to hold the most stable and production ready version of the code, while the develop branch served as the collation point for all other feature branches. The feature-auth branch was used to develop the auth feature and everything that it required including the backend code and the feature-todo-app was used to create the todo app and all accompanying features of the app. After each feature was completed, they were tested and then merged back into develop and then the develop branch was merged back into main as the production ready v1.0.0 of the application. 
## Authors

- [@chionye](https://github.com/chionye)
Valentine Michael

