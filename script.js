let string = "";

let fact = (num)=>{
    if(num==0 || num==1){
        return 1;
    }
    else{
        return num*fact(num-1);
    }
}

/*
The eval() method evaluates or executes an argument.

If the argument is an expression, eval() evaluates the expression. If the argument is one or more JavaScript statements, eval() executes the statements.
*/
// Button click events
let buttons = document.querySelectorAll(".btn");

Array.from(buttons).forEach(btn=>{
    let ip = document.querySelector(".input")
    btn.addEventListener("click",(ele)=>{
        if (ele.target.innerText == "="){
            try {
                ip.value = eval(string)
            } catch (error) {
                ip.value = "Syntax Error";
            }
        }
        else if(ele.target.innerText == 'AC'){
            string = '';
            ip.value = string
        }
        else if(ele.target.innerText == '%'){
            try {
                ip.value = eval(string)/100 // Evaluate string and divide by 100
            } catch (error) {
                ip.value = "Syntax Error";
            }   
        }
        else if(ele.target.innerText == '!'){
            try {
                ip.value = fact(string)
            } catch (error) {
                ip.value = "Syntax Error";
            }
        }
        else if(ele.target.innerText == 'log'){
            try {
                ip.value = Math.log(string);
            } catch (error) {

                ip.value = "Syntax Error";
            }
        }
        else{
            string = string + ele.target.innerText
            ip.value = string
        }
    })
})

// Keyboard event -

let ip = document.querySelector(".input");
let operator = ['+','-','*','/','.']

ip.addEventListener("keyup",(e)=>{
    let key = e.key
    if(!isNaN(key) || operator.includes(key)){
        string = string + key
        ip.value = string
    }
    else if(key == 'Enter' || key == '='){
        try{
            if(string == ""){
                throw err;
            }
            ip.value = eval(string)
            string = "";
        }
        catch(error){
            ip.value = "Syntax Error";
            string = "";
        }
    }
    else if(key == 'Backspace'){
            string = string.slice(0,-1  );
            ip.value = string
    }
})