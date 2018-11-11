// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
// Set the region
AWS.config.update({region: 'us-east-1'});

// Create the DynamoDB service object
ddb = new AWS.DynamoDB({apiVersion: '2012-08-10'});

var params = {
  TableName: "wages_data",
  Key: {
    "id":{
      N: "2"
    },
    "Gender": {
      S: "Male"
    }
  }
};

ddb.deleteItem(params, function(err, data){
  if(err) console.log(err, err.stack);
  else console.log("Success", data);
});
