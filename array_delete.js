let data =[12,15,16,98,72]
let position=1
for (let i=position;i<data.length-1;i++){
    data[i]=data[i+1]
}
data.length=data.length-1
console.log(data)

