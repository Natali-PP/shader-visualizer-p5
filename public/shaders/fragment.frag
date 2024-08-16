#version 300 es
precision mediump float;

uniform vec2 iResolution;
uniform float iTime;
uniform float angleScale;

in vec2 vUv;
out vec4 fragColor;

#define col(i) vec4( ( .6 + .6 * cos(l-iTime+float(i) +vec3(0,23,21) ) )*C[i], 1 ) // + border
#define blend(i) O += (1.-O.a) * col(i) * C[i]

void main() {
    vec4 O = vec4(0.0);
    
    // Normalize UV coordinates to the range [-1, 1]
    vec2 U = vUv * 2.0 - 1.0;
    
    // Adjust for aspect ratio
    U.x *= iResolution.x / iResolution.y;

    float a = atan(U.y, U.x);
    float l = length(U);
    l = 2.0 * l;
    a = angleScale * a / 6.28; // Use the angleScale uniform

    vec4 s = l - vec4(0, 0, .5, .5),
         A = fract(a - vec4(.25, .75, 0, .5)) - .5, 
         L = fract(s - iTime) - .5,
         r = sqrt(A * A * abs(s) + L * L),
         C = smoothstep(.1, 0., r - .3);

    int c = 2 * int(L.z > L.x);
    ivec2 T = ivec2(A[1 + c] > A[0 + c], A[1 + 2 - c] > A[0 + 2 - c]);

    blend(T.x + c);
    blend(1 - T.x + c);
    blend(T.y + 2 - c);
    blend(1 - T.y + 2 - c);

    fragColor = O;
}
