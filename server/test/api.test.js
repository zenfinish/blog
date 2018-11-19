const chai = require('chai');
const chaiHttp = require('chai-http');

const expect = chai.expect;
const app = require('../app.js');

chai.use(chaiHttp);

describe('/users | POST | Add new user', function() {
    it('error duplicate', function(done) {
        chai.request(app)
            .post('/users')
            .send({
                name: 'Zainal Abidin',
                email: 'zen@mail.com',
                password: 'zen'
            })
            .end(function(err, res) {            
                expect(res).to.have.status(500);
                expect(res).to.be.json;
                done();
            });
    });  
    it('should create articles to database', function() {
        chai.request(app)
            .post('/users')
            .send({
                name: 'Zainal Abidin',
                email: 'zen@mail.com',
                password: 'zen'
            })
            .end(function(err, res) {            
                expect(res).to.have.status(201);
            });
    });
});