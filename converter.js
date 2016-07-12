
function convertTemp() {
  var temp = document.getElementById("temp").value;
  if (document.getElementById("Celsius").checked) {
    var tempConversion = ((temp - 32) * 5) / 9;
    var tempDisplay = document.getElementById("convertedTemp");
    tempDisplay.innerText = "Your converted temperature is " + tempConversion + " degrees Celsius."; 
        if (tempConversion > 32 ) {
        tempDisplay.style.color="red";
        }
        else if (tempConversion < 0) {
        tempDisplay.style.color="blue";
        } 
        else {
        tempDisplay.style.color="green";
        }
  }
  else if (document.getElementById("Farenheit").checked) {
    var tempConversion = ((temp * 9) / 5) + 32;
    var tempDisplay = document.getElementById("convertedTemp");
    tempDisplay.innerText = "Your converted temperature is " + tempConversion + " degrees Farenheit."; 
        if (tempConversion > 32 ) {
        tempDisplay.style.color="red";
        }
        else if (tempConversion < 0) {
        tempDisplay.style.color="blue";
        } 
        else {
        tempDisplay.style.color="green";
        } 
}
}

function resetForm() {
  document.getElementById("form").reset();
} 

 
