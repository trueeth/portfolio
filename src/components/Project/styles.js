import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Movie } from '../../images';
import QUERIES, { Midi, Heading, Paragraph } from '../../theming/styles';

// prettier-ignore
const ImageProj = styled.div`
  margin: 20px 0;
  background-image: ${props => `url(${props.image})`};
  width: 100%;
  height: 400px;
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;

  @media (${QUERIES.large}) {
    height: 1100px;
  }
`;

const Project = styled.div`
  padding: 0 20px;
  @media (${QUERIES.large}) {
    padding: 0;
  }
  width: 100%;
`;

const MyProject = ({
  name = 'Project Name',
  description = 'Passionate about facilitating excellent user experiences through site speed optimization, accessibility, and user testing. ',
  url = 'project',
  image = Movie,
}) => {
  return (
    <Project>
      <Midi style={{ marginTop: 0, marginBottom: 40 }}>
        <Heading
          style={{
            textAlign: 'left',
            fontSize: 60,
            marginLeft: 0,
            marginRight: 0,
            width: 'fit-content',
            maxWidth: 1000,
          }}
          onMouseDown={(e) => {
            e.preventDefault();
          }}
        >
          <Link to={`/${url}`}>{name}</Link>
        </Heading>

        <Paragraph style={{ maxWidth: 650, marginTop: 20 }}>{description}</Paragraph>
      </Midi>
      <Link to={`/${url}`} tabIndex="-1">
        <ImageProj image={image} />
      </Link>
    </Project>
  );
};

export { MyProject };
