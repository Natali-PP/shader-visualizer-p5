#version 300 es
precision mediump float;

// Input vertex position
in vec4 aPosition;

// Pass UV coordinates to the fragment shader
out vec2 vUv;

void main() {
    // Normalize UV coordinates from [-1, 1] to [0, 1]
    vUv = (aPosition.xy + vec2(1.0)) * 0.5;

    // Set the position for the vertex
    gl_Position = aPosition;
}
