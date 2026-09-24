const data =[12,15,16,98,72]
const position=2
let index=undefined
for(let i=0;i<data.length-1;i++){
    if(i===position){
        index=data[i]
        console.log(index)
    }
}

// array filter task
const history = [
  { role: "system", content: "You are a helpful bot" },
  { role: "user", content: "Hi" },
  { role: "assistant", content: "Hello!" },
  { role: "user", content: "Order pizza" },
  { role: "assistant", content: "Order placed" },
];
const arr = [];
const a = history?.filter((a) => {
  const data = a?.role === "user" || a?.role === "assistant";
  if (data) arr.push(a?.role + ":" + a?.content);
});

console.log(arr)



