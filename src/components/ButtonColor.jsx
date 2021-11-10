import React, { useContext } from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";
import { ThemeContext } from "../store/ThemeContext";

const StyledButton = styled(Button)`
  width: 100%;
  height: 100%;
  text-decoration: none;
  padding: 20px;
  background: ${(props) => (props.darkMode ? "#728a6d" : "#969696")};
  border-radius: 4px;
  border: none;
  font-size: 1vw !important;
  line-height: 2vw;
  font-weight: bold !important;
  text-align: center;
  font-family: "Poppins", sans-serif !important;
  text-transform: lowercase !important;
  letter-spacing: 2px !important;
  color: white !important;
  box-shadow: ${(props) =>
    props.darkMode
      ? "5px 5px 9px #191919, -5px -5px 9px #474747"
      : "rgba(0, 0, 0, 0.35) 0px 5px 15px"};

  @media (min-width: 600px) {
    font-size: 1vw !important;
  }
`;

const Wrapper = styled.section`
  display: none;

  @media (min-width: 600px) {
    display: block;
    width: 20%;
    gap: 5px;
    height: 50px;
  }

  @media (min-width: 1000px) {
    width: 20%;
    gap: 5px;
    height: 70px;
  }
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
