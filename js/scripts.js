// business logic

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
    $("#new-pizza").slideUp();
    $("#extras-row").show();

    $("form#extras").submit(function(event) {
      event.preventDefault();

      var checkedRavs = $('input[name="travs"]:checked').val();

      var newPizzaPrice = pizzaPrice + parseInt(checkedRavs);

      $("#pizza-price").text("$" + newPizzaPrice);

      if (checkedRavs === "6.79") {
        $("#pizza-extras").text("8 Peice Toasted Ravioli");
      }
      else if (checkedRavs === "17.50") {
        $("#pizza-extras").text("24 Peice Toasted Ravioli");
      }
      else if (checkedRavs === "27.95") {
        $("#pizza-extras").text("50 Peice Toasted Ravioli");
      }
      else {
        $("#pizza-extras").text("N/A");
      }

      $("#extras").slideUp();
      $("#pizza-pic-row").show();

      console.log(newPizza);

      if (newPizza.toppings.length === 0 ) {
      $("#pizza-image").attr( "src", "img/pizza-cheese.jpg");
      }
      else {
        $("#pizza-image").attr( "src", "img/pizza-everything.jpg");
      }


    });
  });

});
