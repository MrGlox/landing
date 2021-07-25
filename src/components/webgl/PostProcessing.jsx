import React from 'react';

import { EffectComposer, Bloom } from '@react-three/postprocessing';
import { KernelSize } from 'postprocessing';

// import { useControls } from 'leva';

const PostProcessing = () => {
  // const {
  //   multisampling,
  //   kernelSize,
  //   luminanceThreshold,
  //   luminanceSmoothing,
  //   intensity,
  // } = useControls('Effect Composer', {
  //   multisampling: 4,
  //   bloom: folder({
  //     kernelSize: 2,
  //     luminanceThreshold: 0,
  //     luminanceSmoothing: 0.1,
  //     intensity: 0.2,
  //   }),
  // });

  return (
    <EffectComposer multisampling={8}>
      <Bloom
        kernelSize={5}
        luminanceThreshold={0.4}
        luminanceSmoothing={0.4}
        intensity={0.2}
      />
      <Bloom
        kernelSize={KernelSize.HUGE}
        luminanceThreshold={0.1}
        luminanceSmoothing={0.4}
        intensity={0.3}
      />
    </EffectComposer>
  );
};

export default PostProcessing;
