import React from 'react';

import { PostProcessing } from 'components/webgl';
import { CoordsPattern, IntroPattern, MainPattern } from 'containers';

const Universe = ({ coordsRef, contentRef, introRef }) => (
  <>
    {/* Planets part */}
    <CoordsPattern offset={[-1.2, -1.5, 0.01]} elementRef={coordsRef} />
    <MainPattern offset={[-0.25, -0.02, 0.01]} elementRef={contentRef} />
    <IntroPattern offset={[0.3, -0.05, 0.01]} elementRef={introRef} />

    {/* Effects part */}
    <PostProcessing />
  </>
);

export default Universe;
