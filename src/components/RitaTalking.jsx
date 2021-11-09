import React from "react";
import PhotoRita from "../components/PhotoRita";
import Bubble from "../components/Bubble";
import styled from "styled-components";

const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media (min-width: 600px) {
    justify-content: center;
  }
`;

const Wrapper = styled.section`
  display: flex;
  flex-direction: row;
  gap: 0px;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  width: 90%;
  @media (min-width: 600px) {
    justify-content: center;
    flex-direction: row;
    gap: 30px;
  }
`;

const RitaTalking = ({ message }) => {
  return (
    <Container>
      <Wrapper>
        <PhotoRita />
        {message && <Bubble text={message} />}
      </Wrapper>
    </Container>
  );
};

export default RitaTalking;
