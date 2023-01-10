function initBuffers(gl) {
    const positionBuffer = initPositionBuffer(gl);
    const colorBuffer = initColorBuffer(gl);
    return {
        position: positionBuffer,
        color: colorBuffer
    };
}

function initPositionBuffer(gl) {
    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    const positions = [0.0, 2.0,
                      -2.0, 2.0,
                       0.0, 0.0,
                      -0.1, 0.0,
                      -2.1, 2.0,
                      -2.1, 0.0
                      ];
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);
    return positionBuffer;
}

function initColorBuffer(gl) {
    const colorBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
    const colors = [1.0, 0.0,
                    0.0, 1.0,
                    1.0, 0.0,
                    0.0, 1.0,
                    1.0, 0.0,
                    0.0, 1.0,
                    1.0, 0.0,
                    0.0, 1.0,
                    1.0, 0.0,
                    0.0, 1.0,
                    1.0, 0.0,
                    0.0, 1.0
                    ];
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);
    return colorBuffer;
}

export { initBuffers };