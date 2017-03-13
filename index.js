var request = require('superagent');

function batch(apiKey, restApiKey){

  try{
    apiKey = apiKey || process.env['BATCH_API_KEY'];
    restApiKey = restApiKey || process.env['BATCH_REST_API_KEY'];
  } catch(e){
    throw new Error('You must supply an API and Rest API key to send notifications')
  }

  if(!apiKey || !restApiKey){
    throw new Error('You must supply an API and Rest API key to send notifications')
  }

  function requestBuilder(payload, cb){
    request
      .post(`https://api.batch.com/1.1/${apiKey}/transactional/send`)
      .set('X-Authorization', restApiKey)
      .send(payload)
      .end(function(err, response){
        if(err) return cb(err);
        cb(response.body)
      })
  }

  this.sendNotification = function(payload, cb){
    if(!payload.group_id){
      return cb(new Error('You must supply a group_id'))
    }

    if(!payload.recipients){
      return cb(new Error('You must supply a recipients object'))
    }

    if(!payload.message){
      return cb(new Error('You must supply a message'))
    }

    requestBuilder(payload, cb)
  };

  return this;

}

module.exports = batch;