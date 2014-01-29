$(function () {
    var canvas = $("#canvas")[0], // Note the array dereference.
        renderingContext = canvas.getContext("2d");

    sprites.renderingContext = renderingContext;

    sprites.stan.x = 100;
    sprites.kyle.x = 200;
    sprites.kyle.y = 200;

  

    sprites.drawStan();
    sprites.drawKyle();
//    sprites.drawGeoffShirt();
//    sprites.drawCar();
});
