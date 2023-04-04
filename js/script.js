function init(){
//add your javascrip between these two lines of code
  var redAlertButton = document.getElementById('entrybutton');
  function textalert(){
    var userSelection = document.getElementById('entryinput');
    var A =  userSelection.value
    document.getElementById('textoutput').innerHTML =A;
    alert("Rohit Pemmasani: "+A);
  }
  redAlertButton.addEventListener('click', textalert);
  }
window.addEventListener('load', init);
