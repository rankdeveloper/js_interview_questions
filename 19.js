let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
    };

    function sumSalaries(salaries){
        let v = Object.values(salaries)
        console.log(v)
        let sum=0;
        for(let i of v){
           
            sum+=i;
        }
        return sum
    }
   console.log(sumSalaries(salaries))


   function numProperties(salaries){

    let totalProps = Object.keys(salaries).length
    return totalProps

   }
   console.log(numProperties(salaries))