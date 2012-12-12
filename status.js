/*!
 * Rest status
 * Copyright(c) 2012 Thuong Dinh
 * MIT Licensed
 */

var ERROR_MAPPINGS = [

	// 1xx

	// 2xx
	{
		code: '200',
		message: 'OK'
	},
	{
		code: '201',
		message: 'Created'
	},
	{
		code: '202',
		message: 'Accepted'
	},
	{
		code: '204',
		message: 'No Content'
	},

	// 3xx
	{
		code: '301',
		message: 'Moved Permanently'
	},
	{
		code: '302',
		message: 'Found'
	},
	{
		code: '303',
		message: 'See Other'
	},
	{
		code: '304',
		message: 'Not Modified'
	},
	{
		code: '307',
		message: 'Temporary Redirect'
	},

	// 4xx
	{
		code: '400',
		message: 'Bad Request'
	},
	{
		code: '401',
		message: 'Unauthorized'
	},
	{
		code: '403',
		message: 'Forbidden'
	},
	{
		code: '404',
		message: 'Not Found'
	},
	{
		code: '405',
		message: 'Method Not Allowed'
	},
	{
		code: '406',
		message: 'Not Acceptable'
	},
	{
		code: '409',
		message: 'Conflict'
	},
	{
		code: '412',
		message: 'Precondition Failed'
	},
	{
		code: '415',
		message: 'Unsupported Media Type'
	},
	{
		code: '429',
		message: 'Too Many Requests'
	},

	// 5xx
	{
		code: '500',
		message: 'Internal Server Error'
	}
];

function getMessageMethodName (str) {
	return str.replace(' ', '');
};

// build REST error methods base on mapping
// Here is two case to use error
// require('error').E404()
// or require('error').NotFound()
var exports = module.exports;

ERROR_MAPPINGS.forEach(function (errorInfo) {
	exports['E' + errorInfo.code] = exports[getMessageMethodName(errorInfo.message)] = function () {
		var error = new Error(errorInfo.message);
		error.status = errorInfo.code;
		return error;
	}
});