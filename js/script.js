function init(){
//add your javascrip between these two lines of code
  var redAlertButton = document.getElementById('entrybutton');
  function textalert(){
    var userSelection = document.getElementById('entryinput');
    document.getElementById('textoutput').innerHTML = userSelection.value;
    alert("Rohit Pemmasani: "+userSelection.value);
  }
  redAlertButton.addEventListener('click', textalert);
  }
window.addEventListener('load', init);
