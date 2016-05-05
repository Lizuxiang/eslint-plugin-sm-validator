/**
 * @fileoverview You should always return result in methods
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {
	 var funcInfoStack = [];

    //--------------------------------------------------------------------------
    // Public
    //--------------------------------------------------------------------------

	function markFunction(node) {
		funcInfoStack.push({
			node: node,
			hasReturn: false
		})
		
	}

	function checkLastSegment(node) {
		var funcInfo = funcInfoStack.pop();

		if (!funcInfo.hasReturn) {
			context.report(funcInfo, node.loc, "Expected a function to return a value");
		}

	}

    return {
		ReturnStatement: function(node) {
			funcInfoStack[funcInfoStack.length - 1].hasReturn = true;
		},
		
		"FunctionDeclaration": markFunction,
		"FunctionExpression": markFunction,
		"FunctionDeclaration:exit": checkLastSegment,
		"FunctionExpression:exit": checkLastSegment,
    };

};

module.exports.schema = [
    // fill in your schema
];
