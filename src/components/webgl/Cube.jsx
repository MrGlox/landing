import React, { useState } from 'react';
import { useSpring, a } from '@react-spring/three';

const Cube = () => {
  const [hovered, setHovered] = useState(false);
  const [active, setActive] = useState(false);

  const { color, scale } = useSpring({
    color: !hovered ? 'grey' : 'red',
    scale: active ? [1.5, 1.5, 1.5] : [1, 1, 1],
  });

  return (
    <a.mesh
      onClick={() => setActive(!active)}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      scale={scale}>
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <a.meshBasicMaterial attach="material" color={color} />
    </a.mesh>
  );
};

export default Cube;
