import React, { useRef } from 'react';

import * as THREE from 'three';
import { extend, useFrame } from '@react-three/fiber';
import { shaderMaterial } from '@react-three/drei';
import glsl from 'babel-plugin-glsl/macro';

const WaveShaderMaterial = shaderMaterial(
  // Uniforms
  {
    uColor: new THREE.Color(0.0, 0.0, 0.0),
    uTexture: new THREE.Texture(),
    uTime: 0,
  },
  // Vertex
  glsl`
    precision mediump float;

    varying vec2 vUv;

    void main() {
      vUv = uv;

      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.);
    }
  `,
  // Fragment
  glsl`
    precision mediump float;

    uniform float uTime;

    varying vec2 vUv;

    void main() {
      gl_FragColor = vec4(vUv, 1., 1.);
    } 
  `,
);

extend({ WaveShaderMaterial });

const Shader = () => {
  const ref = useRef(null);

  useFrame(({ clock }) => (ref.current.uTime = clock.getElapsedTime()));

  return (
    <mesh>
      <planeBufferGeometry args={[0.4, 0.6, 16, 16]} />
      <waveShaderMaterial ref={ref} uColor="hotpink" />
    </mesh>
  );
};

export default Shader;
