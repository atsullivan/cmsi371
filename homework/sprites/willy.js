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
        
        
        
        
        
        // STAN'S SHIRT
        sprites.renderingContext.fillStyle = "brown";
        sprites.renderingContext.strokeStyle = "brown";
        sprites.renderingContext.beginPath();
        sprites.renderingContext.moveTo(-20, 23);
        sprites.renderingContext.quadraticCurveTo(-30, 35, -30, 50);
        sprites.renderingContext.quadraticCurveTo(-26, 50, -23, 50);
        sprites.renderingContext.quadraticCurveTo(-23, 50, -24, 57);
        sprites.renderingContext.quadraticCurveTo(0, 63, 24, 57);
        sprites.renderingContext.quadraticCurveTo(23, 50, 23, 50);
        sprites.renderingContext.quadraticCurveTo(24, 50, 30, 50);
        sprites.renderingContext.quadraticCurveTo(30, 35, 20, 23);
        sprites.renderingContext.fill();
        sprites.renderingContext.stroke();
        // -----seem
        sprites.renderingContext.strokeStyle = "black";
        sprites.renderingContext.beginPath();
        sprites.renderingContext.moveTo(0, 25);
        sprites.renderingContext.quadraticCurveTo(0, 0, 0, 60);
        sprites.renderingContext.stroke();
        // -----buttons
        sprites.renderingContext.fillStyle = "black";
        sprites.renderingContext.beginPath();
        sprites.renderingContext.arc(-3, 37, 1, 0, Math.PI * 2);
        sprites.renderingContext.arc(-3, 45, 1, 0, Math.PI * 2);
        sprites.renderingContext.arc(-3, 53, 1, 0, Math.PI * 2);
        sprites.renderingContext.fill();
        // -----collar
        sprites.renderingContext.fillStyle = "red";
        sprites.renderingContext.beginPath();
        sprites.renderingContext.moveTo(20, 23);
        sprites.renderingContext.quadraticCurveTo(0, 45, -20, 23);
        sprites.renderingContext.fill();    


        
        
        sprites.renderingContext.strokeStyle = "black";
		sprites.renderingContext.fillStyle = "rgb(" + fleshR + "," + fleshG + "," + fleshB + ")";
        sprites.renderingContext.beginPath();
        sprites.renderingContext.arc(0, 0, 30, 0, Math.PI * 2);
        sprites.renderingContext.fill();
        sprites.renderingContext.stroke();

        // STAN'S EYES
        sprites.renderingContext.fillStyle = "white";
        sprites.renderingContext.beginPath();
        
        //-----circles
        sprites.renderingContext.arc(-8, 2, 8, 0, Math.PI * 2);
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
        
        //STAN'S HANDS
        sprites.renderingContext.beginPath();
        // -----fists
        sprites.renderingContext.arc(-27, 50, 6, 0, Math.PI * 2);
        sprites.renderingContext.arc(27, 50, 6, 0, Math.PI * 2);
        sprites.renderingContext.fill();
        // -----thumbs
        

        
        
        
        
    };

    // STAN'S SHIRT
    window['sprites'].shirt = {
        x: sprites.willy.x,
        y: sprites.willy.y
    };

    window['sprites'].drawWillyShirt = function () {
        sprites.renderingContext.save();
        sprites.renderingContext.translate(sprites.willy.x, sprites.willy.y);
        sprites.renderingContext.fillStyle = "red";
        sprites.renderingContext.strokeStyle = "black";
        sprites.renderingContext.beginPath();
        sprites.renderingContext.moveTo(0, 100);
        sprites.renderingContext.quadraticCurveTo(0, 0, -50, 80);
        
        sprites.renderingContext.fill();
        sprites.renderingContext.stroke();
        
        
        //sprites.renderingContext.rect(0, 25, 150, 150);
        //sprites.renderingContext.fillRect(0, 25, 150, 150);
        


        sprites.renderingContext.restore();

    };

    
});
