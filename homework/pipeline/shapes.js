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

    // JD: I was wondering why the indentation in your pyramid and cube2
    //     functions suddenly started having inconsistencies, and then I
    //     realized...TAAAAAAAAAAABS!!!
    //
    //     Please make your editor use spaces only.

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
    },


    /*
     * Utility function for computing normal vectors based on indexed vertices.
     * The secret: take the cross product of each triangle.  Note that vertex order
     * now matters---the resulting normal faces out from the side of the triangle
     * that "sees" the vertices listed counterclockwise.
     *
     * The vector computations involved here mean that the Vector module must be
     * loaded up for this function to work.
     */
    toNormalArray: function (indexedVertices) {
        var result = [],
            i,
            j,
            maxi,
            maxj,
            p0,
            p1,
            p2,
            v0,
            v1,
            v2,
            normal;

        // For each face...
        for (i = 0, maxi = indexedVertices.indices.length; i < maxi; i += 1) {
            // We form vectors from the first and second then second and third vertices.
            p0 = indexedVertices.vertices[indexedVertices.indices[i][0]];
            p1 = indexedVertices.vertices[indexedVertices.indices[i][1]];
            p2 = indexedVertices.vertices[indexedVertices.indices[i][2]];

            // Technically, the first value is not a vector, but v can stand for vertex
            // anyway, so...
            v0 = new Vector(p0[0], p0[1], p0[2]);
            v1 = new Vector(p1[0], p1[1], p1[2]).subtract(v0);
            v2 = new Vector(p2[0], p2[1], p2[2]).subtract(v0);
            normal = v1.cross(v2).unit();

            // We then use this same normal for every vertex in this face.
            for (j = 0, maxj = indexedVertices.indices[i].length; j < maxj; j += 1) {
                result = result.concat(
                    [ normal.x(), normal.y(), normal.z() ]
                );
            }
        }

        return result;
    },










/*
     * Another utility function for computing normals, this time just converting
     * every vertex into its unit vector version.  This works mainly for objects
     * that are centered around the origin.
     */
    toVertexNormalArray: function (indexedVertices) {
        var result = [],
            i,
            j,
            maxi,
            maxj,
            p,
            normal;

        // For each face...
        for (i = 0, maxi = indexedVertices.indices.length; i < maxi; i += 1) {
            // For each vertex in that face...
            for (j = 0, maxj = indexedVertices.indices[i].length; j < maxj; j += 1) {
                p = indexedVertices.vertices[indexedVertices.indices[0][2]];
                normal = new Vector(p[0], p[1], p[2]).unit();
                result = result.concat(
                    [ normal.x(), normal.y(), normal.z() ]
                );
            }
        }

        return result;
    }


};
