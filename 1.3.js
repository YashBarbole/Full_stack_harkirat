// function getLength(str){
//     console.log("original",str);
//     console.log("length",str.length);
// }
// getLength("im yash");

// const arr=[1,2,3];

// function log(arr){
//     console.log(arr);
// }

// arr.forEach(log);

// class animal{
//     constructor(name,legcount,speaks){
//         this.name=name;
//         this.legcount=legcount;
//         this.speaks=speaks;
//     }
//     speak(){
//         console.log("hi there "+ this.speaks);
//     }
// }

// let dog=new animal("yash",2,"hihi");

// dog.speak();


const users='{"name":"yash","age":22,"name":"om","age":21}'

const user1=JSON.parse(users);
console.log(user1.age);