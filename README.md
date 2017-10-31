# batch-node
Batch.com lib for Node.js

`npm install batch-node`

```javascript
var batch = require('batch-node')('BATCH_API_KEY', 'BATCH_REST_API_KEY');
batch.sendNotification({
  group_id: 'test',
  recipients: {
    custom_ids: ['123']
  },
  message: {
        "title": "Hello!",
        "body": "How's it going?"
      }
}, function(err, cb){
  console.log(err, cb);
})
```
