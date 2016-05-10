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
		var funcNode = funcInfo.node;
		
		if (!funcInfo.hasReturn &&
			funcNode.parent &&
			funcNode.parent.type === 'Property' &&
			(funcNode.parent.key.name === 'up' || funcNode.parent.key.name === 'down')) {
			context.report(node, "Expected a function to return a value");
		}
	}
	
	function checkArrowLastSegment(node) {
		var funcInfo = funcInfoStack.pop();
		var funcNode = funcInfo.node;
		
		if (!funcInfo.hasReturn &&
			funcInfo.expression &&
			funcNode.parent &&
			funcNode.parent.type === 'Property' &&
			(funcNode.parent.key.name === 'up' || funcNode.parent.key.name === 'down')) {
				
			context.report(funcInfo, node.loc, "Expected a function to return a value");
		}
	}
		
	
    return {
		ReturnStatement: function(node) {
			funcInfoStack[funcInfoStack.length - 1].hasReturn = true;
		},
		
		"FunctionDeclaration": markFunction,
		"FunctionExpression": markFunction,
		"ArrowFunctionExpression": markFunction,
		"FunctionDeclaration:exit": checkLastSegment,
		"FunctionExpression:exit": checkLastSegment,
		"ArrowFunctionExpression:exit": checkArrowLastSegment,
    };

};
