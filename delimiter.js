'use strict';

module.exports = require('./is-windows')
	? require('./windows/delimiter') : require('./posix/delimiter');
