//Function: Khai báo theo dạng biến 
const square = (side: number)  => side*side
console.log(square(3))

const add = (a: number, b:number, c?: number | string) => {
   console.log(a+b)
   console.log(c)
}
//  FUNCTION SIGNATURE
// let or type 
let greet: (a:string, b:string) => void
greet = (name: string, greeting: string) =>
   console.log(`${name} says ${greeting}`)
greet('Moriaty','Catch me if you can!')

