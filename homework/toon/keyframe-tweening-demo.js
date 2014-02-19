/*
 * This file demonstrates how our homebrew keyframe-tweening
 * engine is used.
 */
$(function () {
    var canvas = document.getElementById("canvas"),
        characters = [
            {
            	draw: sprites.drawKyle,               
                keyframes: [
                    {
                        frame: 0,
                        tx: 0,
                        ty: 0,
                         ease: KeyframeTweener.linear

                    },

                    {
                        frame: 150,
                        tx: 0,
                        ty: 0
                    },
                    
                    {
                        frame: 200,
                        tx: 0,
                        ty: 500
                    } 
 
                ]
            },

            {
            	draw: sprites.drawStan,
            	
            	keyframes: [
                    {
                        frame: 0,
                        tx: 0,
                        ty: 0

                    },

                    {
                        frame: 150,
                        tx: 0,
                        ty: 0
                    },
                    
                    {
                        frame: 200,
                        tx: 0,
                        ty: 500
                    } 
 
 
                  ]  
            },
            {
            	draw: sprites.drawMrHankey,               
                keyframes: [
                    {
                        frame: 50,
                        tx:100,
                        ty:0,

                        ease: KeyframeTweener.easeInBounce
                    },

                    {
                        frame: 100,
                        tx: -500,
                        ty: 0
                    },
                    
                    {
                        frame: 300,
                        tx:-500,
                        ty:0,

                        ease: KeyframeTweener.easeInBounce
                    },

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
        sprites: characters,
        background: function (renderingContext) {
            var streetR = 86,
                streetG = 92,
                streetB = 89; 
             var skyR = 146,
                 skyG = 224,
                 skyB = 240;        
            var  mtnR = 20,
                 mtnG = 140,
                 mtnB = 62;  
            renderingContext.save();	
			renderingContext.fillStyle = "rgb(" + skyR + "," + skyG + "," + skyB + ")";
            renderingContext.fillRect(0, 0, canvas.width, canvas.height);
            
            renderingContext.fillStyle = "rgb(" + mtnR + "," + mtnG + "," + mtnB + ")";
            renderingContext.fillRect(0, 250, canvas.width, canvas.height);
            renderingContext.fillRect(0, 200, canvas.width/2, canvas.height);
            
            renderingContext.beginPath();
            renderingContext.moveTo(0, 200);
            renderingContext.lineTo(200, 100);
            renderingContext.lineTo(canvas.width, 300);
            renderingContext.fill();
            
            renderingContext.beginPath();
            renderingContext.moveTo(150, 200);
            renderingContext.lineTo(370, 70);
            renderingContext.lineTo(canvas.width-300, 300);
            renderingContext.fill();
            
            renderingContext.beginPath();
            renderingContext.moveTo(canvas.width-300, 300);
            renderingContext.lineTo(canvas.width, 100);
            renderingContext.lineTo(canvas.width, canvas.height);
            renderingContext.fill();    
            renderingContext.fillStyle = "white";
            renderingContext.fillRect(0, 300, canvas.width, canvas.height);            
            renderingContext.fillStyle = "rgb(" + streetR + "," + streetG + "," + streetB + ")";
            renderingContext.fillRect(0, 450, canvas.width, 500);
            renderingContext.fillStyle = "white";
            renderingContext.fillRect(0, 550, canvas.width, canvas.height);
            renderingContext.restore();
        }

    });
});
