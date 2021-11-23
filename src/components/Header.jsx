import React, { useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { ThemeContext } from "../store/ThemeContext";
import ButtonIcon from "../components/ButtonToggle";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledAppBar = styled(AppBar)`
  background: ${(props) => (props.darkMode ? "#222" : "#728a6d")} !important;
  position: absolute;
  top: 0;
  box-shadow: none !important;
  width: 95% !important;
`;

const StyledTypography = styled(Typography)`
  color: white;
  display: flex;
  justify-content: flex-start;
  box-shadow: none;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
`;

const StyledToolbar = styled(Toolbar)`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const StyledIconButton = styled(IconButton)`
  display: flex;
  transform: scale(1.3);
`;

const Header = (props) => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <>
      <StyledAppBar darkMode={darkMode}>
        <StyledToolbar>
          <StyledTypography
            darkMode={darkMode}
            variant="h5"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            <StyledLink to="/">Rita Mak</StyledLink>
          </StyledTypography>
          <StyledIconButton size="large" sx={{ mr: 2 }}>
            <ButtonIcon />
          </StyledIconButton>
        </StyledToolbar>
      </StyledAppBar>
    </>
  );
};

export default Header;
