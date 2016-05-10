/**
 * @fileoverview You should always return result in methods
 * @author ZdrifZlender
 * @copyright 2016 ZdrifZlender. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
'use strict';

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------
var rule = require('../../../lib/index')['rules']['methods-must-return'],
	RuleTester = require('eslint').RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run('methods-must-return', rule, {

	valid: [
		'module.exports = {' +
			'up: function() {' +
				'if (true) {' +
					'return 5;' +
				'}' +
			'}' +
		'}'
	],

    invalid: [{
		code: 'module.exports = {' +
			'up: function() {' +
				'function internal() {' +
					'if (true) {' +
						'return 5;' +
					'} else {' +
						'return 6;' +
					'}'+
				'}' +
			'}' +
		'}',
		errors: [{
			message: 'Expected a function to return a value',
		}]
	}]
});
