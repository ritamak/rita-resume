import React, { useContext } from "react";
import { ThemeContext } from "../store/ThemeContext";
import "../App.css";
import styled, { css } from "styled-components";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import Brightness2OutlinedIcon from "@mui/icons-material/Brightness2Outlined";

const icon = css`
  color: ${(props) => props.theme.text};
  cursor: pointer;
`;

const StyledSun = styled(WbSunnyOutlinedIcon)`
  ${icon}
`;

const StyledMoon = styled(Brightness2OutlinedIcon)`
  ${icon}
`;

const StyledButton = styled.button`
  background: transparent;
  border: none;
  transition: 02s all linear;
  cursor: pointer;
  color: white;
`;

const SwitchButton = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const onClick = () => {
    if (darkMode) {
      theme.dispatch({ type: "LIGHTMODE" });
    } else {
      theme.dispatch({ type: "DARKMODE" });
    }
  };

  return (
    <StyledButton onClick={onClick} darkMode={darkMode}>
      {darkMode ? <StyledSun /> : <StyledMoon />}
    </StyledButton>
  );
};

export default SwitchButton;
