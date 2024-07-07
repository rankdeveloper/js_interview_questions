//call() =  methods invoke the function immediately with specified this value
// and individualy args

//apply() = it is same as call , but it takes second argument as  an array

//bind() = it same as call() , but it returns a new function that when called
const obj = {
    name: "Rohit",
    city: "Mumbai",
}

let sayIntro = function (hometown, state) {
    console.log("Hello , I am ", this.name, "home town ", hometown, "state ", state)
}

const obj2 = {
    name: "Gill",
    city: "Chandigarh"
}
sayIntro.call(obj, 'Uttar Pradesh')
sayIntro.apply(obj, ['Uttar Pradesh'])

let a = sayIntro.bind(obj2, 'Chandigarh', 'Chandigarh')
a()


const objs = [
    { name: "Aadi", city: "Chd" },
    { name: "Sami", city: "Delhi" },
    { name: "Rohit ", city: "Mumbai" },
    { name: "Hardik", city: "Gujrat" },
    { name: "Axar", city: "Chd" },
]

let say = function () {
    console.log("Hello , I am ", this.name, "from city ", this.city)
}

for (let o of objs) {
    //say.call(o)
    say.apply(o)
}

function sum(a, b) {
    console.log("sum " + (a + b))
}

sum.call(null, 10, 5)

