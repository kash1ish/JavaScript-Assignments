// //1. sum of all transactions per user
// const input = [
//   { user: "A", amount: 100 },
//   { user: "B", amount: 200 },
//   { user: "A", amount: 50 }
// ]
// const output = {};

// for(let obj of input){
//    if(output[obj.user]){
//         output[obj.user] += obj.amount;
//     }
//     else{
//         output[obj.user] = obj.amount;
//     }
    
// }

// console.log(output);

// //2. transform api response to object (id -> name)
// const input = [
//   { id: 1, name: "Alice" },
//   { id: 2, name: "Bob" }
// ]

// const output = {}; //{ 1: "Alice", 2: "Bob" }

// for(let obj of input){
//     output[obj.id] = obj.name;
// }

// console.log(output);

// //3. remove falsy values from object 
// const input = { a: 0, b: null, c: "hello", d: undefined, e: 5 };
// // { c: "hello", e: 5 }

// for(let key in input){
//     if(!input[key]){
//         delete input[key];
//     }
// }

// console.log(input);

// //4. check for permissions from roles
// const roles={ 
//     admin:["read","write"], 
//     user:["read"], 
//     staff: ["write"]
// } 
// const checkRole = "user";
// const action = "write";

// if(!roles[checkRole]){
//     console.log(false);
// }else{
//     console.log(roles[checkRole].includes(action));
// }

// //5. transform array of orders into revenue per category 
// const input = [
//   { id: 1, category: "electronics", price: 100 },
//   { id: 2, category: "clothes", price: 50 },
//   { id: 3, category: "electronics", price: 200 }
// ]
// const output = {};

// for(let obj of input){
//     console.log(obj.price);
//     if(output[obj.category]){
//         output[obj.category] += obj.price;
//     }
//     else{
//         output[obj.category] = obj.price;
//     }
// }

// console.log(output);

// //REDUCE method
// const op = input.reduce((acc, obj)=>{
//     acc[obj.category] = (acc[obj.category] || 0) + obj.price;
//     return acc;
// }, {});
// console.log(op);

// //6. remove duplicate objects by id 
// const input = [
//   { id: 1, name: "A" },
//   { id: 2, name: "B" },
//   { id: 1, name: "A" }
// ]
// const seen = {};
// const result = [];
// for(let obj of input){
//     if(!seen[obj.id]){
//         seen[obj.id] = true;
//         result.push(obj);
//     }
// }

// console.log(result);

// //7. chunk object entries into groups of size
// const input = { a: 1, b: 2, c: 3, d: 4 }, size=2;
// const result = []; //final ans
// let chunk =[]; //temporary basket
// const entries = Object.entries(input);

// for(let entry of entries){
//     chunk.push(entry);
//     if(chunk.length === size){
//         result.push(chunk);
//         chunk = [];
//     }
// }

// if(chunk.length > 0){
//     result.push(chunk);
// }

// console.log(result)

// //8. find longest string among object values
// const input = { a: "apple", b: "banana", c: "kiwi" };
// let maxLength = -Infinity;
// let longestStr = "";
// for(let key in input){
//     console.log(input[key].length);
//     if(input[key].length > maxLength){
//         maxLength = input[key].length;
//         longestStr = input[key];
//     }
// }
// console.log(longestStr);

// //8. Convert the object where languages are the top-level keys, and inside each 
// // are translation strings by key into an object where translation keys are the 
// // top-level keys, and inside each you store values per language 

// const input = {
//   en: { hello: "Hello", bye: "Goodbye" },
//   fr: { hello: "Bonjour", bye: "Au revoir" },
//   es: { hello: "Hola" }
// }

// const output = {};
// //{
// //   hello: { en: "Hello", fr: "Bonjour", es: "Hola" },
// //   bye: { en: "Goodbye", fr: "Au revoir" }
// // }

// //9. Build index of ids grouped by category
// const input = [
//   { id: 1, category: "fruit" },
//   { id: 2, category: "veggie" },
//   { id: 3, category: "fruit" }
// ]
// const op = {};

// for(let obj of input){
//     if(op[obj.category]){
//         op[obj.category].push(obj.id)
//     }
//     else{
//         op[obj.category] = [obj.id]
//     }
// }

// console.log(op);

// //10. remove deeply nested key from obj 
// const input = { a: { b: { c: 1, d: 2 } } }
// //{ a: { b: { d: 2 } } }
// delete input.a.b.c;
// console.log(input);

// //11. check if 2 objects are deeply equal
// const obj1 = { a: { x: 1, y: 2 } };
// const obj2 = { a: { x: 1, y: 2 } };
// console.log(JSON.stringify(obj1))
// if(JSON.stringify(obj1) === JSON.stringify(obj2)){
//     console.log("true");
// }else{
//     console.log("false");
// }

// //12. deep flatten nested arrays inside object 
// const input = { a: [1, [2, [3]]], b: [4, [5]] }
// const output = {};
// //op - { a: [1,2,3], b: [4,5] }

// for(let key in input){
//     output[key] = input[key].flat(Infinity);
// }
// console.log(output);

// //13. Find most repeated word across categories
// const input = { 
//     fruits: ["apple","apple","banana"], 
//     drinks: ["apple","tea"] 
// }

// for(let category in input){
//     if()
// }








