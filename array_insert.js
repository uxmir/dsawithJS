// // array insertation
let arr=[12,65,78,55,97];
let newEl=32;
let position=3;
for (let i=arr.length-1;i>=0;i--){
  if(i>=position){
    arr[i+1]=arr[i]
  }
  if(i===position){
    arr[i]=newEl
  }
}
console.log(arr)

// // 1problem let arr = [10, 20, 30, 40] and new is 5 in first position
let item =[10, 20, 30, 40];
let newItemEl=5
let newItemPosition=0
for(let i=item.length-1;i>=0;i--){
  if(i>=newItemPosition){
    item[i+1]=item[i]
  }
  if(i===newItemPosition){
    item[i]=newItemEl
  }
}
console.log(item)

// Problem 2 — Insert at Given Position 
let givenArr = [10, 20, 30, 40, 50];
let givenNewEl = 99;
let givenPosition = 3;
for (let i=givenArr.length-1;i>=0;i--){
  if(i>= givenPosition){
    givenArr[i+1]=givenArr[i]
  }
  if(i===givenPosition){
    givenArr[i]=givenNewEl
  }
}
console.log(givenArr)

//Problem 3 — Insert at End (Easy–Medium)
let arrLast = [7, 14, 21, 28];
let newElLast = 35;
let lastPosition=arrLast.length-1
for(let i=arrLast.length-1;i>=0;i--){
  if(i===lastPosition){
    arrLast[i+1]=newElLast
    console.log(i)
  }
}
console.log(arrLast)
