// business logic
// function Order(pizza, price) {
//   this.pizza = pizza;
//   this.price = price;
// }

function Pizza(size, toppings, special) {
  this.size = size;
  this.toppings = toppings;
  this.special = special;
}


Pizza.prototype.getPrice = function() {
  var newPrice = parseFloat(this.size);
  for (var i = 0; i < this.toppings.length; i++) {
    newPrice += (1.25);
  }
  return newPrice;
}

// function resetFields() {
//     $("input#new-first-name").val("");
//     $("input#new-last-name").val("");
//     $("input.new-type").val("");
//     $("input.new-street").val("");
//     $("input.new-city").val("");
//     $("input.new-state").val("");
// }

// user interface logic
$(document).ready(function() {
  $("form#new-pizza").submit(function(event) {
    event.preventDefault();

    var checkedSize = $('input[name="size"]:checked').val();

    var checkedToppings = [];
    $("input:checkbox[name=toppings]:checked").each(function(){
        var pushToppings = $(this).val();
        checkedToppings.push(pushToppings);
      });

    var checkedSpecial = [];
    $("input:checkbox[name=special]:checked").each(function(){
        var pushSpecial = $(this).val();
        checkedSpecial.push(pushSpecial);
      });


    var newPizza = new Pizza (checkedSize, checkedToppings, checkedSpecial);

    var pizzaPrice = newPizza.getPrice();


    if (newPizza.size === "9.30") {
      $("#pizza-size").text("Small");
    }
    else if (newPizza.size === "11.60") {
      $("#pizza-size").text("Medium");
    }
    else if (newPizza.size === "14.45") {
      $("#pizza-size").text("Large");
    }
    else if (newPizza.size === "17.35") {
      $("#pizza-size").text("X-Large");
    }

    for (var i = 0; i < newPizza.toppings.length; i++) {
      $("ul#pizza-toppings").append("<li>" + newPizza.toppings[i] + "</li>");
    }

    for (var i = 0; i < newPizza.special.length; i++) {
      $("ul#pizza-specials").append("<li>" + newPizza.special[i] + "</li>");
    }

    $("#pizza-price").text("$" + pizzaPrice);


    // resetFields();

  });
});
