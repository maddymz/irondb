const request = require('supertest');
const app = require('../controller/app');

describe('Test the root path', () => {
    test('It should respond to the GET method with index.ejs template and 200 status.', (done) => {
        request(app).get('/').then((response) => {
            expect(response.statusCode).toBe(200);
            expect(response.text).toMatch(/Iron Meteorite Example/);
            done();
        });
    });
});

describe('Test the 404 error response', () => {
    test('It should respond with a status code of 404 and an ejs template containing the error.', (done) => {
        request(app).get('/404').then((response) => {
            expect(response.statusCode).toBe(404);
            expect(response.text).toMatch(/Not Found/);
            done();
        });
    });
});