interface Person {
   name: string
   age: number
   speak(lang: string): void
   spend(amount: number): number
}

const moriaty: Person = {
   name: 'moriaty',
   age: 21,
   speak(text: string) {
      console.log(text)
   },
   spend(amt: number): number {
      return amt
   } 
}