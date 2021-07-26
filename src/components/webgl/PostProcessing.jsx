import React from 'react';

import {
  EffectComposer,
  Bloom,
  BrightnessContrast,
  Vignette,
  Noise,
} from '@react-three/postprocessing';
import { BlendFunction, KernelSize } from 'postprocessing';

const PostProcessing = () => (
  <EffectComposer multisampling={8}>
    <Bloom
      blendFunction={BlendFunction.ADD}
      kernelSize={KernelSize.SMALL}
      luminanceThreshold={0.2}
      luminanceSmoothing={0.6}
      height={120}
      opacity={1.5}
    />
    <Bloom
      kernelSize={KernelSize.HUGE}
      luminanceThreshold={0.1}
      luminanceSmoothing={0.2}
      height={10}
      opacity={2.5}
    />
    <Noise premultiply blendFunction={BlendFunction.ADD} opacity={0.25} />
    <Vignette eskil={false} offset={0.1} darkness={0.25} />
    <BrightnessContrast brightness={-0.123} contrast={0.1} />
  </EffectComposer>
);

export default PostProcessing;
