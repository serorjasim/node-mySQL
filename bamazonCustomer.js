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


//the questions that the user needs to answer
function productInfo() {
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
    ]).then(function (res) {
        var item2 = res.product;
        var quantity2 = res.quantity;

        connection.query("SELECT * FROM products WHERE ?", { item_id: item2 },
            function (err.response) {
                if (err) throw err;

                if (response.length === 0) {
                    console.log("ERROR: Select a valid Item ID from the products list.");
                    showAllProducts();
                } else {
                    var productRes = response[0];
                    if (quantity2 <= productRes.stock_quantity) {
                        console.log("Your product is in stock, placing your order homie!");

                        var updateInventory = "UPDATE products SET stock_quantity= " + (product.stock_quantity - quantity2) + " WHERE item_id = " + item2;

                        connection.query(updateInventory, function (err, data) {
                            if (err) throw err;

                            console.log("Your order has been placed! Your total is $" + productRes.price * quantity2);
                            console.log("Thank you for shopping with us!");
                            console.log("-------------------------\n");
                            keepShopping();
                        })
                    } else {
                        console.log("Sorry, item's not in stock to place your order.\n" + "Please change your.\n" + "Your item was " + productRes.product_name + " and it has " + productRes.stock_quantity + " left in stock.");
                        keepShopping();
                    }
                }
            })
    })
}

//displaying the table
function showAllProducts() {
    connection.query("SELECT * FROM products", function (err, res) {
        for (var i = 0; i < res.length; i++) {
            console.log("\nItem Id " + res[i].item_id + "|" + "\nProduct Name: " + res[i].product_name + "|" + "\nDepartment Name: " + res[i].department_name + "|" + "\nPrice: " + res[i].price + "|" + "\nStock Quantity: " + res[i].stock_quantity);
        }
        console.log("---------------");
        productInfo()
    });
}

function keepShopping() {
    inquirer.prompt([
        {
            type: "confirm",
            message: "Would you like to keep shipping?",
            name: "confirm"
        }
    ]).then(function (res) {
        if (res.confirm) {
            console.log("-----------------");
            showAllProducts();
        } else {
            console.log("Thank you for shopping with Bamazon");
            connection.end();
        }
    })
}
