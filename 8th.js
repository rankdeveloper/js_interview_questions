var user1={
    name:"userOne",
    sayName:function(){
        console.log(this.name)
    }
}

var user2={
    name:"userTwo",
    sayName:function(){
        console.log(this.name)
    }
}


//using user2 object sayName property calling user1 sayName()
user2.sayName.call(user1)