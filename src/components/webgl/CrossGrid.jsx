import React, { useLayoutEffect, useMemo, useRef } from 'react';
import glsl from 'babel-plugin-glsl/macro';

import { extend, useFrame } from '@react-three/fiber';
import { shaderMaterial } from '@react-three/drei';

import { useControls } from 'leva';
import { Matrix4, Vector3 } from 'three';

import { roundedSquareWave } from 'utils';

const uniforms = {
  uAlpha: 0.2,
  uSize: 1,
  uThinning: 6.2,
};

const CrossShaderMaterial = shaderMaterial(
  // Uniforms
  uniforms,
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
    uniform float uSize;
    uniform float uThinning;

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
    
    float cross(in vec2 _st, float _size, float _thinning){
      return  box(_st, vec2(_size, _size / _thinning)) +
        box(_st, vec2(_size / _thinning, _size));
    }

    void main() {
      vec4 color = vec4(0.0);
      color += vec4(cross(vUv, uSize, uThinning));

      // FOR GRID VALUE
      // color += vec4(cross(vUv, 1.2, 100.));

      gl_FragColor = vec4(color.rgb, step(.5, color.w) * uAlpha);
    } 
  `,
);

extend({ CrossShaderMaterial });

const CrossGrid = ({ ...props }) => {
  const meshRef = useRef(null);
  const materialRef = useRef(null);

  // useControls('Cross', {
  //   uAlpha: {
  //     value: uniforms.uAlpha,
  //     min: 0,
  //     max: 1,
  //     step: 0.01,
  //     onChange: (value) => {
  //       materialRef.current.uniforms.uAlpha.value = value;
  //     },
  //   },
  //   uSize: {
  //     value: uniforms.uSize,
  //     min: 0,
  //     max: 1,
  //     step: 0.01,
  //     onChange: (value) => {
  //       materialRef.current.uniforms.uSize.value = value;
  //     },
  //   },
  //   uThinning: {
  //     value: uniforms.uThinning,
  //     min: 0,
  //     max: 140,
  //     step: 0.1,
  //     onChange: (value) => {
  //       materialRef.current.uniforms.uThinning.value = value;
  //     },
  //   },
  // });

  const { vec, transform, positions, distances } = useMemo(() => {
    const vec = new Vector3();
    const transform = new Matrix4();

    const positions = [...Array(480)].map((_, i) => {
      const position = new Vector3();

      position.x = (i % 32) - 16.5;
      position.y = Math.floor(i / 32) - 7;

      return position;
    });

    const distances = positions.map((pos) => pos.length());
    return { vec, transform, positions, distances };
  }, []);

  useFrame(({ clock }) => {
    for (let i = 0; i < 480; ++i) {
      const t = clock.elapsedTime - distances[i] / 80;

      const wave = roundedSquareWave(t, 0.1, 1, 1 / 4);
      const scale = 1 + wave * 0.3;

      vec.copy(positions[i]).multiplyScalar(scale);
      transform.setPosition(vec);
      // Uncomment to animate
      // meshRef.current.setMatrixAt(i, transform);
    }

    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  useLayoutEffect(() => {
    const transform = new Matrix4();

    for (let i = 0; i < 480; ++i) {
      const x = (i % 32) - 16.5;
      const y = Math.floor(i / 32) - 7.5;

      transform.setPosition(x, y, 0);
      meshRef.current.setMatrixAt(i, transform);
    }
  }, []);

  return (
    <instancedMesh ref={meshRef} args={[null, null, 480]} {...props}>
      <planeBufferGeometry attach="geometry" args={[0.1, 0.1, 1, 1]} />
      <crossShaderMaterial attach="material" ref={materialRef} transparent />
    </instancedMesh>
  );
};

export default CrossGrid;
