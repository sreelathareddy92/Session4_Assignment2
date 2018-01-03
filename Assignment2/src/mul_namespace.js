"use strict";
/**
 * PersonNameSpace
 * @interface Student
 * @param {string} name
 * @param {number} age
 * @function personDetail
 */
exports.__esModule = true;
var PersonNameSpace;
(function (PersonNameSpace) {
    function personDetail(per) {
        console.log(" The person details are : name " + per.name + " , Age is  " + per.age + " ");
    }
    PersonNameSpace.personDetail = personDetail;
    ;
})(PersonNameSpace = exports.PersonNameSpace || (exports.PersonNameSpace = {}));
