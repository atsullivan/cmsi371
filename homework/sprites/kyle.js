$(function () {
    window['sprites'] = window['sprites'] || {};
    window['sprites'].kyle = {
        x: 50,
        y: 50,
    };
    
    // Kyle Broflovski
    window['sprites'].drawKyle = function () {
        var fleshR = 255,
            fleshG = 213,
            fleshB = 190;

        sprites.renderingContext.save();
        sprites.renderingContext.translate(sprites.kyle.x, sprites.kyle.y);
        sprites.renderingContext.scale(3, 3);
 
        // STAN'S PANTS
        sprites.renderingContext.fillStyle = "green";
        sprites.renderingContext.strokeStyle = "black";
        sprites.renderingContext.beginPath();
        sprites.renderingContext.moveTo(-22, 58);
        sprites.renderingContext.quadraticCurveTo(-23, 51, -22, 67);
        sprites.renderingContext.quadraticCurveTo(0, 67, 22, 67);
        sprites.renderingContext.quadraticCurveTo(23, 51, 22, 58);
        sprites.renderingContext.fill();
        
        //STAN'S SHOES
        sprites.renderingContext.fillStyle = "black";
        sprites.renderingContext.strokeStyle = "black";
        sprites.renderingContext.beginPath();
        sprites.renderingContext.moveTo(-27, 67);
        sprites.renderingContext.quadraticCurveTo(-16, 61, 0, 67);
        sprites.renderingContext.quadraticCurveTo(16, 61, 27, 67);
        sprites.renderingContext.fill();
 
        // STAN'S SHIRT
        sprites.renderingContext.fillStyle = "orange";
        sprites.renderingContext.strokeStyle = "orange";
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
        // -----pockets
        sprites.renderingContext.fillStyle = "black";
        sprites.renderingContext.beginPath();
        sprites.renderingContext.moveTo(-15, 40);
        sprites.renderingContext.rect(-15, 40, 9, 11);
        sprites.renderingContext.moveTo(15, 40);
        sprites.renderingContext.rect(6, 40, 9, 11);
        sprites.renderingContext.stroke();
        
        // -----collar
        sprites.renderingContext.fillStyle = "green";
        sprites.renderingContext.beginPath();
        sprites.renderingContext.moveTo(20, 23);
        sprites.renderingContext.quadraticCurveTo(0, 45, -20, 23);
        sprites.renderingContext.fill();    

        //STAN'S HEAD
        sprites.renderingContext.strokeStyle = "black";
		sprites.renderingContext.fillStyle = "rgb(" + fleshR + "," + fleshG + "," + fleshB + ")";
        sprites.renderingContext.beginPath();
        sprites.renderingContext.arc(0, 0, 30, 0, Math.PI * 2);
        sprites.renderingContext.fill();

        // STAN'S EYES
        sprites.renderingContext.fillStyle = "white";
        sprites.renderingContext.beginPath();
        //-----circles
        sprites.renderingContext.arc(-8, 2, 8, 0, Math.PI * 2);
        sprites.renderingContext.arc(8, 2, 8, 0, Math.PI * 2);
        sprites.renderingContext.fill();
        //-----curves
        sprites.renderingContext.moveTo(-16, 1);
        sprites.renderingContext.quadraticCurveTo(-19, 19, -2, 8);
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
        sprites.renderingContext.stroke();
            
        // STAN'S HAT
        sprites.renderingContext.fillStyle = "green";
        sprites.renderingContext.beginPath();
        sprites.renderingContext.moveTo(-27, -13);
        sprites.renderingContext.quadraticCurveTo(-16, -31, 0, -30);
        sprites.renderingContext.quadraticCurveTo(16, -31, 27, -13);
        sprites.renderingContext.fill();
        // -----hat rim
        sprites.renderingContext.beginPath();
        sprites.renderingContext.moveTo(-30, -5);
        sprites.renderingContext.quadraticCurveTo(0, -16, 30, -5);
        sprites.renderingContext.quadraticCurveTo(30, -7, 30, -12);
        sprites.renderingContext.quadraticCurveTo(0, -23, -30, -12);
        sprites.renderingContext.quadraticCurveTo(-30, -12, -30, -5);
        sprites.renderingContext.fill();
        // -----hat ball
        sprites.renderingContext.beginPath();
        sprites.renderingContext.arc(0, -32, 5, 0, Math.PI * 2);
        sprites.renderingContext.fill();
        
        //STAN'S HANDS
        sprites.renderingContext.beginPath();
        // -----fists
        sprites.renderingContext.arc(-27, 50, 6, 0, Math.PI * 2);
        sprites.renderingContext.arc(27, 50, 6, 0, Math.PI * 2);
        sprites.renderingContext.fill();
        // -----thumbs
        sprites.renderingContext.beginPath();
        sprites.renderingContext.arc(-23, 48, 3, 0, Math.PI * 2);
        sprites.renderingContext.moveTo(26, 48);
        sprites.renderingContext.arc(23, 48, 3, 0, Math.PI * 2);
        sprites.renderingContext.fill();     
    };    
});