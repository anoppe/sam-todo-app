'use strict';

const app = require('../../create-todo.js');
const chai = require('chai');
const expect = chai.expect;
const should = chai.should();
var event, context;

describe('Tests index', function () {
    it('verifies successful response', async () => {
        const result = await app.lambdaHandler(event, context);

        expect(result).to.be.an('object');
        expect(result.statusCode).to.equal(201);
        should.not.exist(result.body);

    });
});
