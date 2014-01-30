$(function () {
    var canvas = $("#canvas")[0], // Note the array dereference.
        renderingContext = canvas.getContext("2d");

    sprites.renderingContext = renderingContext;

    sprites.stan.x = 100;
    sprites.stan.y = 100;
    sprites.kyle.x = 100;
    sprites.kyle.y = 0;
    sprites.mrhankey.x = 200;
    sprites.mrhankey.y = 200;
    

    sprites.drawStan();
    sprites.drawKyle();
    sprites.drawMrHankey();
});
