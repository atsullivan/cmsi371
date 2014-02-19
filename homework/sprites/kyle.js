$(function () {
    window['sprites'] = window['sprites'] || {};
    window['sprites'].kyle = {
        x: 100,
        y: 313,
    };
    
    // Kyle Broflovski
    window['sprites'].drawKyle = function (renderingContext) {
        var fleshR = 255,
            fleshG = 213,
            fleshB = 190;
        var hatR = 62,
            hatG = 227,
            hatB = 16;
        var pantR = 10,
        	pantG = 112,
        	pantB = 90;
        var shirtR = 227,
        	shirtG = 113,
        	shirtB = 32;

        // JD: You have a save here...but no restore at the end.
        sprites.renderingContext.save();
        sprites.renderingContext.translate(sprites.kyle.x, sprites.kyle.y);
        sprites.renderingContext.scale(2, 2);
 
        // KYLE'S PANTS
        sprites.renderingContext.fillStyle = "rgb(" + pantR + "," + pantG + "," + pantB + ")";
        sprites.renderingContext.strokeStyle = "black";
        sprites.renderingContext.beginPath();
        sprites.renderingContext.moveTo(-22, 58);
        sprites.renderingContext.quadraticCurveTo(-23, 51, -22, 67);
        sprites.renderingContext.quadraticCurveTo(0, 67, 22, 67);
        sprites.renderingContext.quadraticCurveTo(23, 51, 22, 58);
        sprites.renderingContext.fill();
        
        //KYLE'S SHOES
        sprites.renderingContext.fillStyle = "black";
        sprites.renderingContext.strokeStyle = "black";
        sprites.renderingContext.beginPath();
        sprites.renderingContext.moveTo(-27, 67);
        sprites.renderingContext.quadraticCurveTo(-16, 61, 0, 67);
        sprites.renderingContext.quadraticCurveTo(16, 61, 27, 67);
        sprites.renderingContext.fill();
 
        // KYLE'S SHIRT
        sprites.renderingContext.fillStyle = "rgb(" + shirtR + "," + shirtG + "," + shirtB + ")";
        sprites.renderingContext.strokeStyle = "rgb(" + shirtR + "," + shirtG + "," + shirtB + ")";
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
        sprites.renderingContext.moveTo(-14, 40);
        sprites.renderingContext.rect(-14, 40, 8, 11);
        sprites.renderingContext.moveTo(-14, 40);
        sprites.renderingContext.lineTo(-10, 45);
        sprites.renderingContext.lineTo(-6, 40);
        sprites.renderingContext.rect(6, 40, 8, 11);
        sprites.renderingContext.lineTo(10, 45);
        sprites.renderingContext.lineTo(14, 40);
        sprites.renderingContext.stroke();
        
        // -----collar
        sprites.renderingContext.fillStyle = "green";
        sprites.renderingContext.beginPath();
        sprites.renderingContext.moveTo(20, 23);
        sprites.renderingContext.quadraticCurveTo(0, 45, -20, 23);
        sprites.renderingContext.fill();    

        //KYLE'S HEAD
        sprites.renderingContext.strokeStyle = "black";
		sprites.renderingContext.fillStyle = "rgb(" + fleshR + "," + fleshG + "," + fleshB + ")";
        sprites.renderingContext.beginPath();
        sprites.renderingContext.arc(0, 0, 30, 0, Math.PI * 2);
        sprites.renderingContext.fill();

        // KYLE'S EYES
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
        
        // KYLE'S SMILE
        sprites.renderingContext.beginPath();
        sprites.renderingContext.scale(1.0, 1.0);
        sprites.renderingContext.moveTo(5, 21);
        sprites.renderingContext.lineTo(-5, 21);
        sprites.renderingContext.stroke();
            
        // KYLE'S HAT
        sprites.renderingContext.fillStyle = "rgb(" + hatR + "," + hatG + "," + hatB + ")";
        sprites.renderingContext.beginPath();
        // -----hat base
        sprites.renderingContext.beginPath();
        sprites.renderingContext.moveTo(-30, -5);
        sprites.renderingContext.quadraticCurveTo(0, -16, 30, -5);
        sprites.renderingContext.quadraticCurveTo(30, -27, 30, -25);
        sprites.renderingContext.quadraticCurveTo(28, -30, 25, -30);
        sprites.renderingContext.quadraticCurveTo(-28, -30, -25, -30);
        sprites.renderingContext.quadraticCurveTo(-28, -30, -30, -25); 
        sprites.renderingContext.quadraticCurveTo(-30, -12, -30, -5);
        sprites.renderingContext.fill();
        // -----hat ears
        sprites.renderingContext.beginPath();
        sprites.renderingContext.moveTo(-25, 10);
        sprites.renderingContext.quadraticCurveTo(-21, -25, -37, 7);
        sprites.renderingContext.quadraticCurveTo(-38, 30, -25, 10);
        sprites.renderingContext.moveTo(25, 10);
        sprites.renderingContext.quadraticCurveTo(21, -25, 37, 7);
        sprites.renderingContext.quadraticCurveTo(38, 30, 25, 10);
        sprites.renderingContext.fill();
        // -----hat front
        sprites.renderingContext.fillStyle = "green";
        sprites.renderingContext.beginPath();
        sprites.renderingContext.moveTo(-25, -4);
        sprites.renderingContext.quadraticCurveTo(0, -10, 25, -4);
        sprites.renderingContext.quadraticCurveTo(25, -15, 25, -20);
        sprites.renderingContext.quadraticCurveTo(0, -21, -25, -20);
        sprites.renderingContext.fill();
        
        //STAN'S HANDS
        sprites.renderingContext.beginPath();
        sprites.renderingContext.fillStyle = "rgb(" + hatR + "," + hatG + "," + hatB + ")";
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