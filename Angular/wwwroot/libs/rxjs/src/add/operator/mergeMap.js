"use strict";
const Observable_1 = require('../../Observable');
const mergeMap_1 = require('../../operator/mergeMap');
Observable_1.Observable.prototype.mergeMap = mergeMap_1.mergeMap;
Observable_1.Observable.prototype.flatMap = mergeMap_1.mergeMap;
//# sourceMappingURL=mergeMap.js.map