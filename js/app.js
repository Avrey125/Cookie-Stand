
"use strict"

var stores = [];
var hours = ["6am","7am","8am","9am","10am","11am","12pm","1pm","2pm","3pm","4pm","5pm","6pm","7pm","8pm", "Daily Sales Totals"];
var table = document.getElementById("stores");
var tHead = document.getElementById("thead");
var tableData = [];

function SalmonCook(name, min, max, avg) {
this.name = name;
this.min = min;
this.max = max;
this.avg = avg;

this.cookSoldPerHourArr = [];
this.cookiesSubtotal = 0;

this.aveCookSoldHourly =  function () {
     var ranCust = Math.floor(Math.random() * ((this.max + 1) - this.min) + this.min)
    return Math.floor(ranCust * this.avg); 
};
}

//constructor
var pike =  new SalmonCook('Pike', 23, 65, 6.3,);
var seatAc = new SalmonCook('SeaTac Airport',3, 24, 1.2);
var seaCent = new SalmonCook('Seattle Center',11, 38, 3.7);
var cap = new SalmonCook('Capitol Hill', 20, 38, 2.3);
var alki = new SalmonCook('Alki', 2, 16, 4.6,);
//var Sales 

//  function aveCookSoldHourly  () {
//     ranCust = Math.floor(Math.random() * ((65 + 1) - 23) + 23)
//    return Math.floor(ranCust * 6.3); 
// };


// var totals = new SalmonCook('Totals', )

stores.push(pike);
stores.push(seatAc);
stores.push(seaCent);
stores.push(cap);
stores.push(alki);





function createTable(){
     var header = '<td></td>';
    
    for(var i = 0; i < hours.length; i++) {
        header =  header + `<td> ${hours[i]}</td>` 
    };
    
    // tHead.innerHTML = header;
    // table.push(head);

    for(var i = 0; i < stores.length; i++){
        console.log(stores[i])
        var row = document.createElement('tr');
        var hourlyAllTotal = 0;
        var dailyStoreTotal = 0;
        row.innerHTML = `<td> ${stores[i].name} </td>`;
        var amountSoldArr = [];
        for(var j = 1; j<16; j++){
            var amountSold = stores[i].aveCookSoldHourly();
            amountSoldArr.push(amountSold);
            row.innerHTML = `${row.innerHTML} <td> ${amountSold} </td>`
        }

        row.innerHTML = `${row.innerHTML} <td> ${dailyStoreTotal} </td>`
        table.appendChild(row);
    };
    
}

createTable();

