#version 300 es

precision mediump float;

in vec2 vUv;

out vec4 fragColor;

uniform float radioChoice;


void main() {

    float strength;
    float strengthX = abs(vUv.x - 0.5);
    float strengthY = abs(vUv.y - 0.5);
    if(radioChoice == 1.0){
        strength = strengthX + strengthY; 
    } else if (radioChoice == 2.0){
        strength = strengthX / strengthY; 
    } else {
        strength = max(strengthX, strengthY );
    }


    fragColor = vec4(vec3(strength), 1.0);
}