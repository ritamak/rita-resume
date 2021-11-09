import React, { useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { ThemeContext } from "../store/ThemeContext";
import ButtonIcon from "../components/Button";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledAppBar = styled(AppBar)`
  background: ${(props) => (props.darkMode ? "#222" : "#728a6d")};
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
`;

const StyledTypography = styled(Typography)`
  color: white;
  width: 20%;
  background: green;
  display: flex;
  justify-content: flex-start;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
`;

const StyledToolbar = styled(Toolbar)`
  background: pink;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const StyledIconButton = styled(IconButton)`
  width: 50%;
  background: yellow;
  display: flex;
  justify-content: flex-end;
`;

const Header = (props) => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <>
      <StyledAppBar position="static" darkMode={darkMode}>
        <StyledToolbar>
          <StyledTypography
            darkMode={darkMode}
            variant="h6"
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
