// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
let awsConfig = {
  "region": "us-east-1",
  "endpoint": "http://dynamodb.us-east-1.amazonaws.com",
  "accessKeyId": "AKIAIURKKGOQBYDS6ZEQ",
  "secretAccessKey": "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"
};
// Set the region
AWS.config.update(awsConfig);
// AWS.config.update({region: 'us-east-1'});

// Create the DynamoDB service object
//ddb = new AWS.DynamoDB({apiVersion: '2012-08-10'});
ddb = new AWS.DynamoDB.DocumentClient();

var params = {
    TableName: "wages_data",
    Key: {
      "id": "001"
    }
};

ddb.scan(params, function(err, data){
  if(err){
    console.log(err, err.stack);
  }
  else{
    console.log(data);
  }
});
