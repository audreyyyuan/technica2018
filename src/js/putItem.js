// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
// Set the region
AWS.config.update({region: 'us-east-1'});

// Create the DynamoDB service object
ddb = new AWS.DynamoDB({apiVersion: '2012-08-10'});
// dynamodb.batchGetItem(params, function(err, data){
//   if(err) console.log(err, err.stack);
//   else console.log(data);
// })

var params = {
  // Id: process.argv[2],
  // Gender: process.argv[3],
  Item: {
      "id": {
        N: "001"
      },
      "Gender": {
        S: "Female"
      },
      "Company": {
        S: "Google"
      },
      "Role": {
        S: "Software Engineering"
      },
      "Position_Type": {
        S: "Full Time"
      },
      "Salary": {
        N: "150000"
      }
  },
  Item: {
      "id": {
        N: "002"
      },
      "Gender": {
        S: "Male"
      },
      "Company": {
        S: "Facebook"
      },
      "Role": {
        S: "Software Engineering"
      },
      "Position_Type": {
        S: "Intern"
      },
      "Salary": {
        N: "125000"
      }
  },
  ReturnConsumedCapacity: "TOTAL",
  TableName: "wages_data"
};

// Call DynamoDB to add the item to the table
ddb.putItem(params, function(err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Success", data);
  }
});
