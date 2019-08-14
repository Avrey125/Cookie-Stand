"use strict"


 var pike = {
 name:"1st and Pike",
 minCust :23,
 maxCust : 65,
 avgCookPerCust :6.3,
 aveCookSoldHourly: function() {
     var ranCust = Math.floor(Math.random() * ((this.maxCust + 1) - this.minCust) + this.minCust)
     return Math.floor(ranCust * this.avgCookPerCust); //random cust * aveCookPerCust = aveCookies sold per hour
 },
 cookSoldPerHourArr:[],
 cookiesSubtotal:[],
 };
 ; 

 var pikeDiv = document.querySelector(".hour"); //parent node
 var ul = document.createElement('ul')
 pikeDiv.appendChild(pikeDiv.appendChild(ul));

 pike.cookSoldPerHourArr.push("<h2>" + pike.name + "<h2>");

 for(var i = 6; i < 13; i++) { //pusing AM cookies
         var randomCookAM = pike.aveCookSoldHourly();
         var elementAM = "<th>" + i + "am: " + randomCookAM + " cookies <th>";
         pike.cookSoldPerHourArr.push(elementAM); //array to output HTML to DOM
         pike.cookiesSubtotal.push(randomCookAM); //array to calculate Total
     };

 for(var i = 1; i < 9; i++) {
     var randomCookPM = pike.aveCookSoldHourly();
     var elementPM = "<th>" + i + 'pm: ' + randomCookPM + " cookies <th>";
     pike.cookSoldPerHourArr.push(elementPM);
     pike.cookiesSubtotal.push(randomCookPM); //array to calculate Total
 }

 var count=0;
 for(var i = 0; i < pike.cookiesSubtotal.length; i++) {
 count = count + pike.cookiesSubtotal[i];
 }


 pike.cookSoldPerHourArr.push('<>Total: ' + count + " cookies<li>");


 for(var i = pike.cookSoldPerHourArr.length - 1; i >= 0; i--){
     ul.insertAdjacentHTML( 'afterbegin',  pike.cookSoldPerHourArr[i]);
 }

// var stores = [];
// var hours = ["6am","7am","8am","9am","10am","11am","12pm","1pm","2pm","3pm","4pm","5pm","6pm","7pm","8pm"];
// var table = document.getElementById("stores")

// function SalmonCook(name, min, max, avg, hours) {
// this.name = name;
// this.min = min;
// this.max = max;
// this.avg = avg;
// this.hours = hours;
// this.cookSoldPerHourArr = [];
// this.cookiesSubtotal = 0;
// };
// aveCookSoldHourly =  function () {
//     var ranCust = Math.floor(Math.random() * ((this.maxCust + 1) - this.minCust) + this.minCust)
//     return Math.floor(ranCust * this.avgCookPerCust); 
// };
// cookSoldPerHourArr = [];
// cookiesSubtotal = [];








//   var seatAc = {
//  name:"SeaTac Airport",
//  minCust :3,
//  maxCust :24,
//  avgCookPerCust :1.2,
//  aveCookSoldHourly: function() {
//      var ranCust = Math.floor(Math.random() * ((this.maxCust + 1) - this.minCust) + this.minCust)
//      return Math.floor(ranCust * this.avgCookPerCust); random cust * aveCookPerCust = aveCookies sold per hour

//  },
//  cookSoldPerHourArr:[],
//  cookiesSubtotal:[],
//  };
//  ; 

//  var seatAcDiv = document.querySelector("#seatAc"); parent node
//  var ul = document.createElement('ul')
//  seatAcDiv.appendChild(seatAcDiv.appendChild(ul));

//  seatAc.cookSoldPerHourArr.push("<h2>" + seatAc.name + "<h2>");

//  for(var i = 6; i < 13; i++) { pusing AM cookies
//          var randomCookAM = seatAc.aveCookSoldHourly();
//          var elementAM = "<li>" + i + "am: " + randomCookAM + " cookies <li>";
//          seatAc.cookSoldPerHourArr.push(elementAM); array to output HTML to DOM
//          seatAc.cookiesSubtotal.push(randomCookAM); array to calculate Total
//      };

//  for(var i = 1; i < 9; i++) {
//      var randomCookPM = seatAc.aveCookSoldHourly();
//      var elementPM = "<li>" + i + 'pm: ' + randomCookPM + " cookies <li>";
//      seatAc.cookSoldPerHourArr.push(elementPM);
//      seatAc.cookiesSubtotal.push(randomCookPM); array to calculate Total
//  }

//  var count2 = 0;
//  for(var i = 0; i < seatAc.cookiesSubtotal.length; i++) {
//  count2 = count2 + seatAc.cookiesSubtotal[i];
//  }

//  seatAc.cookSoldPerHourArr.push('<li>Total: ' + count2 + " cookies<li>");


//  for(var i =seatAc.cookSoldPerHourArr.length - 1; i>=0; i--){
//      ul.insertAdjacentHTML( 'afterbegin',  seatAc.cookSoldPerHourArr[i]);
//  }



//  var seaCent = {
//  name:"Seattle Center",
//  minCust :11,
//  maxCust :38,
//  avgCookPerCust :2.3,
//  aveCookSoldHourly: function() {
//      var ranCust = Math.floor(Math.random() * ((this.maxCust + 1) - this.minCust) + this.minCust)
//      return Math.floor(ranCust * this.avgCookPerCust); random cust * aveCookPerCust = aveCookies sold per hour

//  },
//  cookSoldPerHourArr:[],
//  cookiesSubtotal:[],
//  };
//  ; 

//  var seaCentDiv = document.querySelector("#seaCent"); parent node
//  var ul = document.createElement('ul')
//  seaCentDiv.appendChild(seaCentDiv.appendChild(ul));

//  seaCent.cookSoldPerHourArr.push("<h2>" + seaCent.name + "<h2>");

//  for(var i = 6; i < 13; i++) { pusing AM cookies
//          var randomCookAM = seaCent.aveCookSoldHourly();
//          var elementAM = "<li>" + i + "am: " + randomCookAM + " cookies <li>";
//          seaCent.cookSoldPerHourArr.push(elementAM); array to output HTML to DOM
//          seaCent.cookiesSubtotal.push(randomCookAM); array to calculate Total
//      };

//  for(var i = 1; i < 9; i++) {
//      var randomCookPM = seaCent.aveCookSoldHourly();
//      var elementPM = "<li>" + i + 'pm: ' + randomCookPM + " cookies <li>";
//      seaCent.cookSoldPerHourArr.push(elementPM);
//      seaCent.cookiesSubtotal.push(randomCookPM); array to calculate Total
//  }

//  var count3 = 0;
//  for(var i = 0; i < seaCent.cookiesSubtotal.length; i++) {
//  count3 = count3 + seaCent.cookiesSubtotal[i];
//  }

//  seaCent.cookSoldPerHourArr.push('<li>Total: ' + count3 + " cookies<li>");


//  for(var i =seaCent.cookSoldPerHourArr.length - 1; i>=0; i--){
//      ul.insertAdjacentHTML( 'afterbegin',  seaCent.cookSoldPerHourArr[i]);
//  }

//  var alki = {
//  name:"Alki",
//  minCust :2,
//  maxCust :16,
//  avgCookPerCust :4.6,
//  aveCookSoldHourly: function() {
//      var ranCust = Math.floor(Math.random() * ((this.maxCust + 1) - this.minCust) + this.minCust)
//      return Math.floor(ranCust * this.avgCookPerCust); random cust * aveCookPerCust = aveCookies sold per hour

//  },
//  cookSoldPerHourArr:[],
//  cookiesSubtotal:[],
//  };
//  ; 

//  var alkiDiv = document.querySelector("#alki"); parent node
//  var ul = document.createElement('ul')
//  alkiDiv.appendChild(alkiDiv.appendChild(ul));

//  alki.cookSoldPerHourArr.push("<h2>" + alki.name + "<h2>");

//  for(var i = 6; i < 13; i++) { pusing AM cookies
//          var randomCookAM = alki.aveCookSoldHourly();
//          var elementAM = "<li>" + i + "am: " + randomCookAM + " cookies <li>";
//          alki.cookSoldPerHourArr.push(elementAM); array to output HTML to DOM
//          alki.cookiesSubtotal.push(randomCookAM); array to calculate Total
//      };

//  for(var i = 1; i < 9; i++) {
//      var randomCookPM = alki.aveCookSoldHourly();
//      var elementPM = "<li>" + i + 'pm: ' + randomCookPM + " cookies <li>";
//      alki.cookSoldPerHourArr.push(elementPM);
//      alki.cookiesSubtotal.push(randomCookPM); array to calculate Total
//  }

//  var count4 = 0;
//  for(var i = 0; i < alki.cookiesSubtotal.length; i++) {
//  count4 = count4 + alki.cookiesSubtotal[i];
//  }

//  alki.cookSoldPerHourArr.push('<li>Total: ' + count4 + " cookies<li>");


//  for(var i = alki.cookSoldPerHourArr.length - 1; i>=0; i--){
//      ul.insertAdjacentHTML( 'afterbegin',  alki.cookSoldPerHourArr[i]);
//  }

//  var cap = {
//      name:"Capitol Hill",
//      minCust :20,
//      maxCust :38,
//      avgCookPerCust :2.3,
//      aveCookSoldHourly: function() {
//          var ranCust = Math.floor(Math.random() * ((this.maxCust + 1) - this.minCust) + this.minCust)
//          return Math.floor(ranCust * this.avgCookPerCust); random cust * aveCookPerCust = aveCookies sold per hour
    
//      },
//      cookSoldPerHourArr:[],
//      cookiesSubtotal:[],
//      };
//      ; 
    
//      var capDiv = document.querySelector("#cap"); parent node
//      var ul = document.createElement('ul')
//      capDiv.appendChild(capDiv.appendChild(ul));
    
//      cap.cookSoldPerHourArr.push("<h2>" + cap.name + "<h2>");
    
//      for(var i = 6; i < 13; i++) { pusing AM cookies
//              var randomCookAM = cap.aveCookSoldHourly();
//              var elementAM = "<li>" + i + "am: " + randomCookAM + " cookies <li>";
//              cap.cookSoldPerHourArr.push(elementAM); array to output HTML to DOM
//              cap.cookiesSubtotal.push(randomCookAM); array to calculate Total
//          };
    
//      for(var i = 1; i < 9; i++) {
//          var randomCookPM = cap.aveCookSoldHourly();
//          var elementPM = "<li>" + i + 'pm: ' + randomCookPM + " cookies <li>";
//          cap.cookSoldPerHourArr.push(elementPM);
//          cap.cookiesSubtotal.push(randomCookPM); array to calculate Total
//      }
    
//      var count5 = 0;
//      for(var i = 0; i < cap.cookiesSubtotal.length; i++) {
//      count5 = count5 + cap.cookiesSubtotal[i];
//      }
    
//      cap.cookSoldPerHourArr.push('<li>Total: ' + count5 + " cookies<li>");
    
    
//      for(var i = cap.cookSoldPerHourArr.length - 1; i>=0; i--){
//          ul.insertAdjacentHTML( 'afterbegin',  cap.cookSoldPerHourArr[i]);
//      }



