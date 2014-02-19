$(function () {
    window['sprites'] = window['sprites'] || {};
    window['sprites'].mrhankey = {
        x: 950,
        y: 355,
    };
    
    // Mr Hankey
    window['sprites'].drawMrHankey = function () {
        var fleshR = 102,
            fleshG = 65,
            fleshB = 24;
        var hatR = 171,
            hatG = 9,
            hatB = 11;

        // JD: You have a save here...but no restore at the end.
        sprites.renderingContext.save();
        sprites.renderingContext.translate(sprites.mrhankey.x, sprites.mrhankey.y);
        sprites.renderingContext.scale(.5, .75);
       // sprites.renderingContext.scale(1, 1.5);
        
        // MR HANKEY'S HAT(TAIL)
        sprites.renderingContext.fillStyle = "rgb(" + hatR + "," + hatG + "," + hatB + ")";
        sprites.renderingContext.beginPath();
        sprites.renderingContext.moveTo(-25, -23);
        sprites.renderingContext.quadraticCurveTo(-40, -15, -50, 10);
        sprites.renderingContext.quadraticCurveTo(-43, 10, -45, 10);
        sprites.renderingContext.quadraticCurveTo(-45, 10, -20, -10);
        sprites.renderingContext.fill();
        // -----ball
        sprites.renderingContext.fillStyle = "white";
        sprites.renderingContext.beginPath();
        sprites.renderingContext.arc(-47, 10, 6, 0, Math.PI * 2);
        sprites.renderingContext.fill();
        sprites.renderingContext.stroke();
 
        // MR HANKEY'S BODY
        sprites.renderingContext.strokeStyle = "black";
		sprites.renderingContext.fillStyle = "rgb(" + fleshR + "," + fleshG + "," + fleshB + ")";
        // -----head
        sprites.renderingContext.beginPath();
        sprites.renderingContext.arc(0, 0, 30, 0, Math.PI * 2);
        sprites.renderingContext.arc(0, 20, 20, 0, Math.PI * 2);

        // -----middle
        sprites.renderingContext.arc(0, 50, 30, 0, Math.PI * 2);
        // -----bottom
        sprites.renderingContext.arc(0, 100, 20, 0, Math.PI * 2);
        sprites.renderingContext.arc(0, 85, 25, 0, Math.PI * 2);
        sprites.renderingContext.arc(0, 85, 20, 0, Math.PI * 2);
        sprites.renderingContext.fill();
        
        // MR HANKEY'S EYES
        sprites.renderingContext.fillStyle = "white";
        sprites.renderingContext.beginPath();
        //-----circles
        sprites.renderingContext.arc(-10, -5, 10, 0, Math.PI * 2);
        sprites.renderingContext.arc(8, -5, 10, 0, Math.PI * 2);
        sprites.renderingContext.fill();
        //-----center
        sprites.renderingContext.fillStyle = "black";
        sprites.renderingContext.beginPath();
        sprites.renderingContext.arc(-11, -8, 6, 0, Math.PI * 2);
        sprites.renderingContext.arc(8, -8, 6, 0, Math.PI * 2);
        sprites.renderingContext.fill();
        // -----reflection
        sprites.renderingContext.fillStyle = "white";
        sprites.renderingContext.beginPath();
        sprites.renderingContext.moveTo(-17, -10);
        sprites.renderingContext.lineTo(-10, -10);
        sprites.renderingContext.lineTo(-17, -5);
        sprites.renderingContext.moveTo(1, -10);
        sprites.renderingContext.lineTo(8, -10);
        sprites.renderingContext.lineTo(1, -5);
        sprites.renderingContext.fill();
        // -----bottom lids
        sprites.renderingContext.fillStyle = "rgb(" + fleshR + "," + fleshG + "," + fleshB + ")";
        sprites.renderingContext.beginPath();
        sprites.renderingContext.moveTo(-23, 0);
        sprites.renderingContext.quadraticCurveTo(-9, -5, 0, 0);
        sprites.renderingContext.quadraticCurveTo(9, -5, 23, 0);
        sprites.renderingContext.fill();
        sprites.renderingContext.stroke();
        sprites.renderingContext.quadraticCurveTo(0, 50, -23, 0);
        sprites.renderingContext.fill();
        
        //MR HANKEY'S SMILE
        sprites.renderingContext.fillStyle = "red";
        sprites.renderingContext.beginPath();
        // -----tongue
        sprites.renderingContext.moveTo(-15, 5);
        sprites.renderingContext.quadraticCurveTo(0, 30, 15, 5);
        sprites.renderingContext.quadraticCurveTo(0, 10, -15, 5);
        sprites.renderingContext.fill();
        // -----mouth
        sprites.renderingContext.fillStyle = "black";
        sprites.renderingContext.beginPath();
        sprites.renderingContext.moveTo(-15, 5);
        sprites.renderingContext.quadraticCurveTo(-14, 9, -9, 13);
        sprites.renderingContext.quadraticCurveTo(0, 9, 9, 13);
        sprites.renderingContext.quadraticCurveTo(14, 9, 15, 5);
        sprites.renderingContext.quadraticCurveTo(0, 7, -15, 5);
        sprites.renderingContext.fill();
                   
        // MR HANKEY'S HAT
        sprites.renderingContext.fillStyle = "rgb(" + hatR + "," + hatG + "," + hatB + ")";
        sprites.renderingContext.beginPath();
        // -----base
        sprites.renderingContext.moveTo(-25, -23);
        sprites.renderingContext.quadraticCurveTo(0, -55, 25, -23);
        sprites.renderingContext.fill();
                
        
        // -----rim
        sprites.renderingContext.fillStyle = "white";
        sprites.renderingContext.beginPath();
        sprites.renderingContext.moveTo(-27, -15);
        sprites.renderingContext.quadraticCurveTo(0, -20, 27, -15);
        sprites.renderingContext.quadraticCurveTo(27, -20, 27, -22);
        sprites.renderingContext.quadraticCurveTo(0, -27, -27, -22);
        sprites.renderingContext.quadraticCurveTo(-27, -20, -27, -15);
        sprites.renderingContext.fill();
        sprites.renderingContext.stroke();
        
        //MR HANKEY'S ARMS
        sprites.renderingContext.fillStyle = "black";
        // -----right
        sprites.renderingContext.beginPath();
        sprites.renderingContext.moveTo(28, 40);
        sprites.renderingContext.lineTo(70, 22);
        sprites.renderingContext.lineTo(72, 24);
        sprites.renderingContext.lineTo(28, 43);
        sprites.renderingContext.fill();
        // -----left
        sprites.renderingContext.beginPath();
        sprites.renderingContext.moveTo(-28, 40);
        sprites.renderingContext.lineTo(-70, 22);
        sprites.renderingContext.lineTo(-72, 24);
        sprites.renderingContext.lineTo(-28, 43);
        sprites.renderingContext.fill();
        //MR HANKEY'S HANDS
        sprites.renderingContext.fillStyle = "white";
        // -----glove hands
        sprites.renderingContext.beginPath();
        sprites.renderingContext.moveTo(-78, 25);
        sprites.renderingContext.quadraticCurveTo(-85, 23, -90, 20);
        sprites.renderingContext.quadraticCurveTo(-96, 10, -83, 13);
        sprites.renderingContext.quadraticCurveTo(-70, 10, -71, 18);
        
        
        sprites.renderingContext.fill();
        sprites.renderingContext.stroke();
        
        sprites.renderingContext.beginPath();
        sprites.renderingContext.moveTo(78, 25);
        sprites.renderingContext.quadraticCurveTo(85, 23, 90, 20);
        sprites.renderingContext.quadraticCurveTo(96, 10, 83, 13);
        sprites.renderingContext.quadraticCurveTo(70, 10, 71, 18);
        
        
        sprites.renderingContext.fill();
        sprites.renderingContext.stroke();
        // -----glove rims
        sprites.renderingContext.beginPath();
        sprites.renderingContext.moveTo(-71, 18);
        sprites.renderingContext.quadraticCurveTo(-78, 19, -78, 25);
        sprites.renderingContext.quadraticCurveTo(-65, 25, -71, 18);
        sprites.renderingContext.fill();
        sprites.renderingContext.stroke();        
        sprites.renderingContext.beginPath();
        sprites.renderingContext.moveTo(71, 18);
        sprites.renderingContext.quadraticCurveTo(78, 19, 78, 25);
        sprites.renderingContext.quadraticCurveTo(65, 25, 71, 18);
        sprites.renderingContext.fill();
        sprites.renderingContext.stroke();
        
        
        

    // JD: Why
        
        
        
        
    // JD: all
        
        
        
        
    // JD: this
        
        
        
        
    // JD: spaaaaaaace?
        
        
        
    };    
});