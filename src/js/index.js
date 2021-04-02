import TestJS from "./TestJs.js";
import ConsoleLogIt from "./ConsoleLogIt.js";
import getJSON from "./getJSON";
const Table = require('./GenerateTableFunction');

TestJS();
getJSON("", function (data) {
    console.log(data);
});



getJSON('http://localhost:8000/api/v1/cities',
    function(err, records) {
        if (err !== null) {
            alert('Something went wrong: ' + err);
        } else {
            let table = document.querySelector("table");
            let data = Object.keys((records.data[0]));
            let dataRecords = records.data;
            let make = new Table();
            make.generateTableHead(table, data);
            make.generateTable(table, dataRecords);
        }

    });
ConsoleLogIt("this workedss  in the bundle");

