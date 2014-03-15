/*
 * This demo script uses the Nanoshop module to apply a simple
 * filter on a canvas drawing.
 */
(function () {
    var canvas = $("#picture")[0],
        renderingContext = canvas.getContext("2d"),
        gradient;

    // Adapted from original code by Tyler Nichols.
    gradient = renderingContext.createRadialGradient(120, 120, 15, 120, 120, 75);
    gradient.addColorStop(0, "rgb(255, 102, 102)");
    gradient.addColorStop(1, "red");

    // Draw the sphere with a radial gradient.
    renderingContext.beginPath();
    renderingContext.fillStyle = gradient;
    renderingContext.arc(150, 150, 75, 0, 2 * Math.PI, true);
    renderingContext.shadowColor = "gray";
    renderingContext.shadowBlur = 20;
    renderingContext.shadowOffsetX = 10;
    renderingContext.shadowOffsetY = 15;
    renderingContext.fill();
    renderingContext.closePath();

    // Draw the top of the cube.
    renderingContext.beginPath();
    renderingContext.fillStyle = "rgb(140, 140, 240)";
    renderingContext.moveTo(300, 300);
    renderingContext.lineTo(335, 265);
    renderingContext.lineTo(435, 265);
    renderingContext.lineTo(400, 300);
    renderingContext.lineTo(300, 300);
    renderingContext.fill();
    renderingContext.closePath();

    // Draw the face of the cube.
    renderingContext.fillStyle = "rgb(110, 110, 210)";
    renderingContext.fillRect(300, 300, 100, 100);

    // Draw the right side of the cube.
    renderingContext.beginPath();
    renderingContext.fillStyle = "rgb(79, 79, 179)";
    renderingContext.moveTo(435, 265);
    renderingContext.lineTo(435, 355);
    renderingContext.lineTo(400, 400);
    renderingContext.lineTo(400, 300);
    renderingContext.lineTo(435, 265);
    renderingContext.fill();
    renderingContext.closePath();
    // (end of adapted code by Tyler Nichols)

    // Set a little event handler to apply the filter.
    // JD: Why did you keep this here?  Blow it away :)
//    $("#apply-filter-button").click(function () {
//        // Filter time.
//        renderingContext.putImageData(
//            Nanoshop.applyFilter(
//                renderingContext.getImageData(0, 0, canvas.width, canvas.height),
//                // This is a basic "darkener."
//                function (r, g, b, a) {
//                    return [r / 2, g / 2, b / 2, a];
//                }
//            ),
//            0, 0
//        );
//    });

    // JD: These are both technically correct, but you missed the last requested step,
    //     which was to make these a part of the actual Nanoshop module (kind of like
    //     the easing functions).  Better for reusability.
    $("#blackandwhite-button").click(function () {
        // Filter time.
        renderingContext.putImageData(
            Nanoshop.applyFilter(
                renderingContext.getImageData(0, 0, canvas.width, canvas.height),
                function (r, g, b, a) {
                    var average = (r + b + g)/3; // JD: Preferrably space around "/".
                    return[average, average, average, a];
                }
            ),
            0, 0
        );
    });
    $("#lighten-button").click(function () {
        // Filter time.
        renderingContext.putImageData(
            Nanoshop.applyFilter(
                renderingContext.getImageData(0, 0, canvas.width, canvas.height),
                // This is a basic "darkener."
                // JD: ^^^^^ Bad copy-paste.
                function (r, g, b, a) {
                    return [r * 1.2, g * 1.2, b * 1.2, a];
                }
            ),
            0, 0
        );
    });


    
    
    
}());
