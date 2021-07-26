import React, { useRef } from 'react';
import { ResizeObserver } from '@juggle/resize-observer';

import { Legend, Link, Text, Title } from 'components/atoms';
import { Box, Container, Section } from 'components/layouts';
import { Canvas, Camera, CrossGrid, PostProcessing } from 'components/webgl';

import { CoordsPattern, IntroPattern, MainPattern, Socials } from 'containers';

// markup
const IndexPage = () => {
  const coordsPattern = useRef(null);
  const contentRef = useRef(null);
  const introRef = useRef(null);

  return (
    <>
      <Canvas resize={{ polyfill: ResizeObserver }}>
        {/* Planets part */}
        <CoordsPattern offset={[-1.2, -1.5, 0.01]} elementRef={coordsPattern} />
        <MainPattern offset={[-0.25, 0.05, 0.01]} elementRef={contentRef} />
        <IntroPattern offset={[0.2, 0.05, 0.01]} elementRef={introRef} />

        {/* Cross part */}
        <CrossGrid position={[0, 0, 0.3]} scale={[0.9, 0.9, 0.9]} />

        {/* Globals */}
        <Camera />
        <PostProcessing />
        <color attach="background" args={['#060826']} />
      </Canvas>
      <Section>
        <Container position="relative">
          <header>
            <Legend ref={introRef}>intro</Legend>
          </header>
          <article>
            <Container
              position="relative"
              px={{ _: '0', sm: '0' }}
              maxWidth={{ _: '320px', lg: '694px' }}>
              <header>
                <Title as="h1" mb="32px">
                  Salutations !
                </Title>
              </header>
              <Box ref={contentRef} as="main" mb="m" maxWidth="420px">
                <Text fontSize={{ sm: '4' }}>
                  I’m{' '}
                  <Text as="span" fontWeight="bold">
                    MrGlox
                  </Text>
                  ,{' '}
                  <Text as="span" fontWeight="bold">
                    Creative developer
                  </Text>{' '}
                  from France. I like to build beautiful websites with clean
                  interactions and animations.
                </Text>
              </Box>
              <Box as="footer" flexDirection="column" maxWidth="420px">
                <Text fontSize={{ sm: '4' }}>
                  Studied{' '}
                  <Text as="span" fontWeight="bold">
                    nowhere
                  </Text>
                  , based in Paris.
                </Text>
                <Text fontSize={{ sm: '4' }}>
                  Currently working as{' '}
                  <Link
                    href="https://www.malt.fr/profile/morgan"
                    target="_blank"
                    rel="noopener noreferrer">
                    freelance
                  </Link>{' '}
                  \o/, formely at{' '}
                  <Link
                    href="https://tresorio.com/"
                    target="_blank"
                    rel="noopener noreferrer">
                    Tresorio
                  </Link>
                  ,{' '}
                  <Link
                    href="https://beapi.fr/"
                    target="_blank"
                    rel="noopener noreferrer">
                    Be API
                  </Link>{' '}
                  and{' '}
                  <Link
                    href="https://www.facebook.com/clickandcheersofficiel/"
                    target="_blank"
                    rel="noopener noreferrer">
                    Click & Cheers
                  </Link>
                  .
                </Text>
              </Box>
            </Container>
          </article>
          <footer>
            <Legend ref={coordsPattern}>coords</Legend>
            <Socials />
          </footer>
        </Container>
      </Section>
    </>
  );
};

export default IndexPage;
