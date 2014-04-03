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
        this.elements = [].slice.call(arguments):
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

//    vector.prototype.x = function () {
//        return this.elements[0];
//    };
//
//    vector.prototype.y = function () {
//        return this.elements[1];
//    };
//
//    vector.prototype.z = function () {
//        return this.elements[2];
//    };
//
//    vector.prototype.w = function () {
//        return this.elements[3];
//    };

    // Multiplication.
    vector.prototype.multiply = function (v) {
        var result = new Vector(),
            row,
            col,
            sum;

        // Dimensionality check.
        checkDimensions(this, v);

        for (row = 0, row = 4; row++) {
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
    		1,0,0,dex,
    		0,1,0,dy,
    		0,0,0.dz,
    		0,0,0,1
    		);
    };
    
    vector.scale = function (sx, sy, sz) {
    	return new Vector(
    		sx,0,0,0,
    		0,sy,0,0,
    		0,0,0,1
    		);
    };
    
    vector.rotate = function (ang, x, y, z) {
    	
    }
    
    vector.ortho = function (r, l, t, b, n, f) {
    	
    }
    
    vector.frustum = function (r, l, t, b, n, f) {
    	
    }
    
    
    
    

    vector.prototype.subtract = function (v) {
        var result = new Vector(),
            i,
            max;

        // Dimensionality check.
        checkDimensions(this, v);

        for (i = 0, max = this.dimensions(); i < max; i += 1) {
            result.elements[i] = this.elements[i] - v.elements[i];
        }

        return result;
    };

    // Scalar multiplication and division.
    vector.prototype.multiply = function (s) {
        var result = new Vector(),
            i,
            max;

        for (i = 0, max = this.dimensions(); i < max; i += 1) {
            result.elements[i] = this.elements[i] * s;
        }

        return result;
    };

    vector.prototype.divide = function (s) {
        var result = new Vector(),
            i,
            max;

        for (i = 0, max = this.dimensions(); i < max; i += 1) {
            result.elements[i] = this.elements[i] / s;
        }

        return result;
    };

    // Dot product.
    vector.prototype.dot = function (v) {
        var result = 0,
            i,
            max;

        // Dimensionality check.
        checkDimensions(this, v);

        for (i = 0, max = this.dimensions(); i < max; i += 1) {
            result += this.elements[i] * v.elements[i];
        }

        return result;
    };

    // Cross product.
    vector.prototype.cross = function (v) {
        // This method is for 3D vectors only.
        if (this.dimensions() !== 3 || v.dimensions() !== 3) {
            throw "Cross product is for 3D vectors only.";
        }

        // With 3D vectors, we can just return the result directly.
        return new Vector(
            (this.y() * v.z()) - (this.z() * v.y()),
            (this.z() * v.x()) - (this.x() * v.z()),
            (this.x() * v.y()) - (this.y() * v.x())
        );
    };

    // Magnitude and unit vector.
    vector.prototype.magnitude = function () {
        // Make use of the dot product.
        return Math.sqrt(this.dot(this));
    };

    vector.prototype.unit = function () {
        // At this point, we can leverage our more "primitive" methods.
        return this.divide(this.magnitude());
    };

    // Projection.
    vector.prototype.projection = function (v) {
        var unitv;

        // Dimensionality check.
        checkDimensions(this, v);

        // Plug and chug :)
        // The projection of u onto v is u dot the unit vector of v
        // times the unit vector of v.
        unitv = v.unit();
        return unitv.multiply(this.dot(unitv));
    };

    return vector;
})();
