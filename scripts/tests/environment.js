var assert = require('assert');
import Environment from '../model/environment.js';

describe('Environment', function() {
    describe('constructor', function() {
      let env = new Environment();
      it('should return an object', function() {
        assert.notEqual(undefined,env);
      });
      it('should set moisture', function() {
        assert.equal(50,env.getMoisture());
      });
      it('should set light', function() {
        assert.equal(50,env.getLight());
      });
      it('should set pH', function() {
        assert.equal(6,env.getpH());
      });
    });
    describe('updates values',function() {
      let env = new Environment();
      it('should reduce moisture daily', function() {
        let m1=env.getMoisture();
        env.update({});
        assert.equal(m1-5,env.getMoisture());
      });
      it('should update moisture on value',function() {
        let m1=env.getMoisture();
        env.update({water: "high"});
        assert.equal(m1+5,env.getMoisture()); // high=+10 but daily reduces -5
      });
      it('should update light on value', function() {
        env.update({light: "75"});
        assert.equal(75,env.getLight());
      });
      // pH daily adjust for "mid level" moisture is +.08
      it('should update pH on peat', function(){
        let p1=env.getpH();
        env.update({fertilizer: "peat"})
        assert.equal(p1-0.25+0.08,env.getpH());
      });
      it('should update pH on lime', function(){
        let p1=env.getpH();
        env.update({fertilizer: "lime"})
        assert.equal(p1+0.25+0.08,env.getpH());
      });      
      // to add - tests for border conditions
    });
    describe('can be reset',function() {

    });
    describe('is observable', function() {

    });
  });
  
