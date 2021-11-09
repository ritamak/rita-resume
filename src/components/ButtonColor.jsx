import React, { useContext } from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";
import { ThemeContext } from "../store/ThemeContext";

const StyledButton = styled(Button)`
  width: 100%;
  text-decoration: none;
  padding: 20px;
  background: ${(props) => (props.darkMode ? "#728a6d" : "#969696")};
  border-radius: 4px;
  border: none;
  font-size: 1vh !important;
  line-height: 2vh;
  text-align: start;
  font-family: "Poppins", sans-serif;
  color: ${(props) => (props.darkMode ? "white" : "black")} !important;
  box-shadow: ${(props) =>
    props.darkMode
      ? "5px 5px 9px #191919, -5px -5px 9px #474747"
      : "rgba(0, 0, 0, 0.35) 0px 5px 15px"};
`;

const Wrapper = styled.section`
  width: 20%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 30px;
  flex-wrap: wrap;
`;

const ButtonColor = ({ children, onHandle }) => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <Wrapper>
      <StyledButton darkMode={darkMode} size="large" onClick={onHandle}>
        {children}
      </StyledButton>
    </Wrapper>
  );
};

export default ButtonColor;
