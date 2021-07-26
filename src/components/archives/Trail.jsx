import React, { useMemo } from 'react';

import { BufferGeometry, Float32Array, InstancedBufferGeometry } from 'three';
import { Vector3 } from 'three';

// const TrailShaderMaterial = shaderMaterial(
//   // Uniforms
//   {
//     uColor: new THREE.Color(1.0, 1.0, 1.0),
//     uTexture: new THREE.Texture(),
//     uTime: 0,
//   },
//   // Vertex
//   glsl`
//     precision mediump float;

//     varying vec2 vUv;

//     void main() {
//       vUv = uv;

//       gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.);
//     }
//   `,
//   // Fragment
//   glsl`
//     precision mediump float;

//     uniform float uTime;

//     varying vec2 vUv;

//     void main() {
//       gl_FragColor = vec4(1., 1., 1., 1.);
//     }
//   `,
// );

// extend({ TrailShaderMaterial });

const Trail = () => {
  // const ref = useRef(null);
  // useFrame(({ clock }) => (ref.current.uTime = clock.getElapsedTime()));

  const count = 5;

  const points = [];
  points.push(new Vector3(-2, 0, 0));
  points.push(new Vector3(2, 0, 0));

  const geometry = useMemo(() => {
    const lineGeometry = new BufferGeometry().setFromPoints(points);
    const instanced = new InstancedBufferGeometry().copy(lineGeometry);
    instanced.maxInstancedCount = 5;

    return instanced;
  }, []);

  const positions = useMemo(() => {
    const positions = new Float32Array(count * 3);

    for (
      let i = 0;
      i < count * 3;
      i++ // Multiply by 3 for same reason
    ) {
      positions[i] = (Math.random() - 0.5) * 10; // Math.random() - 0.5 to have a random value between -0.5 and +0.5
    }

    // return here a Float32Array with your data
    return positions;
  }, []);

  return (
    <mesh>
      <primitive object={geometry} attach="geometry">
        <instancedBufferAttribute
          attachObject={['attributes', 'aOffset']}
          count={count}
          array={positions}
          itemSize={1}
        />
      </primitive>
      <lineBasicMaterial attach="material" color={0xffffff} />
      {/* <shaderMaterial
        attach="material"
        transparent={false}
        args={[{
          uniforms: uniforms,
          vertexShader: vertex,
          fragmentShader: fragment,
        }]}
      /> */}
    </mesh>
  );
};

export default Trail;
