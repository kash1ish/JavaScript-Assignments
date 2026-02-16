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