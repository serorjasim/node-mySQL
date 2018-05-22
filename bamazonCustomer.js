var mysql = require("mysql");
var inquirer = require('inquirer');

var connection = mysql.createConnection({
    host: "localhost",
    port: 8889,

    // Your username
    user: "root",

    // Your password
    password: "root",
    database: "bamazonDB"
});

connection.connect(function (err) {
    if (err) throw err;
    showAllProducts();
});

inquirer.prompt([{
    type: "input",
    name: "product",
    message: "What is the ID of the item that you would like to buy?",
    filter: Number
},

{
    type: "input",
    name: "quantity",
    message: "How many units of this product would you like to buy?",
    filter: Number
}
])
