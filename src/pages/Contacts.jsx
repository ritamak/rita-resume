import React, { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../store/ThemeContext";
import ButtonSkip from "../components/ButtonSkip";
import Layout from "../components/Layout";
import Typing from "../components/Typing";
import RitaTalking from "../components/RitaTalking";
import styled from "styled-components";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PhoneIcon from "@mui/icons-material/Phone";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import Pdf from "../Documents/ritacv.pdf";

const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  padding-left: 20px;
  padding-right: 20px;
  width: 80%;
  @media (min-width: 600px) {
    gap: 30px;
    padding-left: 0px;
    padding-right: 0px;
  }
`;

const ContactsWrapper = styled.section`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  row-gap: 30px;
  @media (max-width: 600px) {
    row-gap: 30px;
  }
`;

const Link = styled.a`
  text-decoration: none;
  position: relative;
  padding: 0px;
  background: transparent;
  border: none;
  font-size: 1vw !important;
  text-align: start;
  font-family: "Poppins", sans-serif;
  color: white;

  :hover:before {
    opacity: 1;
    transform: translate(0, 0);
  }
  :before {
    content: attr(data-hover);
    position: absolute;
    top: 1.1em;
    left: 0;
    width: 100%;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: 800;
    font-size: 0.6vh;
    opacity: 0;
    transform: translate(-100%, 0);
    transition: all 0.3s ease-in-out;
  }

  @media (min-width: 600px) {
    :before {
      font-weight: 800;
      font-size: 2vh;
    }
  }
  /*button div (button text before hover)*/
  :hover div {
    opacity: 0;
    transform: translate(100%, 0);
  }
  div {
    text-transform: uppercase;
    letter-spacing: 3px;
    font-size: 2em;
    transition: all 0.3s ease-in-out;
  }
  div > svg {
    height: 100%;
  }
`;

const StyledGithub = styled(GitHubIcon)`
  transform: scale(1);
  @media (min-width: 600px) {
    transform: scale(1.5);
  }
`;

const StyledInsta = styled(InstagramIcon)`
  transform: scale(1);
  @media (min-width: 600px) {
    transform: scale(1.5);
  }
`;

const StyledLinkedin = styled(LinkedInIcon)`
  transform: scale(1);
  @media (min-width: 600px) {
    transform: scale(1.5);
  }
`;

const StyledEmail = styled(EmailIcon)`
  transform: scale(1);
  @media (min-width: 600px) {
    transform: scale(1.5);
  }
`;

const StyledPhone = styled(PhoneIcon)`
  transform: scale(1);
  @media (min-width: 600px) {
    transform: scale(1.5);
  }
`;

const StyledFileDownloadIcon = styled(FileDownloadIcon)`
  transform: scale(1);
  @media (min-width: 600px) {
    transform: scale(1.5);
  }
`;

const StyledHr = styled.hr`
  width: 100%;
  margin-top: 0px;
  margin-bottom: 0px;
`;

const Contacts = () => {
  const [showContent, setShowContent] = useState(false);

  const contentHandler = () => {
    setShowContent(true);
  };

  useEffect(() => {
    let timeout = setTimeout(contentHandler, 3000);
    return () => clearTimeout(timeout);
  }, []);

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleTimeout = () => {
    setShowContent(true);
  };

  return (
    <Layout>
      {!showContent ? (
        <>
          <Typing wordOne="contacts" />
          <ButtonSkip onHandleSkip={handleTimeout}>Skip</ButtonSkip>
        </>
      ) : (
        <Container>
          <RitaTalking
            message={
              "Let's connect! Feel free to get in touch, you can contact me through my social media, e-mail or phone numbers. I also appreciate feedback on my projects, so I can grow as a developer."
            }
          />
          <StyledHr class="rounded" />
          <ContactsWrapper>
            <Link
              href="https://www.instagram.com/ritapmak/"
              target="_blank"
              rel="noreferrer noopener"
              data-hover="instagram"
              darkMode={darkMode}
            >
              <div>
                <StyledInsta />
              </div>
            </Link>
            <Link
              href="https://www.github.com/ritamak/"
              target="_blank"
              rel="noreferrer noopener"
              darkMode={darkMode}
              data-hover="github"
            >
              <div>
                <StyledGithub />
              </div>
            </Link>
            <Link
              href="https://www.linkedin.com/in/rita-mak/"
              target="_blank"
              rel="noreferrer noopener"
              darkMode={darkMode}
              data-hover="linkedin"
            >
              <div>
                <StyledLinkedin />
              </div>
            </Link>

            <Link
              href="mailto:ritapmak@gmail.com"
              target="_blank"
              rel="noreferrer noopener"
              data-hover="email"
              darkMode={darkMode}
            >
              <div>
                <StyledEmail />
              </div>
            </Link>
            <Link href="tel:00351916182454" darkMode={darkMode} data-hover="PT">
              <div>
                <StyledPhone />
              </div>
            </Link>
            <Link
              href="tel:004407907009418"
              darkMode={darkMode}
              data-hover="EN"
            >
              <div>
                <StyledPhone />
              </div>
            </Link>
            <Link
              href={Pdf}
              target="_blank"
              rel="noreferrer"
              darkMode={darkMode}
              data-hover="CV"
            >
              <div>
                <StyledFileDownloadIcon />
              </div>
            </Link>
            <StyledHr class="rounded" />
          </ContactsWrapper>
        </Container>
      )}
    </Layout>
  );
};

export default Contacts;
