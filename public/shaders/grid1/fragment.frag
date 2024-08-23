#version 300 es

precision mediump float;

in vec2 vUv;

out vec4 fragColor;

uniform float valueX;
uniform float valueY;

void main() {

 float strengthX = mod(vUv.x *10.0, 1.0) ;
 float strengthY = mod(vUv.y *10.0, 1.0) ;

 float barY = step(valueX,strengthX ) - step(valueX,strengthY );
 float barX = step(valueY,strengthX ) - step(valueY,strengthY );

 float strength = barX  / barY; 
 
    fragColor = vec4(vec3(strength), 1.0);
}