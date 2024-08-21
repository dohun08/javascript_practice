let names = [
    {id :"a", name: "kim"},
    {id : "b"},
    {id : "c"},
    {id : "d"},
    {id : "e"},
    {id : "f"},
    {id : "g"},
    {id : "h", name: "kim"},
]
//for문
for(let i=0; i<names.length; i++){
    console.log(names[i]);
}

//forEach문
names.forEach(element => {
    console.log(element);
});

//map문
let data = names.map((element)=>{
    return element.id
})
console.log(data); //배열로 return 됨

//filter
data = names.filter((element)=>{
    return element.id=="a"
})
console.log(data);

//some
data = names.some((element)=>{
    return element.id == "a"
})
console.log(data);

//every
data = names.every((element)=>{
    return element.id =="a"
})
console.log(data);

//find
data = names.find((element) => {
    return element.name=="kim"
})
console.log(data);