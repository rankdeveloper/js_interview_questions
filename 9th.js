const user={
    name:"user",
    sayName:function(){
        console.log(this.name)
    }
}

// setTimeout(user.sayName.user),3000) output: undefined
setTimeout(user.sayName.bind(user),3000)