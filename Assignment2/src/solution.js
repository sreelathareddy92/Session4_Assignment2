var PersonNameSpace;
(function (PersonNameSpace) {
    function personDetail(per) {
        console.log(" The person details are : name " + per.name + " ,\n        Age is  " + per.age + " ");
    }
    PersonNameSpace.personDetail = personDetail;
    ;
})(PersonNameSpace || (PersonNameSpace = {}));
/// <reference path="mul_namespace.ts" />
var PersonNameSpace;
(function (PersonNameSpace) {
    function studentDetail(stud) {
        console.log(" The student details are : name " + stud.name + " ,\n    Age is  " + stud.age + " ");
    }
    PersonNameSpace.studentDetail = studentDetail;
    ;
})(PersonNameSpace || (PersonNameSpace = {}));
/// <reference path="mul_namespace.ts" />
/// <reference path="invokeNameSpace.ts"/>
var myDetail = { name: "Tanvi", age: 8 };
PersonNameSpace.personDetail(myDetail);
PersonNameSpace.studentDetail(myDetail);
