// //20 basic questions (objects + arrays)

// //1. sum values in object arrays 
// let obj = { food: [10, 20, 30], travel: [5, 15], bills: [40, 60] }
// let newObj = { };
// for(let key in obj){
//     let total = obj[key].reduce((sum, num)=>{
//         return num + sum;
//     }, 0);

//     newObj[key] = total;
// }

// console.log(newObj);

// //2. count word occurrences in array 
// const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"]
// const newFruits = {};
// for(let fruit of fruits){
//     if(newFruits[fruit]){
//         newFruits[fruit] += 1;
//     }
//     else{
//         newFruits[fruit] = 1;
//     }
// }
// console.log(newFruits);

// //3.swap keys and values of object 
// const obj3 = { a: "x", b: "y", c: "z" };
// const newobj = {};
// for(let key in obj3){
//     const value = obj3[key];
//     newobj[value] = key;
// }
// console.log(newobj)

// //4. find largest value key 
// const obj4 = { a: 10, b: 50, c: 20 }
// let largest = 0;
// let largestKey = '';
// for(let key in obj4){
//     if(largest < obj4[key]){
//         largest = obj4[key];
//         largestKey = key;
//     }
// }

// console.log(largestKey);

// //5. flatten object of arrays into one array 
// const obj5 = { fruits: ["apple", "banana"], veggies: ["carrot", "pea"] };
// let newarr=[];

// for(let key in obj5){
//     newarr.push(...obj5[key]);
// }

// console.log(newarr);

// //6. group people by city
// const users = [
//   { name: "A", city: "Delhi" },
//   { name: "B", city: "Mumbai" },
//   { name: "C", city: "Delhi" }
// ]
// const ans6 = {};

// for(let user of users){
//     const { name, city } = user;
//     if(ans6[city]){
//         ans6[city].push(name);
//     }else{
//         ans6[city] = [name];
//     }
// }

// console.log(ans6)

// //7. filter object by values > 50
// const inp7 = { a: 20, b: 60, c: 40, d: 90 }
// const op7 = {};

// for(let key in inp7){
//     if(inp7[key] > 50){
//         op7[key] = inp7[key];
//     }
// }

// console.log(op7);

// //8. find student with highest average mark 

// const input =  { A: [80, 90], B: [70, 75, 85] };
// let max = -Infinity;
// let topStudent = "";

// for(let student in input){
//     let sum = input[student].reduce((s,marks)=>{
//         return s+marks;
//     },0)

//     let avg = sum / input[student].length;

//     if(avg > max){
//         max = avg;
//         topStudent = student;
//     }
// }

// console.log(topStudent);

// //9. unique value across all object arrays
// const input = { x: [1,2,3], y: [2,3,4], z: [4,5] };
// const output = [];
// for(let key in input){
//     input[key].forEach((num)=>{
//         if(!output.includes(num)){
//             output.push(num);
//         }
//         else{
//             return;
//         }
//     })
// }

// console.log(output);

// //10. pick only given keys from object 
// function picker(obj, keys){
//     let output = {};
//     for(let key of keys){
//         if(obj[key]){
//             output[key] = obj[key];
//         }
//     }
//     return output;
// }

// console.log(picker({ name: "Rahul", age: 23, city: "Noida" }, ["name","city"]));

// //11. find student with highest average marks 
// const input = { A: [80, 90], B: [70, 75, 85] };

// let max = -Infinity;
// let topStudent = " ";

// for(let student in input){
//     let sum = input[student].reduce((s, marks)=>{
//         return s + marks;
//     }, 0)

//     let avg = sum / input[student].length;

//     if(avg > max){
//         max = avg;
//         topStudent = student;
//     }
// }

// console.log(topStudent);

// //12. sort object entries by values 
// const input = { a: 3, b: 1, c: 2 };
// let output = [];

// output = Object.entries(input);
// output.sort((a,b)=> a[1] - b[1]);
// console.log(output);

// //13. count no of keys 
// const input = { a: 1, b: 2, c: 3 };
// let output = "";

// const arr = Object.keys(input);
// output = arr.length;
// console.log(output);

// //14. Capitalize string values inside object
// const input = { name: "alice", city: "delhi" }
// const output = {};

// for(let key in input){
//     output[key] = input[key].charAt(0).toUpperCase() + input[key].slice(1);
// }

// console.log(output);

// //15. Convert object to query string
// const input = { name: "Alice", age: 25 }
// const result = Object.entries(input).map(([key,val])=>`${key}=${val}`).join("&");
// console.log(result);

// //16. Count even and odd numbers in array
// const input = [1,2,3,4,5,6];
// const output = {even: 0, odd: 0};
// //const op = { even: 3, odd: 3 }

// for(let num of input){
//     if(num%2==0){
//         output["even"]++;
//     }
//     else{
//         output["odd"]++;
//     }
// }

// console.log(output);

// //17. find common keys between 2 objects 
// const a = { a: 1, b: 2, c: 3 }
// const b =  { b: 4, c: 5, d: 6 }
// let key1 = [];
// let key2 = [];
// key1.push(...Object.keys(a));
// key2.push(...Object.keys(b))

// const commonKeys = key1.filter(k => key2.includes(k));

// console.log(commonKeys)

// //18. convert array of objects to lookup by id
// const input = [
//     { id: 1, name: "A" }, 
//     { id: 2, name: "B" }
// ];

// const output = {};

// for(let obj of input){
//     output[obj.id] = obj;
// }
// console.log(output);

// //19. check if all values in objects are numbers
// const input = { a: 1, b: "hello", c: 3 }
// const result = Object.values(input).every(val => Number.isFinite(val));
// console.log(result);
