// inserting data in dmongodb

use TanzeelKart
db.items.insertOne({name:"iphone 20s",price:700000,rating:2.5,qty:235,sold:19})
db.items.insertMany([{name:"samsung 20s",price:400000,rating:3.5,qty:395,sold:99},{name:"vivo 20s",price:800000,rating:4.5,qty:95,sold:59}])