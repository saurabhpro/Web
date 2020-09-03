To test this run 
`> node server.js`

// GET
- ➜  ~ curl localhost:3001/memory/foo -w "\n"
- ➜  ~ curl localhost:3001/disk/foo -w "\n"

// POST
- ➜  ~ curl localhost:3001/memory/foo --header 'Content-Type:application/json' --data '{"data":"This is data on memory, yay!"}'
- ➜  ~ curl localhost:3001/disk/foo --header 'Content-Type:application/json' --data '{"data":"This is data on disk, yay!"}'


to use ES6 


- npm install nodemon @babel/core @babel/node @babel/preset-env -D