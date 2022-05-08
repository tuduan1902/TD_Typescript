// EXPLICIT TYPES
let myName: string
let age: number
let isAuthenticated: boolean

let students : string[] = ['nam', 'hung']
students.push('Lan')
//union
let mixed: (string | number | boolean)[]
mixed = ['moriaty',21,true]
mixed.push('dev')
console.log(mixed)