'use strict';

const worker = require('..');
const assert = require('assert').strict;

assert.strictEqual(worker(), 'Hello from worker');
console.info('worker tests passed');
