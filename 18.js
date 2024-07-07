let str = "hello"

for (let i of str) {

    if (i == 'o') {
        continue;
    }
    console.log(i)
}

// let m = new Map()
// m.set('one' , 1)
// m.set(2 , 'two')
// m.set(true , 'bool')

// for(let j of m.values()){
//     console.log(j)
// }


// let set = new Set(["oranges", "apples", "bananas" , "oranges"]);
// for (let value of set) console.log(value);
// // the same with forEach:

// console.log("----------------------------")
// set.forEach((value, valueAgain, set) => {
// console.log(value);
// });

function unique(arr) {
    /* your code */
    let set = new Set(arr)
    console.log(set)

}
let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

unique(values)