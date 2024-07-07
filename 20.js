//sum(1)(2)(3)() = 6

function sum(a){
    return function(b){
        
        if(b){
            return sum(a+b)
        }
        return a;
            
        
    }

}

console.log(sum(1)(2)(3)())

// Expected usage: concatStrings('Hello')(' ')('World')('!')() should return 'Hello World!'

function concatStrings(str) {
    
    return function(str2){
        if(str2){
            return concatStrings(str+str2)
        }
        return str

    }
}

console.log(concatStrings('Hello')(' ')('World')('!')());  // Outputs: 'Hello World!'



