import React, { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../store/ThemeContext";
import ButtonSkip from "../components/ButtonSkip";
import Layout from "../components/Layout";
import Typing from "../components/Typing";
import ProjectCard from "../components/ProjectCard";
import Bubble from "../components/Bubble";
import PhotoRita from "../components/PhotoRita";
import Backdrop from "@mui/material/Backdrop";
import Button from "@mui/material/Button";
import ComingSoon from "../components/ComingSoon";
import styled from "styled-components";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Poppins", sans-serif;
  gap: 30px;
  width: 70%;
  @media (min-width: 600px) {
    flex-direction: row;
  }
`;

const BubbleWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 30px;
  font-family: "Poppins", sans-serif;
  width: 100%;
`;

const Btn = styled(Button)`
  font-family: "Poppins", sans-serif;
  color: ${(props) => (props.darkMode ? "white" : "black")};
  text-decoration: none;
  cursor: pointer;
  text-align: end;
  text-transform: capitalize !important;
  font-size: 1em;
  @media (min-width: 600px) {
    font-size: 3vw !important;
  }
`;

const StyledBackdrop = styled(Backdrop)`
  opacity: 0;
`;

const StyledPRojectCard = styled(ProjectCard)``;

const Projects = () => {
  const [showContent, setShowContent] = useState(false);

  const contentHandler = () => {
    setShowContent(true);
  };

  useEffect(() => {
    let timeout = setTimeout(contentHandler, 3000);
    return () => clearTimeout(timeout);
  }, []);

  const [openFirst, setOpenFirst] = useState(false);
  const [openSecond, setOpenSecond] = useState(false);
  const [openThird, setOpenThird] = useState(false);
  const [openFourth, setOpenFourth] = useState(false);
  const [openFifth, setOpenFifth] = useState(false);

  const handleClose = () => {
    setOpenFirst(false);
    setOpenSecond(false);
    setOpenThird(false);
    setOpenFourth(false);
    setOpenFifth(false);
  };

  const handleToggleOne = () => {
    setOpenFirst(!openFirst);
  };

  const handleToggleTwo = () => {
    setOpenSecond(!openSecond);
  };

  const handleToggleThree = () => {
    setOpenThird(!openThird);
  };

  const handleToggleFour = () => {
    setOpenFourth(!openFourth);
  };

  const handleToggleFive = () => {
    setOpenFifth(!openFifth);
  };

  const handleTimeout = () => {
    setShowContent(true);
  };

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <Layout>
      {!showContent && (
        <>
          <Typing wordOne="projects" />
          <ButtonSkip onHandleSkip={handleTimeout} title="skip" />
        </>
      )}
      {showContent && (
        <Container>
          <PhotoRita />
          <BubbleWrapper>
            <Btn darkMode={darkMode} onClick={handleToggleOne}>
              <Bubble>Ironhack's first project</Bubble>
            </Btn>
            <StyledBackdrop
              sx={{
                color: "#fff",
                zIndex: (theme) => theme.zIndex.drawer + 1,
              }}
              open={openFirst}
              onClick={handleClose}
            >
              <StyledPRojectCard
                projectTitle={"STRESS|BALL"}
                projectDescription={`stress|ball is a game created using HTML Canvas, CSS and
          JavaScript. In stress|ball, a white ball appears in the
          screen and moves to random places. The user has to click
          inside the ball or else the user loses the games. The game has
          three levels (easy, medium and hard) and the velocity of the
          moving ball increases with each level. When the user loses the
          game, a score board appears in the screen with the time of the
          game, the number of clicks inside of the white ball, and, if the
          user plays more than once, there's also the previous game
          scores.`}
                projectTime={"2021-06-18"}
                link1={"https://ritamak.github.io/stress-ball/"}
                link1title={"website"}
                link2={"https://github.com/ritamak/stress-ball"}
                link2title={"repo"}
              />
            </StyledBackdrop>
            <Btn darkMode={darkMode} onClick={handleToggleTwo}>
              <Bubble>Ironhack's second project</Bubble>
            </Btn>
            <Backdrop
              sx={{
                color: "#fff",
                zIndex: (theme) => theme.zIndex.drawer + 1,
              }}
              open={openSecond}
              onClick={handleClose}
            >
              <ProjectCard
                projectTitle={"FUNNYFY"}
                projectDescription={`Funnyfy is a project developed by me and my colleague
          (Enrique), using back-end skills. We used
          Node.Js, Express.Js, MongoDB and JavaScript. Funnyfy is a
          website where the user can create an account, and using an external
          API of jokes, we provide the user a collection of jokes
          separated by categories. The user can add more jokes to our
          database, share the jokes in other social media platforms like
          Facebook, get random jokes everyday and add jokes to their
          favourites to never miss a good laugh!`}
                projectTime={"2021-07-09"}
                link1={"https://funnyfy.herokuapp.com/"}
                link1title={"website"}
                link2={"https://github.com/ritamak/funnyfy"}
                link2title={"repo"}
              />
            </Backdrop>
            <Btn darkMode={darkMode} onClick={handleToggleThree}>
              <Bubble>Ironhack's third project</Bubble>
            </Btn>
            <Backdrop
              sx={{
                color: "#fff",
                zIndex: (theme) => theme.zIndex.drawer + 1,
              }}
              open={openThird}
              onClick={handleClose}
            >
              <ProjectCard
                projectTitle={"HR TIMES"}
                projectDescription={`HR TIMES is a project developed by me and my colleague
          (Halil), using our full-stack skills. To develop the website, we used React,
          Node.Js, Express.Js and MongoDB. HR TIMES is a website
          where the user can create an account and based on the user's
          interests, we provide a curated selection of news and articles
          from the New York Times API. The user can add new articles to
          our database, see articles created by other users, follow other
          authors on our platform, review and "like" other articles.`}
                projectTime={"2021-07-30"}
                link1={"https://hrtimes.herokuapp.com/"}
                link1title={"website"}
                link2={"https://github.com/ritamak/hrtimes-client"}
                link2title={"client"}
                link3={"https://github.com/ritamak/hrtimes-server"}
                link3title={"server"}
              />
            </Backdrop>
            <Btn darkMode={darkMode} onClick={handleToggleFour}>
              <Bubble>This website (my resume)</Bubble>
            </Btn>
            <Backdrop
              sx={{
                color: "#fff",
                zIndex: (theme) => theme.zIndex.drawer + 1,
              }}
              open={openFourth}
              onClick={handleClose}
            >
              <ProjectCard
                projectTitle={"Rita's Resume"}
                projectDescription={`Developed using React, this is a website where you can find out more about me personally and my professional path. The website has light and dark mode, a page with all of my projects, other with all of my contacts and one with the Q&A. There is also a not found page!`}
                projectTime={"2021-11-08"}
                link1={"https://rita-mak.netlify.app"}
                link1title={"website"}
                link2={"https://github.com/ritamak/rita-resume"}
                link2title={"repo"}
              />
            </Backdrop>
            <Btn darkMode={darkMode} onClick={handleToggleFive}>
              <Bubble>secret project</Bubble>
            </Btn>
            <Backdrop
              sx={{
                color: "#fff",
                zIndex: (theme) => theme.zIndex.drawer + 1,
              }}
              open={openFifth}
              onClick={handleClose}
            >
              <ProjectCard projectDescription={<ComingSoon />} />
            </Backdrop>
          </BubbleWrapper>
        </Container>
      )}
    </Layout>
  );
};

export default Projects;
