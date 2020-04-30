'use strict';

const AWS = require('aws-sdk');
const shortid = require('shortid');
const DB = new AWS.DynamoDB.DocumentClient();

const TABLE_NAME = process.env.TABLE_NAME;

exports.lambdaHandler = async (event, context) => {

    let requestBody = JSON.parse(event.body);
    let itemId = shortid.generate();
    requestBody.id = itemId;

    if (requestBody.done === null) {
        requestBody.done = false;
    }

    const params = {
        TableName: TABLE_NAME,
        Item: requestBody
    };

    await DB
        .put(params)
        .promise();

    return {
        statusCode: 201,
        headers: {
            "x-created-item-id": itemId
        }
    };

};
