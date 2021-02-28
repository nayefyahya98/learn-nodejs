var mysql = require('mysql');

var con = mysql.createConnection({
  host: "51.222.37.131",
  user: "root",
  password: "Nayef#JUST#Wafa98"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});