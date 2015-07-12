'use strict';

/* eslint-env mocha */

/*
 * Dependencies.
 */

var collapse = require('./');
var assert = require('assert');

/*
 * Tests.
 */

describe('collapse(value)', function () {
    it('should coerce to string', function () {
        assert.equal(collapse(true), 'true');
    });

    it('should work', function () {
        assert.equal(collapse(' \t\nbar \nbaz\t'), ' bar baz ');
        assert.equal(collapse('   bar\t\t\tbaz\n\n\n'), ' bar baz ');
        assert.equal(collapse(' \n bar\t\n\tbaz\r\n'), ' bar baz ');
    });
});
