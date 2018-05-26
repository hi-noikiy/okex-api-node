/* eslint-env mocha */
'use strict'

const assert = require('assert')
const Okex = require('../index');

describe('index', () => {
  it('should be loaded', () => {
    assert.equal(typeof Okex, 'function')
  })

  describe('constructor', () => {
    it('throws on error options', () => {
      assert.throws(() => new Okex());
      assert.throws(() => new Okex({}));
    })
  })
});
