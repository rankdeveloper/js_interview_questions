// currying in js
// It is a technique
// >  where a function is transformed into 
// > a sequence of functions,
// >each taking a single argument

// benefits of currying
// > resuablity : function can be reused with fixed parameter
// > modularity : break down function into smaller , more manageable

function curry1(f) {
    return function (a) {
        return function (b) {
            return f(a, b)
        }
    }
}

function sum(a, b) {
    return a + b;
}

const curriedSum = curry1(sum)

console.log(curriedSum(2)(3))


function curriedAdd(a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        }
    }
}

console.log(curriedAdd(2)(3)(5))

//using arrow function

const curriedAdd2 = a => b => a + b;
console.log(curriedAdd2(5)(10))