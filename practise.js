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