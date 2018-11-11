// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
// Set the region
AWS.config.update({region: 'us-east-1'});

// Create the DynamoDB service object
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
