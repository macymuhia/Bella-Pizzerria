// BACK-END LOGIC
function Cart(name, size, crust, topping) {
    this.name = name;
    this.size = size;
    this.crust = crust;
    this.topping = topping;
}

function changeToNumber(elementId) {
    inputToBeChanged = parseInt(getElementById(elementId).value);
    return inputToBeChanged;
}

function pizzaChoice() {
    var pizzaName = document.getElementById("pizza").value;
    var pizzaSize = document.getElementById("size").value;
    var pizzaCrust = document.getElementById("crust").value;
    var pizzaTopping = document.getElementById("topping").value;


    var myCart = new Cart(pizzaName, pizzaSize, pizzaCrust, pizzaTopping);

    myCartChoice = [myCart.name, myCart.size, myCart.crust, myCart.topping];

    return myCartChoice;
}

// FRONT-END LOGIC

function clickBtn() {

    window.location.href = "#order";
}

$(document).ready(function() {

    //Preloader
    $(window).on("load", function() {
        preloaderFadeOutTime = 2000;

        function hidePreloader() {
            var preloader = $('.preloader');
            preloader.fadeOut(preloaderFadeOutTime);
        }
        hidePreloader();
    });

    // Getting user choices    
    var cartItemsCount = 0;
    $("#add-to-cart").click(function() {
        cartItemsCount++;

        var selectedPizza = document.getElementById("pizza").value;
        var selectedSize = document.getElementById("size").value;
        var selectedCrust = document.getElementById("crust").value;
        var selectedTopping = document.getElementById("topping").value;
        var selectedQuantity = document.getElementById("qty").value;

        $(".cart-icon").show().append(cartItemsCount);

        $(".modal-body ul").append("<li>" + selectedQuantity + " " + selectedSize + " " + selectedPizza + " Pizza " + " (" + selectedCrust + ", " + selectedTopping + ")" + "</li>");
    });


});