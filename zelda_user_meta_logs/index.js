const AWS = require('aws-sdk');

// Initialize the DynamoDB client
const dynamoDB = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event, context) => {
  // Retrieve data from the DynamoDB table
  const params = {
    TableName: 'UserMetaLog',
  };

  try {
    const result = await dynamoDB.scan(params).promise();
    console.log(result);
    return {
      statusCode: 200,
      body: JSON.stringify(result.Items),
    };
  } catch (err) {
    console.log(err);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Failed to retrieve data from DynamoDB' }),
    };
  }
};