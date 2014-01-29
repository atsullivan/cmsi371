$(function () {
    var canvas = $("#canvas")[0], // Note the array dereference.
        renderingContext = canvas.getContext("2d");

    sprites.renderingContext = renderingContext;

    sprites.willy.x = 210;
    sprites.willy.y = 130;

    sprites.geoff.x = 250;

    sprites.car.x = 300;

    sprites.drawWilly();
//    sprites.drawGeoff();
//    sprites.drawWillyShirt();
//    sprites.drawGeoffShirt();
//    sprites.drawCar();
});
