$(function () {
    window['sprites'] = window['sprites'] || {};
    window['sprites'].mrhankey = {
        x: 50,
        y: 50,
    };
    
    // Mr Hankey
    window['sprites'].drawMrHankey = function () {
        var fleshR = 102,
            fleshG = 65,
            fleshB = 24;
        var hatR = 171,
            hatG = 9,
            hatB = 11;

        sprites.renderingContext.save();
        sprites.renderingContext.translate(sprites.mrhankey.x, sprites.mrhankey.y);
        sprites.renderingContext.scale(1, 2);
 
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
        sprites.renderingContext.arc(-20, 85, 15, 0, Math.PI * 2);
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
        sprites.renderingContext.arc(-9, -5, 6, 0, Math.PI * 2);
        sprites.renderingContext.arc(9, -5, 6, 0, Math.PI * 2);
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

                   
        // MR HANKEY'S HAT
        sprites.renderingContext.fillStyle = "rgb(" + hatR + "," + hatG + "," + hatB + ")";
        sprites.renderingContext.beginPath();
    };    
});