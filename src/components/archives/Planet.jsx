import React, { useRef } from 'react';

import { extend, useThree } from '@react-three/fiber';
import { shaderMaterial } from '@react-three/drei';

import glsl from 'babel-plugin-glsl/macro';
import { Color, Vector2 } from 'three';

const defaultColors = {
  uColor1: new Color(0x4a1f7a),
  uColor2: new Color(0xcd5146),
  uColor3: new Color(0xcd5146),
  uColor4: new Color(0xffc649),
};

const defaultPercents = {
  uPercent1: 0,
  uPercent2: 0.3,
  uPercent3: 0.6,
  uPercent4: 1,
};

const PlanetShaderMaterial = shaderMaterial(
  { uResolution: new Vector2(), ...defaultColors, ...defaultPercents },
  glsl`
    void main() {
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  glsl`
    uniform vec2 uResolution;

    uniform vec3 uColor1;
    uniform vec3 uColor2;
    uniform vec3 uColor3;
    uniform vec3 uColor4;

    uniform float uPercent1;
    uniform float uPercent2;
    uniform float uPercent3;
    uniform float uPercent4;

    void main() {
      vec2 st = gl_FragCoord.xy / uResolution;

      vec3 color = uColor1;
      color = mix(uColor1, uColor2, smoothstep(uPercent1, uPercent2, st.x));
      color = mix(color, uColor3, smoothstep(uPercent2, uPercent3, st.x));
      color = mix(color, uColor4, smoothstep(uPercent2, uPercent4, st.x));

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
  const {
    size: { width, height },
  } = useThree();

  return (
    <mesh {...props}>
      <sphereBufferGeometry args={[1, 32, 32]} />
      <planetShaderMaterial
        ref={materialRef}
        uResolution={new Vector2(width, height)}
        {...defaultColors}
        {...defaultPercents}
        {...uniforms}
      />
    </mesh>
  );
};

export default Planet;
