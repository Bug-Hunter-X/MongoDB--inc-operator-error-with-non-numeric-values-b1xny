```javascript
// Correct usage of $inc operator
db.collection.updateOne({"_id":1}, {$inc: {a:1}});
// Update string field using $set
db.collection.updateOne({"_id":1}, {$set: {b: "updatedString"}});
```