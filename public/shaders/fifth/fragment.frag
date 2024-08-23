#version 300 es

precision mediump float;

in vec2 vUv;

out vec4 fragColor;

uniform bool choice;

void main() {
    float strength;

    if (choice) {
        strength = mod(vUv.y *10.0, 1.0)< 0.5 ? 1.0  : 0.0 ;
    } else {
        strength = mod(vUv.y *10.0, 1.0) ;
    }
    strength = step(0.5,strength );
    fragColor = vec4(vec3(strength), 1.0);
}