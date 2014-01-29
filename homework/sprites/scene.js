$(function () {
    var canvas = $("#canvas")[0], // Note the array dereference.
        renderingContext = canvas.getContext("2d");

    sprites.renderingContext = renderingContext;

    sprites.stan.x = 210;
    sprites.stan.y = 130;

  

    sprites.drawStan();
//    sprites.drawGeoff();
//    sprites.drawGeoffShirt();
//    sprites.drawCar();
});
