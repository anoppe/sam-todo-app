'use strict';

const AWS = require('aws-sdk');
const DB = new AWS.DynamoDB.DocumentClient();

const TABLE_NAME = process.env.TABLE_NAME;

exports.lambdaHandler = async (event, context) => {

    let requestBody = JSON.parse(event.body);
    requestBody.id = event.pathParameters.todoId;

    const params = {
        TableName: TABLE_NAME,
        Item: requestBody
    };

    await DB
        .put(params)
        .promise();

    return {
        statusCode: 204,
    };

};
