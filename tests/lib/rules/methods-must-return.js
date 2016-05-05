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

var rule = require('../../../lib/rules/methods-must-return'),

    RuleTester = require('eslint').RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run('methods-must-return', rule, {

	valid: [
		'function functionDeclarationReturn() { var result; return result}',
		'function functionDeclarationReturnWithFunctionExpressionReturn() {' +
			'var result; ' +
			'var func = function () {' +
				'if (result) {' +
					'var nextResult;' +
				'}' +
				'return nextResult;' +
			'};' +
			'return result;' + 
		'}',
	],

    invalid: [
        {
            code: 'function functionDeclarationNoReturn() { var myVar = 5; }',
            errors: [{
                message: 'Expected a function to return a value',
            }]
        }, {
			code: 'function functionDeclarationReturnWithFunctionExpressionNoReturn() {' +
					'var result; ' +
					'var func = function () {' +
						'if (result) {' +
							'var nextResult;' +
						'}' +
						'return nextResult;' +
					'};' +
				'}',
            errors: [{
                message: 'Expected a function to return a value',
            }]
		}, {
			code: 'function functionDeclarationNoReturnWithFunctionExpressionReturn() {' +
					'var result; ' +
					'var func = function () {' +
						'if (result) {' +
							'var nextResult;' +
						'}' +
					'};' +
					'return result;' + 
				'}',
            errors: [{
                message: 'Expected a function to return a value',
            }]
		}
    ]
});


6906 spring run drive

westerville oh 43082
