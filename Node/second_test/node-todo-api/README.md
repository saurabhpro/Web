mongod - start database server - it needs 1 arg --dbpath - where to keep the data

mongo-  to run some mondo command

you need two temrminals
T1. ./mongod --dbpath ~/mongo-data

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


ObjectId = (4 byte) 59d5cced[timestamp]  (3 byte) 7fabc4[machine identifier]  (2 byte)87eb[process id] (3 byte) ddca56[random value]

timestamp is only avialble that is avilable if you use default objectid

ObjectID lets you create yoy