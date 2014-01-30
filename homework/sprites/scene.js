$(function () {
    var canvas = $("#canvas")[0], // Note the array dereference.
        renderingContext = canvas.getContext("2d");

    sprites.renderingContext = renderingContext;

    sprites.stan.x = 100;
    sprites.stan.y = 100;
    sprites.kyle.x = 100;
    sprites.kyle.y = 0;

    sprites.drawStan();
    sprites.drawKyle();
});
