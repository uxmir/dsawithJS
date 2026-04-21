const data =[12,15,16,98,72]
const position=2
let index=undefined
for(let i=0;i<data.length-1;i++){
    if(i===position){
        index=data[i]
        console.log(index)
    }
}