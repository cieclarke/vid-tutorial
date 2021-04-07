# Lingumi Take Home Task

## Components
|
|-```vid-tutorial-service```
|-```vid-tutorial-app```

### Data Service

A simple API to manage the return of the video tutorial data.

To install
>1 From zip

>> `> #Unzip file`
>> `> cd vid-tutorial-service`
>> `> npm update`

>2 From github

>> ```> git clone git@github.com:cieclarke/vid-tutorial.git vid-tutorial```*
>> ```> cd vid-tutorial/vid-tutorial-service```
>> ```> npm update```


To run tests: `> npm run test`
To run service `> npm run service`

#### End points

* http://*server*:3001/tutorial/[id]
* http://*server*:3001/tutorials
* http://*server*:3001/tutorials?searchterm=[string]
* http://*server*:3001/tutorials?tags=[string]
* http://*server*:3001/tags

### Web App

An npm boilerplate was used to build the base of the app
`> npx create-react-app vid-tutorial-app`

To install

>1 From zip

>> `> #Unzip file`
>> `> cd vid-tutorial-app`
>> `> npm update`

>2 From github

>> `> git clone git@github.com:cieclarke/vid-tutorial.git vid-tutorial`*
>> `> cd vid-tutorial/vid-tutorial-app`
>> `> npm update`

To run tests: `> npm run test`
To run service `> npm run service`

### Website

http://*server*:3000/

\* *Both apps are from the same git repo*