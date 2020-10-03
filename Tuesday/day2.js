//PART 1:
//Initialize array:
let names = ["Hassan", "Jon", "Peter", "Boline", "Frederik", "Jan"];

//Filter array by "a":
let namesA = names.filter(names => names.includes("a"));

console.log("Names filtered with filter() by a: " + namesA);

//Reverse array:
let namesReversed = names.map((_, i, a) => a[a.length - i - 1]);

console.log("Names reversed " + namesReversed);

//PART 2:
//Filter with callback:
function filterCallback(param) {
    if (param.includes("a")) {
        return true;
    } else {
        return false;
    }
}

let myFilter = function(array, callback) {
    let filteredNames = [];
    for (name in array) {
        if(filterCallback(array[name])) {
            filteredNames.push(array[name])
        }
    }
    return filteredNames;
}

console.log("Names filtered with callback by a: " + myFilter(names, filterCallback));

//Reverse array with callback:
//Not done as it was not mandatory

//PART 3:
let numbers = [1, 3, 5, 10, 11];
let result = [4,8,15,21,11];

let mapCallback = function (array1, array2) {
    for (n in array1) {
       array2.push(array1[n]);
    }
    return array2;
}

//let numbersResultMap = numbers.map(myCallback(numbers, result));

//console.log(numbersResultMap);

//PART 4: 
//a)
const all = ["Hassan", "Peter", "Carla", "Boline"];
const allInOne = all.join("#");

console.log("\n4a:")
console.log("all array joined into one String: " + allInOne);

//b)
const numbersArray = [2,3,67,33];

function add(sum, number) {
    return sum + number;
}

const numbersSum = numbersArray.reduce(add);

console.log("\n4b:")
console.log("Numbers array added to a total with a callback: " + numbersSum);

//c)
const members = [
    {name : "Peter", age: 18},
    {name : "Jan", age: 35},
    {name : "Janne", age: 25},
    {name : "Martin", age: 22}]

function calcAverage(accumulator, member, index, members) {
    if (index === members.length-1) {
        accumulator += member.age;
        return accumulator / members.length;
    }
    return accumulator + member.age;
}

const averageAge = members.reduce(calcAverage, 0);

console.log("\n4c:")
console.log("Average age: " + averageAge);

//d)
const votes = [ "Biden","Trump","Biden","Biden","Trump","Trump","Biden","None"];

result = votes.reduce((accumulator, vote)=>{
    accumulator[vote] = accumulator[vote]? accumulator[vote] + 1: 1;
    return accumulator;
},{});

console.log("\n4d:")
console.log("Result of election: ");
console.log(result);