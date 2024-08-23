#version 300 es

precision mediump float;

in vec2 vUv;

out vec4 fragColor;

void main() {
    float strength = vUv.x;
    fragColor = vec4(vec3(strength), 1.0);
}