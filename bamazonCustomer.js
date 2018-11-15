var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",

    port: 3306,

    user: "root",

    password: "root",
    database: "bamazonDB"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    afterConnection();
});

function afterConnection() {

    connection.query("SELECT item_id, product_name, price FROM products", function (err, res) {
        if (err) throw err;
        console.log("\x1b[34m", "\n BAMAZON" + "\n" + "Items for Sale:\n");

        for (var i = 0; i < res.length; i++) {
            console.log("\x1b[35m", "Product ID: " + res[i].item_id);
            console.log("\x1b[35m", "Product Name: " + res[i].product_name);
            console.log("\x1b[35m", "Price: " + res[i].price + " each.\n");
        }
        inquirer.prompt([

            {
                type: "list",
                name: "id",
                message: "What is the ID number of the product you would like to purchase?",
                choices: ["1: Cropped Tank", "2: Skinny Jeans", "3: Strawberries", "4: Bananas", "5: Whole Chicken", "6: Monopoly", "7: Uno", "8: Grease", "9: Star Wars Spaceship", "10: iPhone 8"]
            },

            {
                type: "input",
                name: "quantity",
                message: "How much of this item would you like to purchase?"
            },

            {
                type: "confirm",
                name: "confirm",
                message: "Are you sure?",
                default: true
            }

        ]).then(function (Response) {
            if (Response.confirm) {
                console.log("\x1b[35m", "\nYou have ordered " + Response.quantity + " of Item " + Response.id);
                checkStock(parseInt(Response.quantity), parseInt(Response.id));
            } else {
                console.log("\x1b[35m", "\nThat's okay, come again when you are more sure!");
            }
        });

        function checkStock(quantity, id) {
            connection.query("SELECT stock_quantity, price FROM products WHERE ?", {
                item_id: id
            }, function (err, res) {

                if (err) throw err;

                if (res[0].stock_quantity >= quantity) {
                    connection.query(
                        "UPDATE products SET ? WHERE ?",
                        [{
                                stock_quantity: res[0].stock_quantity - quantity
                            },
                            {
                                item_id: id
                            }
                        ],
                        function (err) {
                            if (err) throw err;
                            console.log("Purchase Successful! Thank you for shopping with Bamazon");
                        },
                    );
                } else {
                    console.log("We don't have enough in stock. Please try again with a lower amount. We value your business!");
                }
            })
        }


        // connection.end();
    });
}