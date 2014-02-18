/*
 * This file demonstrates how our homebrew keyframe-tweening
 * engine is used.
 */
$(function () {
    var canvas = document.getElementById("canvas"),
        racers = [
            {
            	draw: sprites.drawKyle,               
                //draw: square,
                keyframes: [
                    {
                        frame: 0,
                        tx: 20,
                        ty: 50,
                        ease: KeyframeTweener.linear
                    },

                    {
                        frame: 7,
                        tx: 100,
                        ty: 50,
                      // ease: KeyframeTweener.linear
                       // ease: KeyframeTweener.quadEaseInOut
                    },

                    // The last keyframe does not need an easing function.
                    {
                        frame: 80,
                        tx: 80,
                        ty: 500,
                   //     rotate: 60 // Keyframe.rotate uses degrees.
                    }
                ]
            },

            {
            	draw: sprites.drawStan,
                //draw: circle,
                keyframes: [
                    {
                        frame: 50,
                        tx: 300,
                        ty: 600,
                        sx: 0.5,
                        sy: 0.5,
                        ease: KeyframeTweener.quadEaseOut
                    },

                    {
                        frame: 100,
                        tx: 300,
                        ty: 0,
                        sx: 3,
                        sy: 0.25,
                        ease: KeyframeTweener.quadEaseOut
                    },

                    {
                        frame: 150,
                        tx: 300,
                        ty: 600,
                        sx: 0.5,
                        sy: 0.5
                    }
                ]
            }
        ];

    // Finally, we initialize the engine.  Mainly, it needs
    // to know the rendering context to use.  And the animations
    // to display, of course.
   sprites.renderingContext = canvas.getContext("2d");
    KeyframeTweener.initialize({
        renderingContext: sprites.renderingContext,
        width: canvas.width,
        height: canvas.height,
        sprites: racers

    });
});
