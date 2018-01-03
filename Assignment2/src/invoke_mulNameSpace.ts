/**
 * @namespace PersonNameSpace
 * @function studentDetail
 * @param {Object} myDetail
 * @param {Object} details
 */

// import PersonNameSpace into your file
import { PersonNameSpace } from './mul_namespace'
import { studentDetail } from './invokeNameSpace'

let myDetail: PersonNameSpace.Student = { name: "Tanvi", age: 8 }
PersonNameSpace.personDetail(myDetail);

let details: PersonNameSpace.Student = { name: "Tanvika", age: 5 }
studentDetail(details);