

// function loadJSON(file, callback) {   

//     var xobj = new XMLHttpRequest();
//     xobj.overrideMimeType("application/json");
//     xobj.open('GET', file, true); // Replace 'my_data' with the path to your file
//     xobj.onreadystatechange = function () {
//           if (xobj.readyState == 4 ) {
//             // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
//             callback(xobj.responseText);
//           }
//     };
//     xobj.send(null);  
//  }
 

function load() {
    var actual_JSON_1 = JSON.parse.stringify("../data/enregistre-data.json")
    console.log(actual_JSON_1.trsansaction-list-register['page-1'][0].vehicule );
    // loadJSON("../data/enregistre-data.json", function(response) {
  
    //     var actual_JSON = JSON.parse(response);
    //     console.log(actual_JSON);
    // });
    
    
}


function test_json() {

    $.getJSON("../data/enregistre-data.json", function(json) {
        console.log(json); // this will show the info it in firebug console
    });

    // var request = new XMLHttpRequest();
    // request.open("GET", "../data/enregistre-data.json", false);
    // request.send(null)
    // var data = JSON.parse(request.responseText);
    //alert (trsansaction-list-register['page-1'][0].vehicule);
    
}

function json_parse() {
    
    data.trsansaction-list-register['page-1'][0].vehicule   // Sentra
    data.trsansaction-list-register['page-1'][0].date   // Maxima
    data.trsansaction-list-register['page-1'][1].vehicule   // 2

    for (var make in data.cars) {
        for (var i = 0; i < data.cars[make].length; i++) {
            var model = data.cars[make][i].model;
            var doors = data.cars[make][i].doors;
            alert(make + ', ' + model + ', ' + doors);
        }
    }
}
