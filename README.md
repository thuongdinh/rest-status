rest-status
===========

REST Response Status Codes Utility

Guide
===========

Install
```js
npm install rest-status
```

Use with status code
```js
require("rest-status").E404(); // Error object with: status=404, message=Not Found
```

Use with status message
```js
require("rest-status").NotFound(); // Error object with: status=404, message=Not Found
```