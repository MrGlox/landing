import React, { useRef } from 'react';

import { extend } from '@react-three/fiber';
import { shaderMaterial } from '@react-three/drei';

import glsl from 'babel-plugin-glsl/macro';
import { Color, Vector2 } from 'three';

const defaultColors = {
  uColor1: new Color(0x4a1f7a),
  uColor2: new Color(0x8d3860),
  uColor3: new Color(0xcd5146),
  uColor4: new Color(0xffc649),
};

const defaultPercents = {
  uAlpha: 0.8,
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

const BlurShaderMaterial = shaderMaterial(
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
    uniform vec2 uSize;
    uniform float uAlpha;

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

      vec2 st = (vUv - .5) * 2.;
      float dispersion = length(st) * 1.;
      dispersion = 1. - dispersion;
      dispersion = dispersion * dispersion;

      gl_FragColor = vec4(color, dispersion * uAlpha);
    }
  `,
);

extend({ BlurShaderMaterial, PlanetShaderMaterial });

const Planet = ({
  alpha = 0.4,
  glowSize = 3.2,
  uniforms = { ...defaultColors, ...defaultPercents },
  ...props
}) => {
  const materialRef = useRef(null);
  const blurRef = useRef(null);

  return (
    <group {...props}>
      <mesh position={[0, 0, -0.1]}>
        <circleBufferGeometry attach="geometry" args={[glowSize, 64, 64]} />
        <blurShaderMaterial
          transparent
          attach="material"
          ref={blurRef}
          {...defaultColors}
          {...defaultPercents}
          {...uniforms}
          uAlpha={alpha}
          uSize={new Vector2(64, 64)}
        />
      </mesh>
      <mesh>
        <circleBufferGeometry attach="geometry" args={[1, 64, 64]} />
        <planetShaderMaterial
          attach="material"
          ref={materialRef}
          {...defaultColors}
          {...defaultPercents}
          {...uniforms}
        />
      </mesh>
    </group>
  );
};

export default Planet;
