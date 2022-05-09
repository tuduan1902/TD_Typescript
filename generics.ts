// TUPLE : same array but type of element is specified
// GENERICS : define the variable's type in advance
type stringArr = Array<string> 
type numArr = Array<number>

const last = (arr: Array<number>) => arr[arr.length - 1  ]
const l1 = last([1,2,3]) 
// console.log(l1) // print 3

const lastT = <T>(arr: Array<T>) => arr[arr.length - 1]

const makeArr = (x:number) => [x]
const makeArrT = <T>(x: T) => [x]

const makeArrXY = <X, Y>(x: X, y: Y) => [x,y]
const m = makeArrXY(5,6)
const m2 = makeArrXY('a',3)
const m3 = makeArrXY('a','b')

const makeTuple = <X, Y>(x:X, y:Y): [X,Y] => [x,y]
const m4 = makeTuple('moriaty',17)

//GENERICS EXTENDS
// Javascipt
const makeFullName = obj => ({
   ...obj,
   fullName: `${obj.firstName} ${obj.lastName}`
})
// Typescript
const makeFullNameConstraint = (obj: {
   firstName: string, 
   lastName:string
}) => ({
   ...obj,
   fullName: `${obj.firstName} ${obj.lastName}`
})

const n1 = makeFullNameConstraint({firstName: 'James', lastName: 'Moriaty'})

const makeFullNameConstraintWithGenerics = <T extends {firstName: string; lastName: string}> (obj:T) => ({
   ...obj,
   fullName:`${obj.firstName} ${obj.lastName}`
}) 
const n2 = makeFullNameConstraintWithGenerics({firstName:'moriaty', lastName:'web dev',age: 21, gender: 'male'})