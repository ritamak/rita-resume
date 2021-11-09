import React from "react";
import ButtonColor from "../components/ButtonColor";
import styled from "styled-components";

const Container = styled.section`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 30px;
  flex-wrap: wrap;
`;

const Topics = ({
  onHandleOne,
  onHandleTwo,
  onHandleThree,
  onHandleFour,
  onHandleFive,
  onHandleSeven,
  onHandleEight,
  onHandleNine,
}) => {
  return (
    <Container>
      <ButtonColor onHandle={onHandleOne}> Who are you?</ButtonColor>
      <ButtonColor onHandle={onHandleTwo}> Why web development?</ButtonColor>
      <ButtonColor onHandle={onHandleThree}>
        Do you have a Bachelor degree?
      </ButtonColor>
      <ButtonColor onHandle={onHandleFour}>
        Tell me some personal things about you
      </ButtonColor>
      <ButtonColor onHandle={onHandleFive}> So, what do you know?</ButtonColor>
      <ButtonColor onHandle={onHandleSeven}> Top soft skills?</ButtonColor>
      <ButtonColor onHandle={onHandleEight}> Super-powers?</ButtonColor>
      <ButtonColor onHandle={onHandleNine}>
        What do you look in a company?
      </ButtonColor>
    </Container>
  );
};

export default Topics;
