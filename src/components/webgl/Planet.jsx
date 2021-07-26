import React, { useRef } from 'react';

import { extend } from '@react-three/fiber';
import { shaderMaterial } from '@react-three/drei';

import glsl from 'babel-plugin-glsl/macro';
import { Color } from 'three';

const defaultColors = {
  uColor1: new Color(0x4a1f7a),
  uColor2: new Color(0x901e4b),
  uColor3: new Color(0xee1e0c),
  uColor4: new Color(0xca8f0c),
};

const defaultPercents = {
  uPercent1: 0,
  uPercent2: 0.4,
  uPercent3: 0.7,
  uPercent4: 1.2,
};

const PlanetShaderMaterial = shaderMaterial(
  { ...defaultColors, ...defaultPercents },
  glsl`
    varying vec2 vUv;

    void main() {
      vUv = uv;

      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  glsl`
    varying vec2 vUv;

    uniform vec3 uColor1;
    uniform vec3 uColor2;
    uniform vec3 uColor3;
    uniform vec3 uColor4;

    uniform float uPercent1;
    uniform float uPercent2;
    uniform float uPercent3;
    uniform float uPercent4;

    void main() {
      vec3 color = uColor1;
      color = mix(uColor1, uColor2, smoothstep(uPercent1, uPercent2, vUv.x));
      color = mix(color, uColor3, smoothstep(uPercent2, uPercent3, vUv.x));
      color = mix(color, uColor4, smoothstep(uPercent3, uPercent4, vUv.x));

      gl_FragColor = vec4(color, 1.);
    }
  `,
);

extend({ PlanetShaderMaterial });

const Planet = ({
  uniforms = { ...defaultColors, ...defaultPercents },
  ...props
}) => {
  const materialRef = useRef(null);

  return (
    <mesh {...props}>
      <circleBufferGeometry attach="geometry" args={[1, 64, 64]} />
      <planetShaderMaterial
        attach="material"
        ref={materialRef}
        {...defaultColors}
        {...defaultPercents}
        {...uniforms}
      />
    </mesh>
  );
};

export default Planet;
