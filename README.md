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
  message: 'Hello world'
}, function(err, cb){
  console.log(err, cb);
})
```
