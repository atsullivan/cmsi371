/*
 * This JavaScript file defines a Vector object and associated functions.
 * The object itself is returned as the result of a function, allowing us
 * to encapsulate its code and module variables.
 *
 * This module's approach is non-destructive: methods always return new
 * Vector objects, and never modify the operands.  This is a design choice.
 *
 * This module is designed for vectors of any number of dimensions.  The
 * implementations are generalized but not optimal for certain sizes of
 * vectors.  Specific Vector2D and Vector3D implementations can be much
 * more compact, while sacrificing generality.
 */
var Vector = (function () {
    // Define the constructor.
    var vector = function () {
        this.elements = arguments.length > 0 ? [].slice.call(arguments):
        	[1,0,0,0,
        	 0,1,0,0,
        	 0,0,1,0,
        	 0,0,0,1];
    },
    
        // A private method for checking dimensions,
        // throwing an exception when different.
        checkDimensions = function (v1, v2) {
            if (v1.dimensions() !== v2.dimensions()) {
                throw "Vectors have different dimensions";
            }
        };

    // Basic methods.
    vector.prototype.dimensions = function () {
        return this.elements.length;
    };

    // Multiplication.
    vector.prototype.multiply = function (v) {
        var result = new Vector(),
            row,
            col,
            sum;

        // Dimensionality check.
        checkDimensions(this, v);

        for (row = 0; row < 4; row++) {
        	for (col = 0; col < 4; col++) {
        		sum = 0;
        		for (i = 0; i < 4; i++) {
        			sum += this.elements[row * 4 + i] * v.elements[i * 4 + col];
        		}
        		result.elements[row * 4 + col] = sum;
        	}
        }
        return result;
    };
    
    
    vector.translate = function (dx, dy, dz) {
    	return new Vector(
    		1,0,0,dx,
    		0,1,0,dy,
    		0,0,0,dz,
    		0,0,0,1
    		);
    };
    
    vector.scale = function (sx, sy, sz) {
    	return new Vector(
    		sx,0,0,0,
    		0,sy,0,0,
    		0,0,sz,0,
    		0,0,0,1
    		);
    };
    
    vector.rotate = function (ang, x, y, z) {
    	var axis = Math.sqrt((x*x)+(y*y)+(z*z)),
    		s = Math.sin(ang*Math.PI/180.0),
    		c = Math.cos(ang*Math.PI/180.0),
    		x2,y2,z2,
    		xy,yz,xz,
    		xs,ys,zs;
    	x /= axis;
    	y /= axis;
    	z /= axis;
    	x2 = x*x;
    	y2 = y*y;
        z2 = z*z;
        xy = x*y;
        yz = y*z;
        xz = x*z;
        xs = x*s;
        ys = y*s;
        zs = z*s;
        
        return new Vector(
        	(x2 * (1.0-c)) + c, (xy * (1.0-c)) - zs, (xz * (1.0-c)) + ys, 0.0,
            (xy * (1.0-c)) + zs, (y2 * (1.0-c)) + c, (yz * (1.0-c)) - xs, 0.0,
            (xz * (1.0-c)) - ys, (yz * (1.0-c)) + xs, (z2 * (1.0-c)) + c, 0.0,
            0.0, 0.0, 0.0, 1.0
            );
    };
    
    vector.ortho = function (r, l, t, b, n, f) {
    	var w = r-l,
    		h = t-b,
    		d = f-n;
    	return new Vector(
    		(2/w),0,0,(-((r+l)/w)),
    		0,(2/h),0,(-((t+b)/h)),
    		0,0,(-2/d),(-((f+n)/d)),
    		0,0,0,1
    		);
    };
    
    vector.frustum = function (r, l, t, b, n, f) {
    	var w = r-l,
    		h = t-b,
    		d = f-n;
    	return new Vector(
    		((2*n)/w),0,((r+l)/w),0,
    		0,((2*n)/h),((t+b)/h),0,
    		0,0,((f+n)/d),(-((2*n*f)/d)),
    		0,0,1,0
    		);
    };
    
    vector.prototype.conversion = function () {
    	var result = [];
    	for (var i = 0; i < 4; i++) {
    		result.push(this.elements[i], this.elements[i+4], this.elements[i+8], this.elements[i+12]);
    	}
    	return result;
    };
    
    vector.elements = function () {
    	return this.elements;
    };

    return vector;
})();