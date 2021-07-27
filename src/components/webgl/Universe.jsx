import React, { useMemo, useRef } from 'react';

import { useThree } from '@react-three/fiber';
import * as THREE from 'three';

import { PostProcessing } from 'components/webgl';
import { CoordsPattern, IntroPattern, MainPattern } from 'containers';

const Universe = ({ coordsRef, contentRef, introRef }) => {
  const camRef = useRef(null);
  const {
    size: { width, height },
  } = useThree();

  const [scene, target] = useMemo(() => {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#090C33');

    const target = new THREE.WebGLMultisampleRenderTarget(width, height, {
      format: THREE.RGBFormat,
      stencilBuffer: false,
    });

    target.samples = 8;
    return [scene, target];
  }, []);

  return (
    <>
      {/* Planets part */}
      <CoordsPattern offset={[-1.2, -1.5, 0.01]} elementRef={coordsRef} />
      <MainPattern offset={[-0.25, 0.05, 0.01]} elementRef={contentRef} />
      <IntroPattern offset={[0.2, 0.05, 0.01]} elementRef={introRef} />

      {/* Effects part */}
      <PostProcessing />
    </>
  );
};

export default Universe;
