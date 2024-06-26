
 const  display = document.getElementById("display2");

function add(input) {
    
    display.value += input;
}


function calculate() {
    
    try{

        display.value = eval(display.value)
    }
    catch(Error){
        display.value = 'Error';
    }
}