import React, { useRef } from 'react';

import { ResizeObserver } from '@juggle/resize-observer';
import { Perf } from 'r3f-perf';

import { Legend, Link, Text, Title } from 'components/atoms';
import { Box, Container, Section } from 'components/layouts';
import { Canvas, Camera, CrossGrid, Universe } from 'components/webgl';

import { Socials } from 'containers';

// markup
const IndexPage = ({ location }) => {
  const coordsRef = useRef(null);
  const contentRef = useRef(null);
  const introRef = useRef(null);

  return (
    <>
      <Canvas concurrent resize={{ polyfill: ResizeObserver }}>
        {/* Cross part */}
        <CrossGrid position={[0, 0, 0.3]} scale={[0.9, 0.9, 0.9]} />

        {/* Planets part */}
        <Universe
          coordsRef={coordsRef}
          contentRef={contentRef}
          introRef={introRef}
        />

        {/* Globals */}
        <Camera />
        <color attach="background" args={['#010210']} />
        {location.hash === '#debug' && (
          <Perf className="perf-stats" position="top-left" />
        )}
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
                <Title as="h2" mb="32px" fontSize={{ _: 5, sm: 6 }}>
                  Salutations !
                </Title>
              </header>
              <Box ref={contentRef} as="main" mb="m" maxWidth="420px">
                <Text fontSize={{ sm: 4 }}>
                  I’m Morgan{' '}
                  <Text as="span" fontWeight="bold">
                    &quot;MrGlox&quot;
                  </Text>{' '}
                  Leroux,{' '}
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
                  \o/, formerly at{' '}
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
            <Legend ref={coordsRef}>coords</Legend>
            <Socials />
          </footer>
        </Container>
      </Section>
    </>
  );
};

export default IndexPage;
