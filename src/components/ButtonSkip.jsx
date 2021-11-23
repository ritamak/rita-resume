import React, { useContext } from "react";
import Button from "@mui/material/Button";
import { ThemeContext } from "../store/ThemeContext";
import styled from "styled-components";

const StyledButton = styled(Button)`
  text-decoration: underline !important;
  background: transparent;
  color: #ffffffa9 !important;
  font-family: "Poppins", sans-serif;
  color: ${(props) => (props.darkMode ? "white" : "white")};
  font-size: 2em !important;
  text-transform: lowercase !important;
  @media (min-width: 600px) {
    font-size: 1em !important;
  }
`;

const ButtonSkip = ({ onHandleSkip, title }) => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <StyledButton darkMode={darkMode} onClick={onHandleSkip}>
      {title}
    </StyledButton>
  );
};

export default ButtonSkip;
