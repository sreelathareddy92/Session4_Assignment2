"use strict";
/**
 * @namespace PersonNameSpace
 * @function studentDetail
 * @param {Object} myDetail
 * @param {Object} details
 */
exports.__esModule = true;
// import PersonNameSpace into your file
var mul_namespace_1 = require("./mul_namespace");
var invokeNameSpace_1 = require("./invokeNameSpace");
var myDetail = { name: "Tanvi", age: 8 };
mul_namespace_1.PersonNameSpace.personDetail(myDetail);
var details = { name: "Tanvika", age: 5 };
invokeNameSpace_1.studentDetail(details);
