mongod - start database server - it needs 1 arg --dbpath - where to keep the data

mongo-  to run some mondo command

you need two temrminals from mongo/bin run
T1. **./mongod --dbpath ~/mongo-data**

then run
T2. ./mongo 
> db.Todos.insert({test: 'Saurabh is here'})
WriteResult({ "nInserted" : 1 })
> db.Todos.find()
{ "_id" : ObjectId("59d5cced7fabc487ebddca56"), "test" : "Saurabh is here" }
ctrl + c

-- use robomongo to visualize the mongo workflow

Vocab
Table -> Collection
Row/Record -> Document
Column -> Field

// mongodb log  when connection is init

2017-10-08T07:33:49.227+0530 I NETWORK  [conn3] received client metadata from 127.0.0.1:57741 conn3: { driver: { name: "nodejs", version: "2.2.31" }, os: { type: "Darwin", name: "darwin", architecture: "x64", version: "17.0.0" }, platform: "Node.js v8.6.0, LE, mongodb-core: 2.1.15" }


ObjectId = (4 byte) 59d5cced[timestamp]  (3 byte) 7fabc4[machine identifier]  (2 byte)87eb[process id] (3 byte) ddca56[random value]

timestamp is only avialble that is avilable if you use default objectid

ObjectID lets you create yoy

Mocha has been upgraded to Jest 