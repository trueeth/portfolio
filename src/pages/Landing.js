import React from 'react';
import styled from 'styled-components';

import { Kap, EA1Image } from '../images';
import { Nav, Foot, Project } from '../components';
import { Spread } from '../components/switch/styles';
import QUERIES, { Main, Midi, Full, Heading, Heading1, Paragraph } from '../theming/styles';

const Split = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
  margin: 200px auto;
  flex-wrap: wrap;

  > * {
    width: 100%;

    @media (${QUERIES.large}) {
      width: calc(50% - 20px);
    }
  }
`;

const KapImg = styled.img`
  width: 400px;
  height: 400px;
  border-radius: 100px;
`;

const Landing = ({ toggleMode, mode, spread, setDisableScroll }) => {
  const spreadClass = spread === 'first' ? 'growBlack' : spread === 'second' ? 'growWhite' : '';

  return (
    <Main
      style={{
        position: 'relative',
        overflow: setDisableScroll ? 'hidden' : 'null',
        height: setDisableScroll ? '100vh' : 'unset',
      }}
    >
      <Spread className={spreadClass} />
      <Nav mode={mode} toggleMode={toggleMode} />
      <Midi>
        <Split>
          <Heading1>
            <span style={{ fontWeight: 300 }}>Full Stack Engineer</span>
            <span> crafting beautiful</span>
            <span style={{ fontStyle: 'italic' }}> digital user experiences</span>
          </Heading1>
          <KapImg src={Kap} />
        </Split>
      </Midi>

      <Midi>
        <Split>
          <Heading style={{ textAlign: 'left', marginLeft: 0 }}>What's a UX Engineer?</Heading>
          <Paragraph>
            As a Full Stack Engineer, I have the design thinking and visual expertise of a designer,
            as well as the technical skills of a frontend, backend software engineer. <br /> <br />
            This allows me to advocate for users and create powerful visual designs, wireframes,
            storyboards, and prototypes while also understanding the technical limitations and
            challenges that engineers may face. I'm also able to code out prototypes and build
            component libraries with user needs and accessibility in mind
          </Paragraph>
        </Split>
      </Midi>

      <Full style={{ display: 'flex', flexDirection: 'column', gap: 160 }}>
        <Project
          name="EA1 Vehicle Service"
          image={EA1Image}
          url="ea1"
          description="Freelance design work done for a client who wanted to create the Uber for car repair and servicing"
        />
        <Project
          name="Movie Theater Case Study"
          url="movie"
          description="Reimagining the movie finding and seat selection process for movie theater applications"
        />
      </Full>

      <Foot />
    </Main>
  );
};

export { Landing };
