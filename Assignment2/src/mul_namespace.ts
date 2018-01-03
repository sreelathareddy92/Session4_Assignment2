/**
 * PersonNameSpace
 * @interface Student
 * @param {string} name
 * @param {number} age
 * @function personDetail
 */

export namespace PersonNameSpace {
    export interface Student {
    name: string;
    age: number;
    }

    export function personDetail(per: Student) {
        console.log(` The person details are : name ${per.name} , Age is  ${per.age} `);
        };
}