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
            },
            {
            	draw: sprites.drawMrHankey,               
                keyframes: [
                    {
                        frame: 51,
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

        ];

    // Finally, we initialize the engine.  Mainly, it needs
    // to know the rendering context to use.  And the animations
    // to display, of course.
   sprites.renderingContext = canvas.getContext("2d");
    KeyframeTweener.initialize({
        renderingContext: sprites.renderingContext,
        width: canvas.width,
        height: canvas.height,
        sprites: racers,
        
        
        
        
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
            
            
            
            var baseR = 92,
                baseG = 120,
                baseB = 71;
            var groundR = 94,
                groundG = 71,
                groundB = 16;
            var treeR = 84,
                treeG = 65,
                treeB = 29;

            renderingContext.save();
//            var greenBase = renderingContext.createLinearGradient(0,canvas.height,canvas.width,canvas.height);
//                greenBase.addColorStop(0, "rgb(" + (baseR-30) + "," + (baseG-30) + "," + (baseB-30) + ")");
//                greenBase.addColorStop(1, "rgb(" + (baseR*2) + "," + (baseG*3) + "," + (baseB*2) + ")");
//            renderingContext.fillStyle = greenBase;                
                
                
			
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

//            var groundLight = renderingContext.createLinearGradient(0, 350, canvas.width, 500);
//                groundLight.addColorStop(0,"rgb(" + (groundR-50) + "," + (groundG-50) + "," + (groundB-20) + ")");
//                groundLight.addColorStop(1,"rgb(" + groundR*2 + "," + groundG*2 + "," + groundB*4 + ")");
//            renderingContext.fillStyle = groundLight;
//            renderingContext.fillRect(0, 350, canvas.width, 500);
//
//            var treeLight = renderingContext.createLinearGradient(0, 300, 40, 80);
//                treeLight.addColorStop(0, "rgb(" + (treeR-10) + "," + (treeG-10) + "," + (treeB-10) + ")");
//                treeLight.addColorStop(1, "rgb(" + (treeR*2) + "," + (treeG*2) + "," + (treeB*2) + ")");
//            renderingContext.fillStyle = treeLight;
//            renderingContext.fillRect(20, 0, 20, 400);
//            renderingContext.fillRect(70, 0, 28, 370);
//            renderingContext.fillRect(200, 0, 18, 385);
//            renderingContext.fillRect(290, 0, 15, 360);
//            renderingContext.fillRect(370, 0, 16, 355);
//            renderingContext.fillRect(575, 0, 20, 400);
//            renderingContext.fillRect(670, 0, 26, 420);
//            renderingContext.fillRect(700, 0, 22, 370);
//            renderingContext.fillRect(765, 0, 30, 440);
//            renderingContext.fillRect(820, 0, 55, 500);
//            renderingContext.fillRect(870, 0, 12, 355);
//            renderingContext.fillRect(950, 0, 20, 390);

            renderingContext.restore();
        }

    });
});
