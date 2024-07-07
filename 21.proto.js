const obj = {
    name: "Rank",
    age: 21,
    sayHi: function () {
        return (`Hi, I am  ${this.name} , my age : ${this.age}`)
    }
}

console.log(obj.sayHi())

const obj2 = {
    name: "Rohit",
    age: 35
}

obj2.__proto__=obj
console.log(obj2.sayHi())

// output:
// Hi, I am  Rank , my age : 21
// Hi, I am  Rohit , my age : 35

