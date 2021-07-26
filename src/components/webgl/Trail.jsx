import React, { useRef } from 'react';

import { MeshLine, MeshLineMaterial } from 'meshline';
import { Vector3 } from 'three';
import { extend, useFrame } from '@react-three/fiber';

extend({ MeshLine, MeshLineMaterial });

const Trails = ({ ...props }) => {
  const speed = (1 + Math.random()) * 0.4;

  const fixedMaterial = useRef(null);
  const largeMaterial = useRef(null);
  const mediumMaterial = useRef(null);
  const smallMaterial = useRef(null);

  useFrame(() => {
    largeMaterial.current.uniforms.dashOffset.value += 0.0005 * speed;
    mediumMaterial.current.uniforms.dashOffset.value += 0.0025 * speed;
    smallMaterial.current.uniforms.dashOffset.value += 0.003 * speed;
  });

  return (
    <group {...props}>
      <mesh>
        <meshLine
          attach="geometry"
          points={[new Vector3(0, 0, 0), new Vector3(0.5, 0, 0)]}
        />
        <meshLineMaterial
          attach="material"
          ref={fixedMaterial}
          transparent
          lineWidth={0.01}
          color={0xffffff}
        />
      </mesh>
      <mesh>
        <meshLine
          attach="geometry"
          points={[new Vector3(-0.45, 0, 0), new Vector3(0.5, 0, 0)]}
        />
        <meshLineMaterial
          attach="material"
          ref={smallMaterial}
          transparent
          lineWidth={0.01}
          color={0xffffff}
          dashArray={0.1}
          dashRatio={0.75}
        />
      </mesh>
      <mesh>
        <meshLine
          attach="geometry"
          points={[new Vector3(-0.35, 0, 0), new Vector3(0.5, 0, 0)]}
        />
        <meshLineMaterial
          attach="material"
          ref={mediumMaterial}
          transparent
          lineWidth={0.01}
          color={0xffffff}
          dashArray={0.5}
          dashRatio={0.65}
        />
      </mesh>
      <mesh>
        <meshLine
          attach="geometry"
          points={[new Vector3(-0.15, 0, 0), new Vector3(0.5, 0, 0)]}
        />
        <meshLineMaterial
          attach="material"
          ref={largeMaterial}
          transparent
          lineWidth={0.01}
          color={0xffffff}
          dashArray={0.1}
          dashRatio={0.5}
        />
      </mesh>
    </group>
  );
};

export default Trails;
