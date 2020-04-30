'use strict';

const AWS = require('aws-sdk');
const DB = new AWS.DynamoDB.DocumentClient();

const TABLE_NAME = process.env.TABLE_NAME;

exports.lambdaHandler = async (event, context) => {

    let itemsFromDb = await getAllItems();

    return {
        statusCode: 200,
        body: JSON.stringify(itemsFromDb),
    };

};

async function getAllItems() {
    return DB
        .scan({
            TableName : TABLE_NAME
        })
        .promise()
        .then(result => {
            return result.Items;
        });
}
