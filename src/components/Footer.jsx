import React, { useContext } from "react";
import { ThemeContext } from "../store/ThemeContext";
import styled from "styled-components";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import BuildIcon from "@mui/icons-material/Build";
import ContactsIcon from "@mui/icons-material/Contacts";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

import { Link } from "react-router-dom";

const Container = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`;

const StyledLink = styled(Link)`
  font-family: "Poppins", sans-serif !important;
  text-decoration: none;
  color: white;
`;

const StyledBottomNav = styled(BottomNavigation)`
  background: ${(props) => (props.darkMode ? "#222" : "#728a6d")} !important;

  font-family: "Poppins", sans-serif !important;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const StyledBottomActions = styled(BottomNavigationAction)`
  color: white;
  font-family: "Poppins", sans-serif !important;
  .Mui-selected {
    color: white;
  }
`;

const StyledRestoreIcon = styled(RestoreIcon)`
  color: white;
  font-family: "Poppins", sans-serif !important;

  .Mui-selected {
    color: white;
  }
`;

const StyledBuildIcon = styled(BuildIcon)`
  color: white;
  font-family: "Poppins", sans-serif !important;

  .Mui-selected {
    color: white;
  }
`;

const StyledContactsIcon = styled(ContactsIcon)`
  color: white;
  font-family: "Poppins", sans-serif !important;

  .Mui-selected {
    color: white;
  }
`;

const StyledButton = styled(Button)`
  text-decoration: none;
  border: none;
  background: transparent;
  color: white;
  height: 100%;
`;

const Footer = () => {
  const [value, setValue] = React.useState("recents");
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Container>
      <StyledBottomNav
        darkMode={darkMode}
        value={value}
        onChange={handleChange}
      >
        <StyledBottomActions
          value="recents"
          selected
          icon={
            <StyledButton onClick={() => navigate(-1)}>
              <StyledRestoreIcon />
            </StyledButton>
          }
        />
        <StyledBottomActions
          value="projects"
          selected
          icon={
            <StyledLink to="/projects">
              <StyledBuildIcon />
            </StyledLink>
          }
        />
        <StyledBottomActions
          value="contacts"
          selected
          icon={
            <StyledLink to="/contacts">
              <StyledContactsIcon />
            </StyledLink>
          }
        />
      </StyledBottomNav>
    </Container>
  );
};

export default Footer;
