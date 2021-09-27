/*
* Excercise 1
*
*

/*
* Then write a function that changes the text and the color inside the div
*
*/

const colored_blk = document.getElementById('color-block');
const blk_text = document.getElementById('color-name');

function changeColor(){
    //Write a condition determine what color it should be changed to
    if(colored_blk.style.backgroundColor == "rgb(240, 128, 128)"){
        //change the background color using JS
        colored_blk.style.backgroundColor = "#FFCB05";
        //Change the text of the color using the span id color-name
        blk_text.textContent = "#FFCB05";
    }
    else{
        //change the background color using JS
        colored_blk.style.backgroundColor = "rgb(240, 128, 128)";
        //Change the text of the color using the span id color-name
        blk_text.textContent = "#F08080";
    }
}

colored_blk.addEventListener('click', changeColor);

/*
* For excercise 2, you need to write an event handler for the button id "convertbtn"
* on mouse click. For best practice use addEventListener.
*
*/
c_btn = document.getElementById('convertbtn');
celcius = document.getElementById('c-output');
f_input = document.getElementById('f-input');

c_btn.addEventListener('click', convertTemp);


/*
* Then write a function that calculates Fahrenheit to Celsius and display it on the webpage
*
*/

function convertTemp(){
    //Calculate the temperature here
    let result = 0;
    result = (Number(f_input.value) - 32) * 5/9;
    //Send the calculated temperature to HTML
    celcius.innerHTML = result;
}


