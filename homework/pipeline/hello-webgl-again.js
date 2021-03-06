(function (canvas) {
    var gl,
        // This variable stores 3D model information.
        objectsToDraw,
        // The shader program to use.
        shaderProgram,
        // Utility variable indicating whether some fatal has occurred.
        abort = false,
        // Important state variables.
        currentRotation = 0.0,
        currentInterval,
        projectionMatrix,
        rotationMatrix,
        vertexPosition,
        vertexColor,

        // Lighting variables
        normalVector,
        lightPosition,
        lightDiffuse,

        // An individual "draw object" function.
        drawObject,

        // The big "draw scene" function.
        drawScene,

        // Reusable loop variables.
        i,
        maxi,
        j,
        maxj,

    // Grab the WebGL rendering context.
    gl = GLSLUtilities.getGL(canvas);
    if (!gl) {
        alert("No WebGL context found...sorry.");
        return;
    }

    // Set up settings that will not change.  This is not "canned" into a
    // utility function because these settings really can vary from program
    // to program.
    gl.enable(gl.DEPTH_TEST);
    gl.clearColor(0.0, 0.0, 0.0, 0.0);
    gl.viewport(0, 0, canvas.width, canvas.height);

    // Build the objects to display.
    // JD: In the final version of your scene, do make sure that you exercise the features
    //     in the code base that we have built: instance transforms, objects with children,
    //     variety of shapes, etc.
    objectsToDraw = [
        {
            color: { r: 0.0, g: 0.5, b: 0.0 },
            //vertices: Shapes.toRawTriangleArray(Shapes.cube2()),
            //vertices: Shapes.toRawTriangleArray(Shapes.pyramid()),

            // JD: Some inefficiency here---you're generating the same sphere twice.
            vertices: Shapes.toRawTriangleArray(Shapes.sphere(2, 32, 32)),
            mode: gl.TRIANGLES,
            normals: Shapes.toVertexNormalArray(Shapes.sphere(2, 32, 32))
        }
    ];

    // Pass the vertices to WebGL.
    for (i = 0, maxi = objectsToDraw.length; i < maxi; i += 1) {
        objectsToDraw[i].buffer = GLSLUtilities.initVertexBuffer(gl,
                objectsToDraw[i].vertices);

        if (!objectsToDraw[i].colors) {
            // If we have a single color, we expand that into an array
            // of the same color over and over.
            objectsToDraw[i].colors = [];
            for (j = 0, maxj = objectsToDraw[i].vertices.length / 3;
                    j < maxj; j += 1) {
                objectsToDraw[i].colors = objectsToDraw[i].colors.concat(
                    objectsToDraw[i].color.r,
                    objectsToDraw[i].color.g,
                    objectsToDraw[i].color.b
                );
            }
        }
        objectsToDraw[i].colorBuffer = GLSLUtilities.initVertexBuffer(gl, objectsToDraw[i].colors);    
        objectsToDraw[i].normalBuffer = GLSLUtilities.initVertexBuffer(gl, objectsToDraw[i].normals);
    }

    // Initialize the shaders.
    shaderProgram = GLSLUtilities.initSimpleShaderProgram(
        gl,
        $("#vertex-shader").text(),
        $("#fragment-shader").text(),

        // Very cursory error-checking here...
        function (shader) {
            abort = true;
            alert("Shader problem: " + gl.getShaderInfoLog(shader));
        },

        // Another simplistic error check: we don't even access the faulty
        // shader program.
        function (shaderProgram) {
            abort = true;
            alert("Could not link shaders...sorry.");
        }
    );

    // If the abort variable is true here, we can't continue.
    if (abort) {
        alert("Fatal errors encountered; we cannot continue.");
        return;
    }

    // All done --- tell WebGL to use the shader program from now on.
    gl.useProgram(shaderProgram);

    // Hold on to the important variables within the shaders.
    vertexPosition = gl.getAttribLocation(shaderProgram, "vertexPosition");
    gl.enableVertexAttribArray(vertexPosition);
    vertexColor = gl.getAttribLocation(shaderProgram, "vertexColor");
    gl.enableVertexAttribArray(vertexColor);
    normalVector = gl.getAttribLocation(shaderProgram, "normalVector");
    gl.enableVertexAttribArray(normalVector);
    rotationMatrix = gl.getUniformLocation(shaderProgram, "rotationMatrix");
    projectionMatrix = gl.getUniformLocation(shaderProgram, "projectionMatrix");
    var translationMatrix = gl.getUniformLocation(shaderProgram, "translationMatrix");
    var scaleMatrix = gl.getUniformLocation(shaderProgram, "scaleMatrix");
    var cameraMatrix = gl.getUniformLocation(shaderProgram, "cameraMatrix");

    // Lighting matrices initialized
    lightPosition = gl.getUniformLocation(shaderProgram, "lightPosition");
    lightDiffuse = gl.getUniformLocation(shaderProgram, "lightDiffuse");

    // Initialize projection matrix
    gl.uniformMatrix4fv(projectionMatrix, 
        gl.FALSE,
        // JD: Note, the order of your arguments is r, l, t, b, n, f!
        new Float32Array(Matrix4x4.frustum(-2, 2, 2, -2, 15, 5000).conversion())
    );

    // Initialize scale matrix
    gl.uniformMatrix4fv(scaleMatrix, 
        gl.FALSE, 
        new Float32Array(Matrix4x4.scale(1, 1, 1).conversion())
    );

    // Initialize translation matrix
    gl.uniformMatrix4fv(translationMatrix, 
        gl.FALSE, 
        new Float32Array(Matrix4x4.translate(0, 0, 0).conversion())
    );

    // Initialize camera matrix
    gl.uniformMatrix4fv(cameraMatrix,
        gl.FALSE,
        new Float32Array(Matrix4x4.look(0, 0, 20, 0, 0, 0, 0, 1, 0).conversion())
    );

    /*
     * Displays an individual object.
     */
    drawObject = function (object) {
        // Set the varying colors.
        gl.bindBuffer(gl.ARRAY_BUFFER, object.colorBuffer);
        gl.vertexAttribPointer(vertexColor, 3, gl.FLOAT, false, 0, 0);

        // Build our instance transformation matrix.
        var instanceMatrix = new Matrix4x4();

        // Translate, scale, and rotate
        instanceMatrix = instanceMatrix.multiply(
            Matrix4x4.translate(
                object.tx || 0, object.ty || 0, object.tz || 0
            ).multiply(
                Matrix4x4.scale(
                    object.sx || 1, object.sy || 1, object.sz || 1
                ).multiply(
                    Matrix4x4.rotate(
                        object.angle || 0, object.rx || 1, object.ry || 1, object.rz || 1
                    )
                )
            )
        );

        // Set it.
        gl.uniformMatrix4fv(gl.getUniformLocation(shaderProgram, "instanceMatrix"),
            gl.FALSE,
            new Float32Array(instanceMatrix.conversion())
        );

        // Set the varying normal vectors.
        gl.bindBuffer(gl.ARRAY_BUFFER, object.normalBuffer);
        gl.vertexAttribPointer(normalVector, 3, gl.FLOAT, false, 0, 0);

        // Set the varying vertex coordinates.
        gl.bindBuffer(gl.ARRAY_BUFFER, object.buffer);
        gl.vertexAttribPointer(vertexPosition, 3, gl.FLOAT, false, 0, 0);
        gl.drawArrays(object.mode, 0, object.vertices.length / 3);
        
        // Recrusively draw subobjects/children of objects, if they exist
        // JD: Decent start but something more is missing.
         if (object.subobjects && object.subobjects.length > 0) {
             for (var i = 0; i < subobjects.length; i++) {
                 drawObject(subobjects[i]);
             }
         }
    };

    /*
     * Displays the scene.
     */
    drawScene = function () {
        // Clear the display.
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

        // Set up the rotation matrix.
        //gl.uniformMatrix4fv(rotationMatrix, gl.FALSE, new Float32Array(rotate(currentRotation, 1, 1, 0)));


        // Display the objects.
        for (i = 0, maxi = objectsToDraw.length; i < maxi; i += 1) {
            drawObject(objectsToDraw[i]);
        }

        // All done.
        gl.flush();
    };

    // Set up our one light source and color.  Note the uniform3fv function.
    gl.uniform3fv(lightPosition, [7.0, 10.0, 10.0]);
    gl.uniform3fv(lightDiffuse, [1.0, 2.0, 1.0]); // JD: Light components range from 0.0-1.0.
    gl.uniformMatrix4fv(rotationMatrix, gl.FALSE, new Float32Array((new Matrix4x4()).conversion()));

    // Draw the initial scene.
    drawScene();

    // JD: Bummer that, with a sphere, the rotation is tricky to perceive.
     $(canvas).mousemove(function (event) {
        var rotationY = Matrix4x4.rotate(event.pageX, 1, 0, 1);
            rotationX = Matrix4x4.rotate(event.pageY, 0, 1, 0);
            finalRotation = rotationY.multiply(rotationX);

        gl.uniformMatrix4fv(rotationMatrix, gl.FALSE, 
                            new Float32Array(finalRotation.conversion()));
        drawScene();
    });

}(document.getElementById("hello-webgl")));
