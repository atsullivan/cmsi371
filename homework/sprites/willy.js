$(function () {
    window['sprites'] = window['sprites'] || {};
    window['sprites'].willy = {
        x: 50,
        y: 50,
    };
    
    // STAN'S FACE
    window['sprites'].drawWilly = function () {
        var fleshR = 255,
            fleshG = 213,
            fleshB = 190;

        sprites.renderingContext.save();
        sprites.renderingContext.translate(sprites.willy.x, sprites.willy.y);
        sprites.renderingContext.scale(3, 3);
        sprites.renderingContext.fillStyle = "rgb(" + fleshR + "," + fleshG + "," + fleshB + ")";
        sprites.renderingContext.strokeStyle = "black";
        sprites.renderingContext.beginPath();
        sprites.renderingContext.arc(0, 0, 30, 0, Math.PI * 2);
        sprites.renderingContext.fill();
        sprites.renderingContext.stroke();

        // STAN'S EYES
        sprites.renderingContext.fillStyle = "white";
        sprites.renderingContext.beginPath();
        
        //-----circles
        sprites.renderingContext.arc(-8, 2, 8, 0, Math.PI * 2);
        sprites.renderingContext.moveTo(16,1);
        sprites.renderingContext.arc(8, 2, 8, 0, Math.PI * 2);
        sprites.renderingContext.fill();
        //-----curves
        	//Left
        sprites.renderingContext.moveTo(-16, 1);
        sprites.renderingContext.quadraticCurveTo(-19, 19, -2, 8);
        	//Right
        sprites.renderingContext.moveTo(16, 1);
        sprites.renderingContext.quadraticCurveTo(19, 19, 2, 8);
        sprites.renderingContext.fill();
                
        //-----center
        sprites.renderingContext.fillStyle = "black";
        sprites.renderingContext.beginPath();
        sprites.renderingContext.arc(-5, 2, 1, 0, Math.PI * 2);
        sprites.renderingContext.arc(5, 2, 1, 0, Math.PI * 2);
        sprites.renderingContext.fill();
        


        
        
        // STAN'S SMILE
        sprites.renderingContext.beginPath();
        sprites.renderingContext.scale(1.0, 1.0);
        sprites.renderingContext.moveTo(5, 21);
        sprites.renderingContext.lineTo(-5, 21);
        //If i want a smile use arc
        //sprites.renderingContext.arc(0, 15, 5, .2, 3);
        sprites.renderingContext.stroke();
        
        
        
        // STAN'S HAT
        sprites.renderingContext.fillStyle = "blue";
        sprites.renderingContext.beginPath();
        sprites.renderingContext.moveTo(-27, -13);
        sprites.renderingContext.quadraticCurveTo(-16, -31, 0, -30);
        sprites.renderingContext.quadraticCurveTo(16, -31, 27, -13);
        sprites.renderingContext.fill();
        sprites.renderingContext.stroke();
        // -----hat rim
        sprites.renderingContext.fillStyle = "red";
        sprites.renderingContext.beginPath();
        sprites.renderingContext.moveTo(-30, -5);
        sprites.renderingContext.quadraticCurveTo(0, -16, 30, -5);
        sprites.renderingContext.quadraticCurveTo(30, -7, 30, -12);
        sprites.renderingContext.quadraticCurveTo(0, -23, -30, -12);
        sprites.renderingContext.quadraticCurveTo(-30, -12, -30, -5);
        sprites.renderingContext.fill();
        sprites.renderingContext.stroke();
        // -----hat ball
        sprites.renderingContext.beginPath();
        sprites.renderingContext.arc(0, -32, 5, 0, Math.PI * 2);
        sprites.renderingContext.fill();
        sprites.renderingContext.stroke();
        
    };

    // Willy's white shirt
    window['sprites'].shirt = {
        x: sprites.willy.x,
        y: sprites.willy.y
    };

    window['sprites'].drawWillyShirt = function () {
        sprites.renderingContext.save();
        sprites.renderingContext.translate(sprites.willy.x, sprites.willy.y);
        sprites.renderingContext.fillStyle = "rgb(" + 250 + "," + 250 + "," + 250 + ")";
        sprites.renderingContext.strokeStyle = "black";
        sprites.renderingContext.beginPath();
        sprites.renderingContext.strokeRect(-37, 25, 75, 75);
        sprites.renderingContext.fillRect(-37, 25, 75, 75);

        sprites.renderingContext.restore();

    };

    
});
