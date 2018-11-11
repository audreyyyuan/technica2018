function putItem(obj){
  // Load the AWS SDK for Node.js
  var AWS = require('aws-sdk');
  // Set the region
  AWS.config.update({region: 'us-east-1'});
  // Create the DynamoDB service object
  ddb = new AWS.DynamoDB({apiVersion: '2012-08-10'});

  var params = {
    Item: {
        "id": {
          N: obj.id
        },
        "Gender": {
          S: obj.gender
        },
        "Company": {
          S: obj.company
        },
        "Role": {
          S: obj.role
        },
        "Position_Type": {
          S: obj.position
        },
        "Salary": {
          N: obj.salary
        }
    },
    ReturnConsumedCapacity: "TOTAL",
    TableName: "wages_data"
  };

  // Call DynamoDB to add the item to the table
  ddb.putItem(params, function(err, data) {
    if (err) {
      console.log("Error", err);
      return err;
    } else {
      console.log("Success", data);
      return data;
    }
  });
}

function getItem(data){
  // Load the AWS SDK for Node.js
  var AWS = require('aws-sdk');
  // Set the region
  AWS.config.update({region: 'us-east-1'});
  // Create the DynamoDB service object
  ddb = new AWS.DynamoDB({apiVersion: '2012-10-08'});

  var params = {
    TableName: "wages_data",
    Key: {
      'ID' : {N: data},
    },
    ProjectionExpression: 'ID'
  };

  // Call DynamoDB to read the item from the table
  ddb.getItem(params, function(err, data) {
    if (err) {
      console.log("Error", err);
      return err;
    } else {
      console.log("Success", data.Item);
      return data.Item;
    }
  });
}

function deleteItem(id, gender){
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
        N: id
      },
      "Gender": {
        S: gender
      }
    }
  };

  ddb.deleteItem(params, function(err, data){
    if(err){
      console.log(err, err.stack);
      return err;
    }
    else {
      console.log("Success", data);
      return data;
    }
  });
}

function scanTable(){
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
      return err;
    }
    else{
      console.log(data);
      return data;
      //var obj = { name: "John", age: 30, city: "New York" };
      //var myJSON = JSON.stringify(obj);
      //document.getElementById("demo").innerHTML = myJSON;
    }
  });
}

function createTable(){
  // Load the AWS SDK for Node.js
  var AWS = require('aws-sdk');
  // Set the region
  AWS.config.update({region: 'us-east-1'});
  // Create the DynamoDB service object
  ddb = new AWS.DynamoDB({apiVersion: '2012-08-10'});

  var params = {
    AttributeDefinitions: [
      {
        AttributeName: 'id',
        AttributeType: 'N'
      },
      {
        AttributeName: 'Gender',
        AttributeType: 'S'
      }
    ],
    KeySchema: [
      {
        AttributeName: 'id',
        KeyType: 'HASH'
      },
      {
        AttributeName: 'Gender',
        KeyType: 'RANGE'
      }
    ],
    ProvisionedThroughput: {
      ReadCapacityUnits: 5,
      WriteCapacityUnits: 5
    },
    TableName: "wages_data"
  };

  // Call DynamoDB to create the table
  ddb.createTable(params, function(err, data) {
    if (err) {
      console.log("Error", err);
      return err;
    } else {
      console.log("Success", data);
      return data;
    }
  });
}

function deleteTable(tableName){
  // Load the AWS SDK for Node.js
  var AWS = require('aws-sdk');
  // Set the region
  AWS.config.update({region: 'us-east-1'});
  // Create the DynamoDB service object
  ddb = new AWS.DynamoDB({apiVersion: '2012-08-10'});

  var params = {
    TableName: tableName
  };

  // Call DynamoDB to delete the specified table
  ddb.deleteTable(params, function(err, data) {
    if (err && err.code === 'ResourceNotFoundException') {
      txt = "Error: Table not found";
      console.log(txt);
      return txt;
    } else if (err && err.code === 'ResourceInUseException') {
      txt = "Error: Table in use";
      console.log(txt);
      return txt;
    } else {
      console.log("Success", data);
      return data;
    }
  });
}

function describeTable(tableName){
  // Load the AWS SDK for Node.js
  var AWS = require('aws-sdk');
  // Set the region
  AWS.config.update({region: 'us-east-1'});
  // Create the DynamoDB service object
  ddb = new AWS.DynamoDB({apiVersion: '2012-10-08'});

  var params = {
    TableName: tableName
  };

  // Call DynamoDB to retrieve the selected table descriptions
  ddb.describeTable(params, function(err, data) {
    if (err) {
      console.log("Error", err);
      return err;
    } else {
      console.log("Success", data.Table.KeySchema);
      return data.Table.KeySchema;
    }
  });
}

function listTables(){
  // Load the AWS SDK for Node.js
  var AWS = require('aws-sdk');
  // Set the region
  AWS.config.update({region: 'us-east-1'});
  // Create the DynamoDB service object
  ddb = new AWS.DynamoDB({apiVersion: '2012-10-08'});

  // Call DynamoDB to retrieve the list of tables
  ddb.listTables({Limit: 10}, function(err, data) {
    if (err) {
      console.log("Error", err.code);
      return err;
    } else {
      console.log("Table names are ", data.TableNames);
      return data.TableNames;
    }
  });
}