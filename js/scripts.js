// BACK-END LOGIC
function Cart(name, size, crust, topping) {
    this.name = name;
    this.size = size;
    this.crust = crust;
    this.topping = topping;
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

});