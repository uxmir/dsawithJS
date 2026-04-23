// //ber kora price and discount
function getPrice(price, discount) {
  if (price <= 0) throw new Error("the number is negative");

  if (price && discount >= 50) {
    console.log("price is to high");
  } else {
    const discountPrice = (discount / 100) * price;
    console.log(`this is percentage result:${discountPrice}`);
    const total_result = price - discountPrice;
    console.log(total_result);
  }
}
getPrice(400, 40);

// //finding s in names
const names = ["Abir", "Sabbir", "Sharmin", "Sujon", "Roni"];
const filteredName = names.filter((val) => val.charAt(0) === "S");
console.log(filteredName);

//number finding
const student = [
  {
    name: "mir",
    age: 24,
    marks: [40, 50, 60],
  },
  {
    name: "hamim",
    age: 20,
    marks: [10, 0, 10],
  },
  {
    name: "shafi",
    age: 18,
    marks: [60, 70, 80],
  },
];

function getResult() {
  student.forEach((s) => {
    const allName = `Name is: ${s.name}`;
    const allAge = `Age is: ${s.age}`;
    const initialVal = 0;
    const result = s.marks.reduce((r, s) => r + s, initialVal);
    const avarage = result / 3;
    console.log(allName, allAge, "avarage is " + avarage);

    if (avarage < 40) {
      console.log(s.name + "failed");
    } else {
      console.log(s.name + "Passed");
    }
  });
}

getResult();

//shoping cart manupulation
const cart = [
  { item: "Laptop", price: 50000, quantity: 1 },
  { item: "Mouse", price: 1500, quantity: 2 },
  { item: "Keyboard", price: 2500, quantity: 1 },
];
const getCart = () => {
  const priceTotal = cart.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
  if (priceTotal > 50000) {
    const discount = (10 / 100) * priceTotal;
    console.log(discount);
  }
};
getCart();

//task counter word
const speech = "i love javascript and i love coding";
function getCountWord() {
  const a = speech.split(" ");
  let wordCount = {};
  a.forEach((val) => {
    if (wordCount[val]) {
      return wordCount[val]++;
    } else {
      return (wordCount[val] = 1);
    }
  });
  console.log(wordCount);
}
getCountWord();

//creating string reverse and output is "ianepo si emosewa" string reverse
function reverseString(string) {
  const str = string;
  const a = str.split(" ").reverse().join(" ");
  console.log(a);
  const b = a.split("").reverse().join("");
  console.log(b);
}
reverseString("openai is awesome");

//The Even-Odd Sum (Array Logic)
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenArr = number.filter((val) => {
  if (val % 2 === 0) {
    return val;
  }
});
console.log(evenArr);
const resultEven = evenArr.reduce((total, item) => {
  return total + item;
}, 0);
console.log(resultEven);
//finding odd
const oddArr = number.filter((val) => {
  if (val % 2 === 1) {
    return val;
  }
});
console.log(oddArr);
const resultOdd = oddArr.reduce((total, item) => {
  return total + item;
}, 0);
console.log(resultOdd);
//now finding all adding even and odd
const totalArrResult = resultEven + resultOdd;
console.log(totalArrResult);

//finding word minimum length in string
const lengthStr="I am learning JavaScript and it is fun";
const splittedLength = lengthStr.split(' ')
let sortestWord=splittedLength[0]
splittedLength.forEach((val)=>{
if(sortestWord.length>val.length){
  sortestWord=val
}
 })
console.log(sortestWord)

// palindrome word in function
function getPalindromeWrod(palinword) {
  const a = palinword;
  const b = a.split("").join("");
  console.log(b);
  const c = a.split("").reverse().join("");
  console.log(c);
  if (c === b) {
    return true;
  } else {
    return false;
  }
}
const palinResult = getPalindromeWrod("racecar");
console.log(palinResult);

//anagram finding in listen and silent
function getAnagram(a,b){
const firstVal=a.split('')
const secondVal=b.split('')

// //finding each val
let firstValStored=[];
firstVal.map((val)=>{
 firstValStored.push(val)
})
console.log(firstValStored)
let secondValStored=[]
 secondVal.map((val)=>{
  secondValStored.push(val)
 })
 console.log(secondValStored)

if( firstVal.includes("s")  && firstVal.length===secondVal.length){
  return true
}else{
  return false
}
}
const anagramFuncton=getAnagram("listen","silent")
console.log(anagramFuncton)

//total result finding and category etc
const transactions = [
  { id: 1, category: 'Groceries', amount: 50, date: '2026-04-01', type: 'expense' },
  { id: 2, category: 'Salary', amount: 2000, date: '2026-04-05', type: 'income' },
  { id: 3, category: 'Electronics', amount: 300, date: '2026-04-10', type: 'expense' },
  { id: 4, category: 'Groceries', amount: 30, date: '2026-04-12', type: 'expense' },
  { id: 5, category: 'Freelance', amount: 500, date: '2026-04-15', type: 'income' }
];

function transaction(){
  const a= transactions.map((c)=>{
const f=c?.amount
return f
})

const m=a.reduce((total,c)=>{
const g=total+c
return g
})
const z=`total amount is :${m}`
console.log(z)

//distructuring total expense
const b=transactions.map((t)=>{
  if(t?.type==='expense') {
  const a= t?.amount
  return a;
  }
  else{
    return 0
  }
})
const totalExpense=b.reduce((total,a)=>{
  return total+a
})
console.log(` total expense is ${totalExpense}`)

//distructing total Income
const i=transactions.map((t)=>{
  if(t?.type==='income') {
  const a= t?.amount
  return a;
  }
  else{
    return 0
  }
})
const totalIncome=i.reduce((total,a)=>{
  return total+a
})
console.log(`totalincome is :${totalIncome}`)
}

transaction()

// //Dhoren, apnar kache kichu user-er information ekta array-te ache, kintu data-gulo ektu "messy" (olochalo). Karor name-e extra space ache, karor email choto-boro hater, abar keu hoyto bhasha ulto-palto likheche.

const rawUsers = [
  { id: 1, name: "  mirmonir   ", email: "MIR@gmail.com", active: true },
  { id: 2, name: "UXMIR ", email: "uxmir@Discord.com", active: false },
  { id: 3, name: "  JavaScriptDev", email: "JS.DEV@OUTLOOK.com", active: true },
];

function sizeArr(){
  //triming all name
  const a = rawUsers?.map((r)=>{
  const a= r?.name.trim()
  return a;
})
console.log(a)
//all email into lowercase
const b=rawUsers?.map((e)=>{
const b=e?.email.toLowerCase();
return b
})
console.log(b)
//active true der niye notun arr
const c=rawUsers?.filter((a)=>{
  if(a?.active===true){
    return a
  }
})
//summery string
const str=c?.map((s)=>{
  const name=s?.name.trim().charAt(0).toUpperCase() +s?.name.slice(3)
  const email=s?.email?.trim().toLowerCase()
  const str=`User ${name} reached at ${email}`;
  return str
})
console.log(str)
}
sizeArr()

// Dhoren, apnar kache ekta boro "String" ba "Paragraph" ache. Apnake emon ekta function likhte hobe ja oi paragraph-ta analyze kore kichu specific jinis ber korbe.

function analizeText(texts){
//Oi paragraph-e mot koyti shobdo (word) ache seta ber korun.
const a=texts.replaceAll('-','').trim().split(" ")?.length
console.log(a)
//Space chara mot koyti letter ba character ache seta dekhaben.
const b=texts.replaceAll('-','').split("")?.length
console.log(b)

//"JavaScript" shobdo-ti puru paragraph-e koybar ache seta ber korun.
const c=texts.trim().split(" ")
const totalWord=[]
c?.forEach((j)=>{
if(j==='JavaScript'){
totalWord.push(j)
}
})
const d=totalWord?.length
console.log(d)

//Paragraph-er protiti shobdo-ke Capitalize (prothom letter boro hater) kore ekta notun string banan.
const e=texts.replaceAll('-','').trim().split(" ")
const upperCaseVal=[]
e.forEach((c)=>{
  const a=c?.charAt(0).toUpperCase() + c.slice(1)
  upperCaseVal.push(a)
})
const f= upperCaseVal.join(" ")
console.log(f)
}
const myText = "JavaScript is awesome. JavaScript is a high-level, often just-in-time compiled language. JavaScript is fun!";
analizeText(myText)