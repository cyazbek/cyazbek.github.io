function updateBars(){
  var dd = new Date();

  if (dd.getMonth() >= 0){
    if (dd.getDate() >= 13){
      //document.getElementById('pprogress_Sprint').value="10";
    }
  }
}

document.addEventListener("DOMContentLoaded", function() {
  updateBars();
});

/*
var house = new Object();
house.price = 405000;
house.address = "Maisonneuve 2093 h3h 2v4";
house.size = 1300;
house.rooms = 4;
house.bedrooms = 3;
*/
