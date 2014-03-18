/*
 * This module defines/generates vertex arrays for certain predefined shapes.
 * The "shapes" are returned as indexed vertices, with utility functions for
 * converting these into "raw" coordinate arrays.
 */
var Shapes = {
    /*
     * Returns the vertices for a small icosahedron.
     */
    
    //SPHERE
    sphere: function (radius, latitudeBelts, longitudeBelts){
    	var vertices = [],
            indices = [];

        for (var i = 0; i < latitudeBelts + 1; i += 1) {
            var theta = (i * Math.PI) / latitudeBelts;
            var sinTheta = Math.sin(theta);
            var cosTheta = Math.cos(theta);

            for (var j = 0; j < longitudeBelts + 1; j += 1) {
                var phi = (j * 2 * Math.PI) / longitudeBelts;
                var x = radius * Math.cos(phi) * sinTheta;
                var y = radius * cosTheta;
                var z = radius * Math.sin(phi) * sinTheta;

                vertices.push([x, y, z]);
            }
        }

        for (var i = 0; i < latitudeBelts + 1; i += 1) {

            for (var j = 0; j < longitudeBelts + 1; j += 1) {
                var top = (i * (longitudeBelts + 1)) + j;
                var bottom = top + longitudeBelts + 1;

                indices.push([top, bottom, top + 1]);
                indices.push([bottom, bottom + 1, top + 1]);
            }
        }


        return {
            vertices: vertices,
            indices: indices
        };

    },
    
    //FIRST CUBE
    cube: function () {
        var vertices = [],
            indices = [];

        // First square
        vertices.push([0.0, 0.3, 0.0]);
        
        for (var theta = 0; theta < Math.PI * 2; theta += Math.PI / 2) {
            vertices.push([0.5 * Math.cos(theta), 0.3, 0.5 * Math.sin(theta)]);
        }

        for (var i = 1; i <= 4; i++) {
            indices.push([0, i, (i === 4) ? 1 : (i + 1)]);
        }

        // Second square
        vertices.push([0.0, -0.3, 0.0]);
        
        for (var theta = 0; theta < Math.PI * 2; theta += Math.PI / 2) {
            vertices.push([0.5 * Math.cos(theta), -0.3, 0.5 * Math.sin(theta)]);
        }

        for (var i = 6; i <= 9; i++) {
            indices.push([5, i, (i === 9) ? 6 : (i + 1)]);
        }

        // Connect top and bottom square
        indices.push(

            [2, 7, 8],
            [2, 8, 3],
            [3, 8, 4],
            [8, 9, 4],
            [2, 1, 7],
            [1, 6, 7],
            [1, 4, 9],
            [1, 9, 6]

        );

        return {
            vertices: vertices,
            indices: indices
        }

    },
    
    //PYRAMID
	pyramid: function () {
		var vertices = [],
            indices = [],
            i = 0;
		vertices.push(
	        [0.0,  0.5,  0.0],
	        [-0.5, -0.5,  0.5],
	        [0.5, -0.5,  0.5],
	        [0.0,  0.5,  0.0],
	        [0.5, -0.5,  0.5],
	        [0.5, -0.5, -0.5],
	        [0.0,  0.5,  0.0],
	        [0.5, -0.5, -0.5],
	        [-0.5, -0.5, -0.5],
	        [ 0.0,  0.5,  0.0],
	        [-0.5, -0.5, -0.5],
	        [-0.5, -0.5,  0.5],
		    [-0.5, -0.5, -0.5],
		    [0.5, -0.5, -0.5],
		    [0.5, -0.5, 0.5],
		    [-0.5, -0.5, 0.5]
		);
		
		while (i < 12) {		    
		    indices.push([i, i+1, i+2])
		    i = i+3;
		  }
		
		indices.push([12, 13, 14]);
		indices.push([12, 14, 15]);		
		return {
            vertices: vertices,
            indices: indices
        }
	},  

	//SECOND CUBE
	cube2: function () {
		return {
			vertices: [
			    // Front face
			    [-0.5, -0.5,  0.5],
			    [0.5, -0.5,  0.5],
			    [0.5,  0.5,  0.5],
			    [-0.5,  0.5,  0.5],
			    
			    // Back face
			    [-0.5, -0.5, -0.5],
			    [-0.5,  0.5, -0.5],
			    [0.5,  0.5, -0.5],
			    [0.5, -0.5, -0.5],
			    
			    // Top face
			    [-0.5,  0.5, -0.5],
			    [-0.5,  0.5,  0.5],
			    [0.5,  0.5,  0.5],
			    [0.5,  0.5, -0.5],
			    
			    // Bottom face
			    [-0.5, -0.5, -0.5],
			    [0.5, -0.5, -0.5],
			    [0.5, -0.5,  0.5],
			    [-0.5, -0.5,  0.5],
			    
			    // Right face
			    [0.5, -0.5, -0.5],
			    [0.5,  0.5, -0.5],
			    [0.5,  0.5,  0.5],
			    [0.5, -0.5,  0.5],
			    
			    // Left face
			   [-0.5, -0.5, -0.5],
			   [-0.5, -0.5,  0.5],
			   [-0.5,  0.5,  0.5],
			   [-0.5,  0.5, -0.5]
			],
		
			indices: [
			  	[0,  1,  2],      [0,  2,  3],    // front
			    [4,  5,  6],      [4,  6,  7],    // back
			    [8,  9,  10],     [8,  10, 11],   // top
			    [12, 13, 14],     [12, 14, 15],   // bottom
			    [16, 17, 18],     [16, 18, 19],   // right
			    [20, 21, 22],     [20, 22, 23]    // left
			  
			  ]		
		};
	},  

	
    toRawTriangleArray: function (indexedVertices) {
        var result = [],
            i,
            j,
            maxi,
            maxj;

        for (i = 0, maxi = indexedVertices.indices.length; i < maxi; i += 1) {
            for (j = 0, maxj = indexedVertices.indices[i].length; j < maxj; j += 1) {
                result = result.concat(
                    indexedVertices.vertices[
                        indexedVertices.indices[i][j]
                    ]
                );
            }
        }

        return result;
    },
    
    /*
     * Utility function for turning indexed vertices into a "raw" coordinate array
     * arranged as triangles.
     */
    toRawTriangleArray: function (indexedVertices) {
        var result = [],
            i,
            j,
            maxi,
            maxj;

        for (i = 0, maxi = indexedVertices.indices.length; i < maxi; i += 1) {
            for (j = 0, maxj = indexedVertices.indices[i].length; j < maxj; j += 1) {
                result = result.concat(
                    indexedVertices.vertices[
                        indexedVertices.indices[i][j]
                    ]
                );
            }
        }

        return result;
    },

    /*
     * Utility function for turning indexed vertices into a "raw" coordinate array
     * arranged as line segments.
     */
    toRawLineArray: function (indexedVertices) {
        var result = [],
            i,
            j,
            maxi,
            maxj;

        for (i = 0, maxi = indexedVertices.indices.length; i < maxi; i += 1) {
            for (j = 0, maxj = indexedVertices.indices[i].length; j < maxj; j += 1) {
                result = result.concat(
                    indexedVertices.vertices[
                        indexedVertices.indices[i][j]
                    ],

                    indexedVertices.vertices[
                        indexedVertices.indices[i][(j + 1) % maxj]
                    ]
                );
            }
        }

        return result;
    }

};
