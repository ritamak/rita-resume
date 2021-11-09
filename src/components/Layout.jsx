import React, { useContext } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styled from "styled-components";
import { ThemeContext } from "../store/ThemeContext";

const ContentContainer = styled.section`
  height: 90vh;
  background: ${(props) => (props.darkMode ? "#222" : "#728a6d")};
  text-align: center;
  font-family: "Poppins", sans-serif;
  font-size: 2vw;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 40px;
`;

const Layout = (props) => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <>
      <Header />
      <ContentContainer darkMode={darkMode}>{props.children}</ContentContainer>
      <Footer />
    </>
  );
};

export default Layout;
