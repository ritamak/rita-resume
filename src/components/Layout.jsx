import React, { useContext } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styled from "styled-components";
import { ThemeContext } from "../store/ThemeContext";

const ContentContainer = styled.section`
  background: ${(props) => (props.darkMode ? "#222" : "#728a6d")};
  text-align: center;
  font-family: "Poppins", sans-serif;
  font-size: 2vw;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  position: absolute;
  bottom: 0;
  top: 0;
  width: 100%;
`;

const Layout = (props) => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <>
      <ContentContainer darkMode={darkMode}>
        <Header />
        {props.children}
        <Footer />
      </ContentContainer>
    </>
  );
};

export default Layout;
