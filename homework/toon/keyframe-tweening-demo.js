/*
 * This file demonstrates how our homebrew keyframe-tweening
 * engine is used.
 */
$(function () {
    var canvas = document.getElementById("canvas"),
        racers = [
            {
            	draw: sprites.drawKyle,               
                keyframes: [
                    {
                        frame: 0,
                        tx: 0,
                        ty: 0,
                     //   ease: KeyframeTweener.linear
                    },

                    {
                        frame: 800,
                        tx: 0,
                        ty: 0,
                      //  ease: KeyframeTweener.linear
                    }
                ]
            },

            {
            	draw: sprites.drawStan,
            	
            	keyframes: [
                    {
                        frame: 0,
                        tx: 0,
                        ty: 0,
                      //  ease: KeyframeTweener.linear
                    },

                    {
                        frame: 800,
                        tx: 0,
                        ty: 0,
                      //  ease: KeyframeTweener.linear
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
