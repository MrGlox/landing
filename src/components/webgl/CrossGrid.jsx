import React, { useLayoutEffect, useRef } from 'react';

import * as THREE from 'three';
import { extend } from '@react-three/fiber';
import { shaderMaterial } from '@react-three/drei';
import glsl from 'babel-plugin-glsl/macro';

const CrossShaderMaterial = shaderMaterial(
  // Uniforms
  {
    uAlpha: 0.4,
  },
  // Vertex
  glsl`
    precision mediump float;

    uniform float uTime;
    varying vec2 vUv;

    void main() {
      vUv = uv;

      vec3 transformed = vec3(position);
      vec4 mvPosition = vec4(transformed, 1.0);

      #ifdef USE_INSTANCING
      mvPosition = instanceMatrix * mvPosition;
      #endif

      vec4 modelViewPosition = modelViewMatrix * mvPosition;
      gl_Position = projectionMatrix * modelViewPosition;
    }
  `,
  // Fragment
  glsl`
    precision mediump float;

    uniform float uAlpha;
    varying vec2 vUv;

    float box(in vec2 _st, in vec2 _size){
      _size = vec2(0.5) - _size * 0.5;

      vec2 uv = smoothstep(_size,
        _size + vec2(0.001),
        _st);

      uv *= smoothstep(_size,
        _size + vec2(0.001),
        vec2(1.0) - _st);

      return uv.x * uv.y;
    }
    
    float cross(in vec2 _st, float _size, float _thin){
      return  box(_st, vec2(_size, _size / _thin)) +
        box(_st, vec2(_size / _thin, _size));
    }

    void main() {
      vec4 color = vec4(0.0);
      color += vec4(cross(vUv, 1., 4.5));

      // FOR GRID VALUE
      // color += vec4(cross(vUv, 1.2, 100.));

      gl_FragColor = vec4(color.rgb, step(.5, color.w) * uAlpha);
    } 
  `,
);

extend({ CrossShaderMaterial });

const Shader = () => {
  const meshRef = useRef(null);

  // useFrame(({ clock }) => {});

  useLayoutEffect(() => {
    const transform = new THREE.Matrix4();

    for (let i = 0; i < 320; ++i) {
      const x = (i % 32) - 16.5;
      const y = Math.floor(i / 32) - 4.5;

      transform.setPosition(x, y, 0);
      meshRef.current.setMatrixAt(i, transform);
    }
  }, []);

  return (
    <instancedMesh ref={meshRef} args={[null, null, 320]}>
      <planeBufferGeometry attach="geometry" args={[1, 1, 1, 1]} />
      <crossShaderMaterial attach="material" transparent />
    </instancedMesh>
  );
};

export default Shader;
