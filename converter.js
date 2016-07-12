/* function convertTemp() {
  var temp = document.getElementById("temp").value;
  if (document.getElementById("Celsius").checked) {
    var tempConversion = ((temp - 32) * 9) / 5;
    document.getElementById("convertedTemp").innerText = "Your converted temperature is " + tempConversion + " degrees Celsius."; //can't seem to get degree symbol to work: fix
  }
  else if (document.getElementById("Farenheit").checked) {
    var tempConversion = ((temp * 9) / 5) + 32;
    document.getElementById("convertedTemp").innerText = "Your converted temperature is " + tempConversion +  " degrees Farenheit."; //can't seem to get degree symbol to work: fix
  }
}

function resetForm() {
  document.getElementById("form").reset();
} 
*/

//able to reset form, not paragraph text re converted temp, would like to
//finish lines 42, 44-46, degree symbol


function convertTemp() {
  var temp = document.getElementById("temp").value;
  if (document.getElementById("Celsius").checked) {
    var tempConversion = ((temp - 32) * 9) / 5;
    var tempDisplay = document.getElementById("convertedTemp");
    tempDisplay.innerText = "Your converted temperature is " + tempConversion + " degrees Celsius."; 
        if (tempConversion > 32 ) {
        tempDisplay.innerText.style.color="red";
        }
        else if (tempConversion < 0) {
        tempDisplay.innerText.style.color="blue";
        } 
        else {
        tempDisplay.innerText.style.color="green";
        }
  }
  else if (document.getElementById("Farenheit").checked) {
    var tempConversion = ((temp * 9) / 5) + 32;
    document.getElementById("convertedTemp").innerText = "Your converted temperature is " + tempConversion +  " degrees Farenheit."; 
}
}

function resetForm() {
  document.getElementById("form").reset();
} 

 














/* Write a program that will convert a temperature from fahrenheit to celsius, or from celsius to fahrenheit. 

In the HTML, have one input field where someone can enter in a temperature. 
Create a radio button group where Celsius or Fahrenheit can be selected as the scale that the number should be converted to.
Create a block level element that will hold the text of the converted temperature.
Create a button that, when clicked, displays the converted temperature.
Create another button that, when clicked, clears any text in the input field.
Add an event handler to the input field that checks if the user pressed the enter key, and if that happens, perform the conversion.
If the temperature is greater than 90F/32C the color of the converted temperature should be red.
If the temperature is less than 32F/0C the color of the converted temperature should be blue.
For any other temperature, the color should be green.*/