// `use strict`
// 'use strict';
// x = 15; // ReferenceError: x is not defined
// function strict_function() {
// // 'use strict';
// x = 'Test message';
// console.log(x);
// }
// strict_function(); // ReferenceError: x is not defined

// function myFunction(){
//     var1=10;
//     console.log(10)
// }

// myFunction();
// let var1=10;
// let var1=20;

// console.log(x)
// x=20

// x=40
// console.log(x)



var obj={
    name:'rank',
   sayHi: function() {
    console.log(this.name)
   }
}

var obj2={
    name:'arjun',
   sayHi: function() {
    console.log(this.name)
   }
}

obj.sayHi.call(obj2)

function* simpleGenerator() {
    yield 1;
    yield 2;
    yield 3;
    }
    // Creating a generator
    const generator = simpleGenerator();
    console.log(generator.next())
    console.log(generator.next())
