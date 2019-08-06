import React from "react";
import { Link } from "gatsby";
import styled from "styled-components/macro";
import Heading from "../Heading";
import Paragraph from "../Paragraph";
import Logo from "../Logo";
import { breakpoints } from "../Media";
import ContactEmail from "../ContactEmail";
import InstagramGrid from "../InstagramGrid";
import ProjectRow from "../ProjectRow";

const FooterCont = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fbfbfb;
  padding: 40px 0 0 0;
  margin: 50px 0 0 0;

  a {
    text-align: left;
    color: black;
  }

  @media (min-width: ${breakpoints.tabletMin}) {
    padding: 0;
    margin: 100px 0 0 0;
  }
`;

const Variable = styled.div`
  display: ${props => props.projectDisplay || "none"};
  margin-bottom: 100px;
`;

const Layout = styled.div`
  padding: 20px;
  margin: 25px auto;

  a {
    text-decoration: none;
    color: black;
  }

  @media (min-width: ${breakpoints.tabletMin}) {
    max-width: 940px;
    padding: 100px 0 0 0;
    margin: 75px auto;
  }

  @media (min-width: ${breakpoints.desktopMin}) {
    max-width: 1200px;
    padding: 100px 0 0 0;
    margin: 75px auto;
  }
`;

const TextContent = styled.div`
  max-width: 700px;
`;

const SubContainer = styled.div`
  margin: 60px 0;
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  @media (min-width: ${breakpoints.mobileMax}) {
    flex-wrap: nowrap;
    margin-bottom: 50px;
  }
`;

const SubParagraph = styled(Paragraph)`
  margin-top: 20px;

  @media (min-width: ${breakpoints.mobileMax}) {
    max-width: 60%;
  }
`;

const Container = styled.div`
  margin: 100px 0 0 0;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  @media (min-width: ${breakpoints.mobileMax}) {
    flex-wrap: nowrap;
  }
`;

function Footer(props) {
  return (
    <FooterCont>
      <Layout>
        <Variable projectDisplay={props.projectDisplay}>
          <Heading>Other Projects</Heading>
          <SubContainer>
            <ProjectRow />
          </SubContainer>
        </Variable>
        <SubContainer>
          <TextContent>
            <Heading>Let's Build Something Together</Heading>
            <SubParagraph>
              Feel free to reach out if you're looking for a developer, have a
              question, or just want to connect.
            </SubParagraph>
            <ContactEmail />
          </TextContent>
        </SubContainer>
        <InstagramGrid instagramDisplay={props.instagramDisplay} />
        <Container>
          <Link title="Home - Julia Johnson" to="/">
            <Logo />
          </Link>
        </Container>
      </Layout>
    </FooterCont>
  );
}

export default Footer;
