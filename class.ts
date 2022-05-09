// Class
// public : truy cập và thay đổi giá trị bên ngoài class 
// private: không truy cập và thay đổi giá trị bên ngoài class được
// readonly : có thể truy cập nhưng không thể thay đổi giá trị bên ngoài class
class Employee {
   public name: string
   private age: number
   readonly male: boolean

   constructor(n: string, a: number, m:boolean) {
      this.name = n
      this.age = a
      this.male = m
   }
   print(){
      return `Name: ${this.name}, Age: ${this.age}, Gender Male: ${this.name}`
   }
}

const will = new Employee('moriaty',21,true)