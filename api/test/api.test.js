var app = require('../app')
var request = require('supertest')(app);

describe("API", function () {
    it("has books endpoint", function (done) {
        request.get('/api/books')
            .expect(200)
            .end(function (err, res) {
                if (err) return done(err)
                expect(res.body.length).toEqual(0)
                done();
            })
    })
})