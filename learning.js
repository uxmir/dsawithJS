// const people = [
//   { name: "Alice", age: 21 },
//   { name: "Max", age: 20 },
//   { name: "Jane", age: 20 },
// ];
// const arr1 = [];
// const arr2 = [];
// people.filter((a) => {
//   if (a.age === 20) {
//     arr1.push(a);
//   }
//   if (a.age === 21) {
//     arr2.push(a);
//   }
// });
// const arrObj = {
//   20: arr1,
//   21: arr2,
// };
// console.log(arrObj);

// const  a=Object.groupBy((people,{age})=>{
//   return age
// })
// console.log

function romanToInt(a){
const romanValue = [
  { roman: "I", value: 1 },
  { roman: "V", value: 5 },
  { roman: "X", value: 10 },
  { roman: "L", value: 50 },
  { roman: "C", value: 100 },
  { roman: "D", value: 500 },
  { roman: "M", value: 1000 }
];

const y=a.split("");
console.log(y)
const m=y.map((n)=>{
if(romanValue.includes(n)){
  console.log(romanValue.roman)
}
})
console.log(m)
}

romanToInt("III")