var fullname="user";

var obj={
    fullname:"hacked fullname",

    prop:{
        fullname:"inside prop",
        getFullname:function(){
            return this.fullname
        }
    },

    getFullname:function(){
        return this.fullname
    },

    getFullname2:() => this.fullname ,

    getFullname3:(function(){
        return this.fullname
    })()

    // getFullname3:function(){
    //     return this.fullname
    // }


}

console.log(obj.prop.getFullname())
console.log(obj.getFullname())
console.log(obj.getFullname2())
console.log(obj.getFullname3())