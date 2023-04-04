function init(){
//add your javascrip between these two lines of code
  var redAlertButton = document.getElementById('entrybutton');
  function textalert(){
    alert("Rohit Pemmasani: " + "Hello is this working?");
  }
  
  redAlertButton.addEventListener('click', textalert);

  






  }
window.addEventListener('load', init);
