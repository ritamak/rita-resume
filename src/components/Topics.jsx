import React, { useContext } from "react";
import { ThemeContext } from "../store/ThemeContext";

import styled from "styled-components";
import Button from "@mui/material/Button";

const StyledButton = styled(Button)`
  text-decoration: none;
  position: relative;
  padding: 20px;
  background: ${(props) => (props.darkMode ? "#728a6d" : "#969696")};
  border-radius: 4px;
  border: none;
  font-size: 1vw;
  line-height: 2vw;
  text-align: start;
  font-family: "Poppins", sans-serif;
  color: ${(props) => (props.darkMode ? "white" : "black")};
  box-shadow: ${(props) =>
    props.darkMode
      ? "5px 5px 9px #191919, -5px -5px 9px #474747"
      : "rgba(0, 0, 0, 0.35) 0px 5px 15px"};
`;

const Container = styled.section`
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 30px;
  flex-wrap: wrap;
`;

const Topics = ({
  onHandleOne,
  onHandleTwo,
  onHandleThree,
  onHandleFour,
  onHandleFive,
  onHandleSix,
  onHandleSeven,
  onHandleEight,
  onHandleNine,
}) => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <Container>
      <StyledButton darkMode={darkMode} size="large" onClick={onHandleOne}>
        Who are you?
      </StyledButton>
      <StyledButton darkMode={darkMode} size="large" onClick={onHandleTwo}>
        Why web development?
      </StyledButton>
      <StyledButton darkMode={darkMode} size="large" onClick={onHandleThree}>
        Do you have a Bachelor degree?
      </StyledButton>
      <StyledButton darkMode={darkMode} size="large" onClick={onHandleFour}>
        Tell me some personal things about you
      </StyledButton>
      <StyledButton darkMode={darkMode} size="large" onClick={onHandleFive}>
        So, what do you know?
      </StyledButton>
      <StyledButton darkMode={darkMode} size="large" onClick={onHandleSix}>
        Can I see your cv?
      </StyledButton>
      <StyledButton darkMode={darkMode} size="large" onClick={onHandleSeven}>
        Top soft skills?
      </StyledButton>
      <StyledButton darkMode={darkMode} size="large" onClick={onHandleEight}>
        Super-powers?
      </StyledButton>
      <StyledButton darkMode={darkMode} size="large" onClick={onHandleNine}>
        What do you look in a company?
      </StyledButton>
    </Container>
  );
};

export default Topics;
