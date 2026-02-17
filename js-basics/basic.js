//1. sum values in object arrays
function sumValues(input){
   const result = {};
   for(let key in input){
    result[key] = input[key].reduce((sum,val)=> sum + val, 0)
   }
   return result;
}

console.log(sumValues({ food: [10, 20, 30], travel: [5, 15], bills: [40, 60] }))

//2. count word occurences in array
function wordOccurence(input){
    const result = {};
    for(let str of input){
        if(result[str]){
            result[str] += 1
        }else{
            result[str] = 1
        }
    }
    return result;
}

console.log(wordOccurence(["apple", "banana", "apple", "orange", "banana", "apple"]))

//3. swap key and values of objects
function swap(input){
    const result = {};
    for(let key in input){
        result[input[key]] = key;
    }
    return result;
}
console.log(swap({ a: "x", b: "y", c: "z" }))

//4. find largest value key
function largestKey(input){
    let max = -Infinity;
    let maxKey = '';
    for(let key in input){
        if(input[key] > max){
            maxKey = key;
            max = input[key];
        }
    }
    return maxKey;
}

console.log(largestKey({ a: 10, b: 50, c: 20 }))

//5. flatten objects of arrays into one array 
function flatten(input){
    const result = [];
    for(let key in input){
        result.push(...input[key]);
    }
    return result
}

console.log(flatten({ fruits: ["apple", "banana"], veggies: ["carrot", "pea"] }))

//6. group people by city
function groupByCity(input){
    let result = {}
    for(let obj of input){
        const { name, city } = obj;
        if(result[city]){
            result[city].push(name);
        }
        else{
            result[city] = [name]
        }
    }
    return result;
}

console.log(groupByCity([
  { name: "A", city: "Delhi" },
  { name: "B", city: "Mumbai" },
  { name: "C", city: "Delhi" }
]))

//7. filter obj by vals > 50
function filterVal(input){
    for(let key in input){
        if(input[key] < 50){
            delete input[key];
        }
    }
    return input;
}
console.log(filterVal({ a: 20, b: 60, c: 40, d: 90 }))

//8. find student with highest avg mark
function maxAvg(input){
    let max = -Infinity;
    let topStudent = "";
    for(let key in input){
        let sum = input[key].reduce((sum,val) => sum + val, 0);
        avg = sum / input[key].length;
        if(avg > max){
            topStudent = key;
            max = avg;
        }
    }
    return topStudent;
}

console.log(maxAvg({ A: [80, 90], B: [70, 75, 85], c: [100,100] }));

//9. unique values across all obj arrays
function uniqueVal(input){
    const result = [];
    for(let key in input){
        input[key].forEach((val)=>{
            if(!result.includes(val)){
                result.push(val)
            }
        })
    }
    return result;
}

console.log(uniqueVal({ x: [1,2,3], y: [2,3,4], z: [4,5] }))

//10. pick only given keys from obj 
function pickKeys(input, keys){
    const result = {}
    for(key of keys){
        if(input[key]){
            result[key] = input[key];
        }
    }
    return result;
}

console.log(pickKeys({ name: "Rahul", age: 23, city: "Noida" }, ["name","city","nnnn"]))

//11. find student with highest avg marks

//12. sort object enteries
function sortObj(input){
    const values =  Object.entries(input);
    values.sort((a,b) => a[1]- b[1]);
    return values;
}

console.log(sortObj({ a: 3, b: 1, c: 2 }))

//example
// const arr = [ [ 'b', 1, 20 ], [ 'c', 2, 40 ], [ 'a', 3, 10 ] ]
// const sorted = arr.sort((a,b) => a[2]- b[2]);
// console.log(sorted)

//13. count number of keys in objects
function countKeys(input){
    const keys = Object.keys(input);
    return keys.length;
}
console.log(countKeys({ a: 1, b: 2, c: 3, d:40, e: 99}))

//14. capitalize string values inside object
function capitalize(input){
    const result = {};
    for(let key in input){
        result[key] = input[key].charAt(0).toUpperCase() + input[key].slice(1);
    }
    return result;
}

console.log(capitalize({ name: "alice", city: "delhi" }))

//15. convert object to query string
function queryString(input){
    let str = '';
    str = Object.entries(input).map(([key,val]) => `${key}=${val}`).join("&");
    return str
}

console.log(queryString({ name: "Alice", age: 25 }));

//16. count even and odd numbers in array
function oddeven(input){
    let odd =0 , even = 0;
    for(let num of input){
        if(num % 2 == 0){ 
            even++
        }
        else{
            odd++
        }
    }
    return {odd, even};
}
console.log(oddeven([1,2,3,4,5,6]))

//17. find common keys between 2 objects
function commonKeys(obj1, obj2){
    let arr1 = Object.keys(obj1);
    let arr2 = Object.keys(obj2);
    const result = arr1.filter(k => arr2.includes(k));
    return result;
}
console.log(commonKeys({ a: 1, b: 2, c: 3 }, { b: 4, c: 5, d: 6 }));

//18. convert array of objects to lookup by id
function lookupById(input){
    const result = {};
    for(let obj of input){
        result[obj.id] = obj
    }
    return result;
}

console.log(lookupById([{ id: 1, name: "A" }, { id: 2, name: "B" }]));

//19. check if all values in object are numbers
function numberCheck(input){
    const result = Object.values(input).every(val => Number.isFinite(val));
    return result;
}

console.log(numberCheck({ a: 1, b: 2, c: 3 }))

//INTERMEDIATE QUESTIONS

//1. sum all transactions per user 
function sumPerUser(input){
    const result = {};
    for(let obj of input){
        const {user, amount} = obj
        if(result[user]){
            result[user] += amount;
        }else{
            result[user] = amount;
        }
    }
    return result
}

console.log(sumPerUser([
  { user: "A", amount: 100 },
  { user: "B", amount: 200 },
  { user: "A", amount: 50 }
]))

//2. transform api response to object
function apiResponse(input){
    const result = {};
    for(let obj of input){
        result[obj.id] = obj.name;
    }
    return result;
}

console.log(apiResponse([
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" }
]))

//3. remove falsy values from object
function removeFalsy(input){
    for(let key in input){
        if(!input[key]){
            delete input[key];
        }
    }
    return input;
}
console.log(removeFalsy({ a: 0, b: null, c: "hello", d: undefined, e: 5 }))

//4. check for permissions from roles
function checkRole(roles, checkrole, action){
    if(!roles[checkRole]){
        return false;
    }
    else{
        roles[checkRole].includes(action)
    }    
}

console.log(checkRole(
    { admin:["read","write"], user:["read"], staff: ["write"]}
    ,"user","write"))

//5. transform array of orders into revenue per category
function revenuePerCategory(input){
    const result = {};
    for(let obj of input){
        const {category, price} = obj;
        if(result[category]){
            result[category] += price;
        }
        else{
            result[category] = price;
        }
    }
    return result;
}

console.log(revenuePerCategory([
  { id: 1, category: "electronics", price: 100 },
  { id: 2, category: "clothes", price: 50 },
  { id: 3, category: "electronics", price: 200 }
]))

//6. remove duplicate object by id
function removeDuplicates(input){
    const result = [];
    const seen = {};
    for(let obj of input){
        if(!seen[obj.id]){
            seen[obj.id] = true;
            result.push(obj);
        }
    }
    return result;
}

console.log(removeDuplicates([
  { id: 1, name: "A" },
  { id: 2, name: "B" },
  { id: 1, name: "A" }
]))

//7. chunk obj enteries into groups of size
function chunkObject(input, size){
    let chunk = [];
    let result = [];
    const entries = Object.entries(input);

    for(let entry of entries){
        chunk.push(entry);
        if(chunk.length === size){
            result.push(chunk);
            chunk = [];
        }
    }
    if(chunk.length > 0){
        result.push(chunk)
    }
    return result;
}

console.log(chunkObject({ a: 1, b: 2, c: 3, d: 4 }, 2))

//7.1 find longest string among object values
function longestString(input){
    let maxLength = -Infinity;
    let longeststr = '';
    for(let key in input){
        if(input[key].length > maxLength){
            maxLength = input[key].length;
            longeststr = input[key];
        }
    }
    return longeststr;
}

console.log(longestString({ a: "apple", b: "banana", c: "kiwi" }))

//8.Convert the object where languages are the top-level keys, and inside each are 
// translation strings by key into an object where translation keys are the 
// top-level keys, and inside each you store values per language [HARD**]

function topLevelKeys(input){
    const result = {};
    for(let lang in input){
        const translations = input[lang];

        for(let word in translations){
            if(!result[word]){
                result[word] = {};
            }
            result[word][lang] = translations[word]
        }
    }
    return result;
}

console.log(topLevelKeys({
  en: { hello: "Hello", bye: "Goodbye" },
  fr: { hello: "Bonjour", bye: "Au revoir" },
  es: { hello: "Hola" }
}))

//op => {
//   hello: { en: "Hello", fr: "Bonjour", es: "Hola" },
//   bye: { en: "Goodbye", fr: "Au revoir" }
// }


//9. build index of ids grouped by category 
function groupBycategory(input){
    const result = {};
    for(let obj of input){
        const {id, category} = obj;
        if(result[category]){
            result[category].push(id);
        }else{
            result[category] = [id];
        }
    }
    return result;
}

console.log(groupBycategory([
  { id: 1, category: "fruit" },
  { id: 2, category: "veggie" },
  { id: 3, category: "fruit" }
]))

//10. remove deeply nested key from object
function deepNested(input){
    delete input.a.b.c;
    return input
}

console.log(deepNested({ a: { b: { c: 1, d: 2 } } }))

//11. check if 2 objects are deeply equal
function deeplyEqual(input1, input2){
    if(JSON.stringify(input1) === JSON.stringify(input2)){
        return true;
    }
    return false
}

console.log(deeplyEqual({ a: { x: 1, y: 2 } }, { a: { x: 1, y: 2 } }))

//12. deep flatten nested arrays inside object
function deepFlatten(input){
    const result = {};
    for(let key in input){
        result[key] = input[key].flat(Infinity);
    }
    return result;
}

console.log(deepFlatten({ a: [1, [2, [3]]], b: [4, [5]] }))

//13. find most repeated word across categories
function repeatedWords(input){
    const arr =  Object.values(input).flat();
    const freq = {};
    for(let str of arr){
        if(freq[str]){
            freq[str] += 1;
        }else{
            freq[str] = 1
        }
    }
    let maxCount = -Infinity;
    let maxWord = " ";
    for(let key in freq){
        if(freq[key] > maxCount){
            maxCount = freq[key];
            maxWord = key;
        }
    }
    return maxWord;
}

console.log(repeatedWords({ fruits: ["apple","apple","banana"], drinks: ["apple","tea"] }))

//14. find intersection of all arrays in object
function intersection(input){
    const arrays = Object.values(input);
    let common = arrays[0];
    for(let i=1;i<arrays.length;i++){
        common = common.filter(val => arrays[i].includes(val));
    }
    return common;
}

console.log(intersection({ a: [1,2,3], b: [2,3,4], c: [3,4,5] }))

//15. deeply merge 2 nested objects
function deepmergeObjects(input1, input2){
    let result = {...input1};
    
    for(let key in input2){
        if(input1[key] && typeof input1[key]=== "object" && typeof input2 === "object"){
            result[key] = deepmergeObjects(input1[key], input2[key]);
        }
        else{
            result[key] = input2[key]
        }
    }
    return result
}
console.log(deepmergeObjects( { x: 1, y: 2 } , { y: 3, z: 4 } ))

//16. nested object destructuring
function objDestructure(input){
    for(let key in input){
        if(input[key] && typeof input[key] === 'object'){
            objDestructure(input[key]);
        }else{
           console.log(input[key]);
        }
    }
}
function objDestructure(input){
    const {user: {profile: {name, age}}} = input;
    console.log(name, age)
}

console.log(objDestructure({ user: { profile: { name: "Alice", age: 25 } } }))

//17. find top n keys by value
function topKeys(input, n){
    const arr = Object.entries(input)
    arr.sort((a,b) => b[1] - a[1]);
    
    return arr.slice(0, n).map(item => item[0]);
}

console.log(topKeys({ a: 10, b: 50, c: 30, d: 40 }, 2))

//18. sort array of objects by name then age
function sortUsers(input){
    return input.sort((a, b)=>{
        if(a.name < b.name) return -1
        if(a.name > b.name) return 1

        return a.age - b.age
    })
}

console.log(sortUsers([
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Alice", age: 22 }
]))

//19. reconcile 2 lists (missing + extra items)
function reconcile(expected, actual){
    const result = {};
    result["extra"] = actual.filter(val => !expected.includes(val));
    result["missing"] = expected.filter(val => !actual.includes(val));
    return result;
}

console.log(reconcile(["a","b","c"],["b","c","d"]))

//20 merge 2 objects
function mergeObjects(input1, input2) {
    let result = {};
    for(let key in input1){
        result[key] = input1[key]
    }
    
    for(let key in input2){
        result[key] = input2[key]
    }
    return result
}

console.log(mergeObjects({ a: 10, b: 20 },
{ a: 5, c: 15 }))