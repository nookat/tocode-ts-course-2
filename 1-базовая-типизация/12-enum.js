"use strict";
var ShapeKind12;
(function (ShapeKind12) {
    ShapeKind12[ShapeKind12["Circle"] = 0] = "Circle";
    ShapeKind12[ShapeKind12["Square"] = 1] = "Square";
})(ShapeKind12 || (ShapeKind12 = {}));
const myShape12 = ShapeKind12.Circle;
const circle12 = {
    radius: 2,
    kind: ShapeKind12.Circle
};
var StatusCode12;
(function (StatusCode12) {
    StatusCode12[StatusCode12["ERROR"] = 500] = "ERROR";
    StatusCode12[StatusCode12["NOT_FOUND"] = 404] = "NOT_FOUND";
    StatusCode12[StatusCode12["NOT_AUTH"] = 403] = "NOT_AUTH";
})(StatusCode12 || (StatusCode12 = {}));
var Grades12;
(function (Grades12) {
    Grades12["Junior"] = "junior";
    Grades12["Middle"] = "middle";
    Grades12["Senior"] = "senior";
})(Grades12 || (Grades12 = {}));
const dev12 = {
    level: Grades12.Junior,
    login: 'nookat'
};
function upGrade12(user) {
    if (user.level === Grades12.Junior) {
        user.level = Grades12.Middle;
    }
    console.log(user);
}
upGrade12(dev12);
