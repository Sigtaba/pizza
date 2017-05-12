//business logic
// function Order(pizza, price) {
//   this.pizza = [];
//   this.price = price;
// }

function Pizza(size, toppings, special, price) {
  this.size = size;
  this.toppings = toppings;
  this.special = special;
  this.price = price;
}


// Pizza.prototype.getPrice = function(newPrice) {
//   var result = 0;
//   for (var i = 0; i < newPrice.length; i++) {
//     newPrice += (i * 1.25);
//   }
//   this.price = result;
// }

// Pizza.prototype.getToppings = function() {
//   return this.type + ", " + this.street + ", " + this.city + ", " + this.state;
// }

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

    var newPrice = (parseFloat(checkedSize) + ((checkedToppings.length) * 1.25))

    var newPizza = new Pizza (checkedSize, checkedToppings, checkedSpecial, newPrice);


    console.log(newPizza);

    // $(".new-address").each(function() {
    //   var inputtedType = $(this).find("input.new-type").val();
    //   var inputtedStreet = $(this).find("input.new-street").val();
    //   var inputtedCity = $(this).find("input.new-city").val();
    //   var inputtedState = $(this).find("input.new-state").val();
    //   var newAddress = new Address(inputtedType, inputtedStreet, inputtedCity, inputtedState);
    //   newContact.addresses.push(newAddress);
    // });
    //
    // $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");
    //
    // $(".newer-address").remove();
    //
    // $(".contact").last().click(function() {
    //   $("#show-contact").show();
    //   $("#show-contact h2").text(newContact.firstName);
    //   $(".first-name").text(newContact.firstName);
    //   $(".last-name").text(newContact.lastName);
    //   $("ul#addresses").text("");
    //   newContact.addresses.forEach(function(address) {
    //     $("ul#addresses").append("<li>" + address.fullAddress() + "</li>");
    //   });
    // });

    // resetFields();

  });
});
