/*
 * This JavaScript file defines a Matrix4x4 object and associated functions.
 * The object itself is returned as the result of a function, allowing us
 * to encapsulate its code and module variables.
 *
 * This module's approach is non-destructive: methods always return new
 * Matrix4x4 objects, and never modify the operands.  This is a design choice.
 *
 * This module is designed for matrix4x4s of any number of dimensions.  The
 * implementations are generalized but not optimal for certain sizes of
 * matrix4x4s.  Specific Matrix4x42D and Matrix4x43D implementations can be much
 * more compact, while sacrificing generality.
 */
var Matrix4x4 = (function () {
    // Define the constructor.
    var matrix4x4 = function () {
        this.elements = arguments.length > 0 ? [].slice.call(arguments):
        	[1,0,0,0,
        	 0,1,0,0,
        	 0,0,1,0,
        	 0,0,0,1];
    },
    
        // A private method for checking dimensions,
        // throwing an exception when different.
        checkDimensions = function (m1, m2) {
            if (m1.dimensions() !== m2.dimensions()) {
                throw "Matrix4x4s have different dimensions";
            }
        };

    // Basic methods.
    matrix4x4.prototype.dimensions = function () {
        return this.elements.length;
    };

    // Multiplication.
    matrix4x4.prototype.multiply = function (m) {
        var result = new Matrix4x4(),
            row,
            col,
            sum;

        // Dimensionality check.
        checkDimensions(this, m);

        for (row = 0; row < 4; row++) {
        	for (col = 0; col < 4; col++) {
        		sum = 0;
        		for (i = 0; i < 4; i++) {
        			sum += this.elements[row * 4 + i] * m.elements[i * 4 + col];
        		}
        		result.elements[row * 4 + col] = sum;
        	}
        }
        return result;
    };
    
    // JD: Spacing here is a little tight, particularly when you get to the
    //     more complicated expressions---they become much less readable
    //     when spaced in this manner.
    matrix4x4.translate = function (dx, dy, dz) {
    	return new Matrix4x4(
    		1,0,0,dx,
    		0,1,0,dy,
    		0,0,1,dz,
    		0,0,0,1
    		);
    };
    
    matrix4x4.scale = function (sx, sy, sz) {
    	return new Matrix4x4(
    		sx,0,0,0,
    		0,sy,0,0,
    		0,0,sz,0,
    		0,0,0,1
    		);
    };
    
    matrix4x4.rotate = function (ang, x, y, z) {
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
        
        return new Matrix4x4(
        	(x2 * (1.0-c)) + c, (xy * (1.0-c)) - zs, (xz * (1.0-c)) + ys, 0.0,
            (xy * (1.0-c)) + zs, (y2 * (1.0-c)) + c, (yz * (1.0-c)) - xs, 0.0,
            (xz * (1.0-c)) - ys, (yz * (1.0-c)) + xs, (z2 * (1.0-c)) + c, 0.0,
            0.0, 0.0, 0.0, 1.0
            );
    };
    
    matrix4x4.ortho = function (r, l, t, b, n, f) {
    	var w = r-l,
    		h = t-b,
    		d = f-n;
    	return new Matrix4x4(
    		(2/w),0,0,(-((r+l)/w)),
    		0,(2/h),0,(-((t+b)/h)),
    		0,0,(-2/d),(-((f+n)/d)),
    		0,0,0,1
    		);
    };
    
    matrix4x4.frustum = function (r, l, t, b, n, f) {
    	var w = r-l,
    		h = t-b,
    		d = f-n;
    	return new Matrix4x4(
    		((2*n)/w),0,((r+l)/w),0,
    		0,((2*n)/h),((t+b)/h),0,
    		0,0,(-(f+n)/d),(-((2*n*f)/d)),
    		0,0,-1,0
    		);
    };

    matrix4x4.look = function(px, py, pz, qx, qy, qz, upx, upy, upz) {
        var p = new Vector(px, py, pz),
            q = new Vector(qx, qy, qz),
            up = new Vector(upx, upy, upz);

        var ze = p.subtract(q).unit(),
            ye = up.subtract(up.projection(ze)).unit(),
            xe = ye.cross(ze);

        return new Matrix4x4(
            xe.x(),xe.y(),xe.z(),(-p.dot(xe)),
            ye.x(),ye.y(),ye.z(),(-p.dot(ye)),
            ze.x(),ze.y(),ze.z(),(-p.dot(ze)),
            0,0,0,1
            );
    };
    
    matrix4x4.prototype.conversion = function () {
    	var result = [];
    	for (var i = 0; i < 4; i++) {
    		result.push(this.elements[i], this.elements[i+4], this.elements[i+8], this.elements[i+12]);
    	}
    	return result;
    };
    
    matrix4x4.elements = function () {
    	return this.elements;
    };

    return matrix4x4;
})();
