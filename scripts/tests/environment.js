var assert = require('assert');
import Environment from '../model/environment.js';

describe('Environment', function() {
    describe('constructor', function() {
      it('should return an object', function() {
        let env = new Environment();
        assert.notEqual(undefined,env);
      });
      it('should set moisture', function() {
        let moisture = new Environment().getMoisture();
        assert.equal(50,moisture);
      });
      it('should set light', function() {
        let light = new Environment().getLight();
        assert.equal(50,light);
      });
      it('should set pH', function() {
        let pH = new Environment().getpH();
        assert.equal(6,pH);
      });
    });
  });
  
