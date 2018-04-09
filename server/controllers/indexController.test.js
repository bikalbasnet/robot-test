import chai, { expect } from 'chai'
import chaiHttp from 'chai-http'
import assert from 'assert'
import {app} from '../index'
import {setX, setY, setDirection} from '../models/robot'
let should = chai.should()
chai.use(chaiHttp)

describe('When robot was not placed', () => {
    it('it should not place `move` command' , (done) => {
        chai.request(app)
            .post('/move')
            .end((err, res) => {
                res.should.have.status(400);
                res.body.should.be.a('object');
                res.body.should.have.property('msg');
                res.body.msg.should.be.eql('There is no robot to move')
              done();
            });
    })

    it('it should not place `rotate` command' , (done) => {
        chai.request(app)
            .post('/rotate')
            .end((err, res) => {
                res.should.have.status(400);
                res.body.should.be.a('object');
                res.body.should.have.property('msg');
                res.body.msg.should.be.eql('There is no robot to rotate')
              done();
            });
    })
})

describe('When robot may have been placed', () => {
    it('it should place `place` command' , (done) => {
        let placement = {
            x: 0,
            y: 4,
            direction: 'north'
        }
        chai.request(app)
            .put('/place')
            .send(placement)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('msg');
                res.body.msg.should.be.eql('command placed')
              done();
            });
    })

    describe('When x parameter is more than 5 unit', () => {
        it('it should not place `place` command' , (done) => {
        let placement = {
            x: 6,
            y: 4,
            direction: 'north'
        }
        chai.request(app)
            .put('/place')
            .send(placement)
            .end((err, res) => {
                res.should.have.status(400);
                res.body.should.be.a('object');
                res.body.should.have.property('msg');
                res.body.msg.should.be.eql('Invalid parameters')
              done();
            });
        })
    })

    describe('When y parameter is more than 5 unit', () => {
        it('it should not place `place` command' , (done) => {
        let placement = {
            x: 0,
            y: 5,
            direction: 'north'
        }
        chai.request(app)
            .put('/place')
            .send(placement)
            .end((err, res) => {
                res.should.have.status(400);
                res.body.should.be.a('object');
                res.body.should.have.property('msg');
                res.body.msg.should.be.eql('Invalid parameters')
              done();
            });
        })
    })

    describe('When direction parameter is incorrect', () => {
        it('it should not place `place` command' , (done) => {
        let placement = {
            x: 0,
            y: 4,
            direction: '<somethingelse></somethingelse>'
        }
        chai.request(app)
            .put('/place')
            .send(placement)
            .end((err, res) => {
                res.should.have.status(400);
                res.body.should.be.a('object');
                res.body.should.have.property('msg');
                res.body.msg.should.be.eql('Invalid parameters')
              done();
            });
        })
    })
})

describe('When robot has been placed', () => {
    before(() => {
        setX('3')
        setY('4')
        setDirection('east')
     });

    it('it should get correct value on `report` command' , (done) => {
    chai.request(app)
        .get('/report')
        .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('x');
            res.body.x.should.be.eql('3')
            res.body.y.should.be.eql('4')
            res.body.direction.should.be.eql('east')

          done();
        });
    })

    describe('When direction parameter is wrong', () => {
        it('it should not place `rotate` command' , (done) => {
        chai.request(app)
            .post('/rotate')
            .send({
                direction: 'wrong-param'
            })
            .end((err, res) => {
                res.should.have.status(400);
                res.body.should.be.a('object');
                res.body.should.have.property('msg');
                res.body.msg.should.be.eql('Invalid parameters')
              done();
            });
        })
    })

    it('it should place rotate` command' , (done) => {
    chai.request(app)
        .post('/rotate')
        .send({
            direction: 'left'
        })
        .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('msg');
            res.body.msg.should.be.eql('command placed')
          done();
        });
    })

    it('it should place move` command' , (done) => {
    chai.request(app)
        .post('/move')
        .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('msg');
            res.body.msg.should.be.eql('command placed')
          done();
        });
    })
})
