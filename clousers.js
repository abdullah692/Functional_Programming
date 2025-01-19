// closure example

function calculate(x) {
    // debugger
    function multiply(y) {
        return x * y;
    }
    return multiply;
}

const multiply3 = calculate(3);
const multiply4 = calculate(4);

console.log(multiply3); // returns calculate function definition
console.log(multiply3()); // NaN

console.log(multiply3(6)); // 18
console.log(multiply4(2));

function x(){
    let a;
        function y()
        {
            console.log(a)
        }
        return y();
    
    }
    
    x();

    //INcrement clousers


const createCounter=()=>{
    let count=0;

    function counter(){
        count++;
        console.log(count);
    }
    return counter;
}

    const incrementClouser=createCounter();

    incrementClouser()
    incrementClouser()