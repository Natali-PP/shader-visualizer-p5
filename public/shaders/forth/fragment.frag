#version 300 es

precision mediump float;

in vec2 vUv;

out vec4 fragColor;

uniform bool choice;

void main() {
    float strength;

    if (choice) {
        strength = sin(vUv.y * 29.0);
    } else {
        strength = mod(vUv.y * 10.0, 1.0);
    }

    fragColor = vec4(vec3(strength), 1.0);
}