// // // task_1 reverse string
function reverseString(name) {
  const m = name.split("").reverse().join("");
  console.log(m);
}
reverseString("mirmoniruzzaman");

//task_2 vowel ber koro
function findVowel(text) {
  const a = text.split(" ");
  const totalVowel = [];
  const vowelArr = ["a", "e", "o", "i", "u"];
  a.forEach((t) => {
    const z = t.split("");
    const x = z.forEach((y) => {
      if (vowelArr.includes(y)) {
        totalVowel.push(y);
      }
    });
  });
  console.log(totalVowel?.length);
}

findVowel(
  "JavaScript is an amazing programming language. It allows developers to create interactive web applications with ease. Learning to code opens up a world of endless possibilities and innovation!",
);

// //task_4 finding big string
function bigStr(str) {
  let max = 0;
  const arr1 = [];
  const a = str?.split(" ");
  arr1.push(a[0]?.length, a[1]?.length, a[2]?.length, a[3]?.length);
  arr1.forEach((v) => {
    if (max < v) {
      max = v;
    }
  });
  const c = [a[0], a[1], a[2], a[3]];
  c.filter((v) => {
    if (v?.length === max) {
      console.log(`big string is ${v} and it's length is ${max}`);
    }
  });

}

bigStr("mirmonir is a bad");

//task_6 replaicng word in string
function replaceStr(str){
//this is a first way    
const a=str.replaceAll("JavaScript","Python")
console.log(a)
// this is second way
const b=str.replace(".","").split(" ")
b.filter((t)=>{
if(t==="JavaScript"){
    t="Python"
}
console.log(t)
})

}
replaceStr("I love JavaScript. JavaScript is fun!")

//task_7 stringe shudshu number ber kora
function findNumber(n){
if(isNaN(n)){
console.log("it's not  a number")
}else{
 console.log("this is  a number")
}
}
findNumber("1235")
