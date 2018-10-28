

feathers generate app

```
? Project name feathers-static-cypress
? Description
? What folder should the source files live in? src
? Which package manager are you using (has to be installed globally)? npm
? What type of API are you making? REST, Realtime via Socket.io
? Which testing framework do you prefer? Mocha + assert
```


npm install cypress --save-dev



## Modifications

### add a new static route

`app.use('/intranet/documents', express.static('intranet'));`



## Test it locally

node src

http://localhost:3030/intranet/documents/ => "Hello World!"



## add a cypress test