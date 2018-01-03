
/**
 * @namespace PersonNameSpace
 * @function studentDetail
 */

 // import PersonNameSpace into your file
import { PersonNameSpace } from './mul_namespace'

export function studentDetail(stud: PersonNameSpace.Student) {
console.log(` The student details are : name ${stud.name} , Age is  ${stud.age} `);
};


  