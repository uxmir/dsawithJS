function reverseString(string){
  const str=string;
  const a=str.split(' ').reverse().join( ' ')
console.log(a)
const b=a.split('').reverse().join( '')
console.log(b)
}
reverseString("openai is awesome")