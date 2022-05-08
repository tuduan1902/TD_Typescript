var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var last = function (arr) { return arr[arr.length - 1]; };
var l1 = last([1, 2, 3]);
// console.log(l1) // print 3
var lastT = function (arr) { return arr[arr.length - 1]; };
var makeArr = function (x) { return [x]; };
var makeArrT = function (x) { return [x]; };
var makeArrXY = function (x, y) { return [x, y]; };
var m = makeArrXY(5, 6);
var m2 = makeArrXY('a', 3);
var m3 = makeArrXY('a', 'b');
var makeTuple = function (x, y) { return [x, y]; };
var m4 = makeTuple('moriaty', 17);
//GENERICS EXTENDS
// Javascipt
var makeFullName = function (obj) { return (__assign(__assign({}, obj), { fullName: "".concat(obj.firstName, " ").concat(obj.lastName) })); };
// Typescript
var makeFullNameConstraint = function (obj) { return (__assign(__assign({}, obj), { fullName: "".concat(obj.firstName, " ").concat(obj.lastName) })); };
var n1 = makeFullNameConstraint({ firstName: 'James', lastName: 'Moriaty' });
var makeFullNameConstraintWithGenerics = function (obj) { return (__assign(__assign({}, obj), { fullName: "".concat(obj.firstName, " ").concat(obj.lastName) })); };
var n2 = makeFullNameConstraintWithGenerics({ firstName: 'moriaty', lastName: 'web dev', age: 21, gender: 'male' });
