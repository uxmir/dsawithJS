// //traverse and access
const data=[2,3,4,8,6,12,98]
for(let i=0;i<data.length;i++){
  console.log(data[i]) 
  console.log(data[3]) 
}

// //2st problem:total by adding each value 
let item= [2,3,4,8,6,12,98];
let sum=0
for(let i=0;i<item.length;i++){
   sum+=item[i]
   console.log(sum)
}
//3rd problem  finding evenvalue
for (let i=0; i<item.length;i++){
    if(item[i]%2===0){
        console.log(item[i])
    }
}
//finding array length
console.log(item.length)

//finding odd value
for (let i=0;i<item.length;i++){
    if(item[i]%2 !==0){
        console.log(item[i])
    }
}

//total_amount of arr index
let arr=[2,3,4,8,6,12,98];
let amount=0;
for(let i=0;i<arr.length;i++){
    amount += i;
    console.log(amount)
}

//reverse arr
for (let i=arr.length-1;i>=0;i--){
    console.log(arr[i])

}