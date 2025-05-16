// updating data
// for 1 object
 db.items.updateOne({name:"iphone 20s"},{$set:{price:2}})
//for many objects
  db.items.updateMany({name:"iphone 20s"},{$set:{price:2,rating:-1}})