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

const people = [
  { name: "Alice", age: 21 },
  { name: "Max", age: 20 },
  { name: "Jane", age: 20 },
   { name: "Jane", age: 30 },
];
const ageArr = people
  .filter((a) => {
    if (a.age && !isNaN(Number(a.age))) return a.age;
  })
  ?.map((c) => c.age);
 console.log(ageArr)

const result =Object.groupBy(people,({age})=>{
  ageArr.forEach((a)=>{
    if(a===age) return a
  })
})
console.log(result)
//  people.filter((x)=>{
//  if(ageArr.includes(x.age)){
//   console.log(x)
//  }
//  })
//   const arr=[]
// ageArr.filter((a)=>{
//   people.filter((b)=>{
//     if(a===b.age){
//       arr.push(b)
//     }
//   })
// })

// console.log(arr)