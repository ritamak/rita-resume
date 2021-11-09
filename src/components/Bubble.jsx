import React, { useContext } from "react";
import Grid from "@material-ui/core/Grid";
import styled from "styled-components";
import { ThemeContext } from "../store/ThemeContext";

const StyledBubble = styled(Grid)`
  position: relative;
  padding: 15px 20px 15px;
  background: ${(props) => (props.darkMode ? "#969696" : "#ffffff")};
  border-radius: 4px;
  border: none;
  font-size: 3vw;
  line-height: 4vw;
  text-align: start;
  font-family: "Poppins", sans-serif;
  color: ${(props) => (props.darkMode ? "white" : "black")};
  box-shadow: ${(props) =>
    props.darkMode
      ? "5px 5px 9px #191919, -5px -5px 9px #474747"
      : "rgba(0, 0, 0, 0.35) 0px 5px 15px"};

  :after {
    content: "";
    position: absolute;
    border-style: solid;
    border-width: 16px 16px 16px 0;
    border-color: ${(props) =>
      props.darkMode ? "transparent #969696" : "transparent #ffffff"};

    display: block;
    width: 0;
    z-index: 1;
    left: -15px;
    top: 50%;
    margin-top: -16px;
  }

  :before {
    content: "";
    position: absolute;
    border-style: solid;
    border-width: 16px 16px 16px 0;
    border-color: ${(props) =>
      props.darkMode ? "transparent #222" : "transparent #7f7f7f"};

    display: block;
    width: 0;
    z-index: 0;
    left: -16px;
    top: 50%;
    margin-top: -16px;
  }
  @media (min-width: 600px) {
    padding: 20px;
    font-size: 2vw;
    line-height: 3vw;
  }
`;

const Container = styled.section`
  width: 100%;
`;

export default function Bubble(props) {
  const { text } = props;

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <Container>
      <StyledBubble
        darkMode={darkMode}
        container
        rowSpacing={1}
        columnSpacing={{ xs: 0, sm: 0, md: 0, lg: 0 }}
      >
        {text && text}
        {!text && props.children}
      </StyledBubble>
    </Container>
  );
}
