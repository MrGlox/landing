import React from 'react';

import {
  EffectComposer,
  BrightnessContrast,
  Noise,
} from '@react-three/postprocessing';
// import { BlendFunction } from 'postprocessing';

const PostProcessing = () => (
  <EffectComposer multisampling={2}>
    <Noise premultiply opacity={0.5} />
    <BrightnessContrast brightness={-0.02} contrast={0.032} />
  </EffectComposer>
);

export default PostProcessing;
