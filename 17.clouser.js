//clouser is a feature where a inner function has access to outer
// function variables , even when the inner function is executed 


// use cases
//> data pricay
//> it is mostly used in asynchronous programming


function outer(){
    var one=1;

    return function(){
        console.log('one' , one)
        one=10;
        
    }

    
}

const f =outer()

f()