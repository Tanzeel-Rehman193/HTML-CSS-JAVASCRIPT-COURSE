// searching data in dmongodb

use TanzeelKart
//This query will return all the objects with rating 4.5

 db.items.find({rating:4.5})
 db.items.find({rating:{$gte:3.5}})
 db.items.find({rating:{$gt:3.5}})
 //And operator
 db.items.find({rating:{$gt:3.5},price:{$gt:400000}})

 TanzeelKart>  db.items.find({rating:{$lt:5},price:{$gt:700000}})
//Or operator
 TanzeelKart>  db.items.find({$or:[{rating:{$lt:5}},{price:{$gt:700000}}]})

//projection(it will give specific data of object which we write in filter)
db.items.find({rating:{$gte:3.5}},{rating: 1})