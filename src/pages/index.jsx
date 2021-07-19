import React, { Suspense } from 'react';
import { ResizeObserver } from '@juggle/resize-observer';

import {
  Button,
  Icon,
  Image,
  Legend,
  Link,
  Mail,
  Text,
  Title,
} from 'components/atoms';
import { Box, Container, Section } from 'components/layouts';
import { Socials } from 'components/molecules';
import {
  Canvas,
  Camera,
  // Cube,
  CrossGrid,
} from 'components/webgl';

import Pattern1 from 'images/pattern1.svg';
import Pattern2 from 'images/pattern2.svg';
import Pattern3 from 'images/pattern3.svg';

import Twitter from 'images/twitter.svg';
import Github from 'images/github.svg';

// markup
const IndexPage = () => (
  <Section>
    <Image
      as={Pattern3}
      position="absolute"
      zIndex="-1"
      top={{ _: '98%', sm: '95%' }}
      left={{ _: '65%', sm: '65%' }}
      width="180vw"
      height="180vh"
      minWidth="1240px"
      minHeight="1240px"
      transform="translateX(-50%) translateY(-50%)"
    />
    <Container position="relative">
      <header>
        <Legend>intro</Legend>
        <Image
          as={Pattern2}
          position="absolute"
          zIndex="-1"
          top="0"
          left="calc(100% - 20px)"
          width="60vw"
          height="60vh"
          minWidth="420px"
          minHeight="420px"
          transform="translateX(-50%) translateY(-50%)"
        />
      </header>
      <article>
        <Container
          position="relative"
          px={{ _: '0', sm: '0' }}
          maxWidth={{ _: '320px', lg: '648px' }}>
          <Image
            as={Pattern1}
            position="absolute"
            zIndex="-1"
            top={{ _: '32px', sm: '64px' }}
            left={{ _: '24px', sm: '-24px' }}
            width="70vw"
            height="70vh"
            minWidth="520px"
            minHeight="520px"
            transform="translateX(-50%) translateY(-50%)"
          />
          <header>
            <Title as="h1" mb="32px">
              Salutations !
            </Title>
          </header>
          <Box as="main" mb="m" maxWidth="420px">
            <Text fontSize={{ sm: '4' }}>
              I’m{' '}
              <Text as="span" fontWeight="bold">
                MrGlox
              </Text>
              ,{' '}
              <Text as="span" fontWeight="bold">
                Creative developer
              </Text>{' '}
              from France. I like to build beautiful websites with clean
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
        <Legend>coords</Legend>
        <Socials>
          <li>
            <Mail as="a" href="mailto:contact@morgan-leroux.com">
              <span>contact</span>@<span>thisdomain</span>
            </Mail>
          </li>
          <li>
            <Button
              href="https://twitter.com/MisterGlox"
              target="_blank"
              rel="noopener noreferrer">
              <Icon as={Twitter} />
            </Button>
          </li>
          <li>
            <Button
              href="https://github.com/MrGlox"
              target="_blank"
              rel="noopener noreferrer">
              <Icon as={Github} />
            </Button>
          </li>
        </Socials>
      </footer>
    </Container>
    <Canvas
      orthographic
      camera={{ fov: 10, position: [0, 0, 5], zoom: 100 }}
      resize={{ polyfill: ResizeObserver }}>
      {/* <color attach="background" args={['black']} /> */}
      <Camera />
      {/* <Cube /> */}
      {/* <Suspense fallback={null}>
        <ShaderImage />
      </Suspense> */}
      <CrossGrid />
    </Canvas>
  </Section>
);

export default IndexPage;
