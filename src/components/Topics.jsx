import React from "react";
import ButtonColor from "../components/ButtonColor";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import styled from "styled-components";

const Container = styled.section`
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  gap: 5px;
  flex-wrap: wrap;
  @media (min-width: 600px) {
    gap: 30px;
    margin-bottom: 40px;
  }
`;

const StyledSelect = styled.section`
  display: block;
  width: 100%;
  @media (min-width: 600px) {
    display: none;
  }
`;

const StyledMenuItem = styled(MenuItem)`
  font-family: "Poppins", sans-serif;
`;

const StyledFormControl = styled(FormControl)`
  width: 100%;
  color: white !important;
  border-bottom: white !important;
  .MuiSelect-root {
    color: white !important;
  }
  .MuiSelect-outlined {
    color: white !important;
  }

  .MuiSelect-iconOpen {
    color: white !important;
  }
  :checked {
    color: white !important;
    border-bottom: 1px solid white important;
  }
  :active {
    color: white !important;
    border-bottom: 1px solid white important;
  }
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
  onHandleTopic,
  question,
}) => {
  const questions = [
    { label: "Who are you?", onHandle: onHandleOne },
    { label: "Why web development?", onHandle: onHandleTwo },
    { label: "Do you have a Bachelor degree?", onHandle: onHandleThree },
    { label: "Tell me some personal things about you", onHandle: onHandleFour },
    { label: "So, what do you know?", onHandle: onHandleFive },
    { label: "Top soft skills?", onHandle: onHandleSeven },
    { label: "Super-powers?", onHandle: onHandleEight },
    { label: "What do you look in a company?", onHandle: onHandleNine },
  ];

  return (
    <Container>
      {questions.map((question) => {
        return (
          <ButtonColor onHandle={question.onHandle}>
            {question.label}
          </ButtonColor>
        );
      })}
      <StyledSelect sx={{ borderBottom: "1px solid white" }}>
        <StyledFormControl
          sx={{
            color: "white",
            borderBottom: "1px solid white",
          }}
          variant="standard"
        >
          <InputLabel
            sx={{
              color: "white",
              ".MuiInputLabel-root": {
                color: "white",
              },
            }}
            id="demo-simple-select-standard-label"
          >
            Questions
          </InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={question}
            onChange={onHandleTopic}
            label="Questions"
            sx={{ color: "white", borderBottom: "1px solid white" }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {questions.map((question) => {
              return (
                <StyledMenuItem value={question} onClick={question.onHandle}>
                  {question.label}
                </StyledMenuItem>
              );
            })}
          </Select>
        </StyledFormControl>
      </StyledSelect>
    </Container>
  );
};

export default Topics;
