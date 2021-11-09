import React from "react";
import Timer from "../components/Timer";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import styled from "styled-components";

const StyledCard = styled(Card)`
  max-width: 200px;
  padding: 20px;

  @media (min-width: 380px) {
    max-width: 310px;
  }

  @media (min-width: 580px) {
    max-width: 450px;
  }

  @media (min-width: 680px) {
    max-width: 550px;
  }

  @media (min-width: 680px) {
    max-width: 630px;
  }

  @media (min-width: 780px) {
    max-width: 700px;
  }

  @media (min-width: 1000px) {
    max-width: 1100px;
  }
`;

const StyledHeader = styled(Typography)`
  font-size: 4vw;
  line-height: 5vw;
  color: black;
  text-shadow: 1px 0px 1px #ccc, 0px 1px 1px #eee, 2px 1px 1px #ccc,
    1px 2px 1px #eee, 3px 2px 1px #ccc, 2px 3px 1px #eee, 4px 3px 1px #ccc,
    3px 4px 1px #eee, 5px 4px 1px #ccc, 4px 5px 1px #eee, 6px 5px 1px #ccc,
    5px 6px 1px #eee, 7px 6px 1px #ccc;
  @media (min-width: 600px) {
    margin-bottom: 0px;
  }
`;

const StyledBody = styled(Typography)`
  font-size: 3vw;
  display: -webkit-box;
  -webkit-line-clamp: 19;
  -webkit-box-orient: vertical;
  overflow: auto;
  max-height: 319px;
  text-align: justify;

  @media (min-width: 800px) {
    font-size: 1.5vw;
    -webkit-line-clamp: 10;
    max-height: 550px;
  }
`;

const StyledDate = styled(Typography)`
  font-size: 3vw;
  @media (min-width: 700px) {
    font-size: 1.5vw;
  }
`;

const StyledCardActions = styled(CardActions)`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0px;
`;

const StyledButton = styled(Button)`
  border: 1px solid black;
  width: 30%;
  height: 100%;
  a {
    color: black;
    text-decoration: none;
    font-size: 2vw;
  }

  @media (min-width: 700px) {
    a {
      font-size: 1vw;
    }
  }

  :hover {
    background: black !important;
  }

  &:hover a {
    color: white;
  }
`;

export default function Cards(props) {
  const {
    projectTitle,
    projectDescription,
    projectTime,
    link1,
    link1title,
    link2,
    link2title,
    link3,
    link3title,
  } = props;

  return (
    <StyledCard>
      <CardContent>
        <StyledHeader gutterBottom component="div">
          {projectTitle}
        </StyledHeader>
        <StyledDate gutterBottom component="div">
          <Timer date={projectTime} />
        </StyledDate>
        <StyledBody color="text.secondary">{projectDescription}</StyledBody>
      </CardContent>
      <StyledCardActions>
        <StyledButton size="large">
          <a href={link1} target="_blank" rel="noreferrer noopener">
            {link1title}
          </a>
        </StyledButton>
        <StyledButton size="large">
          <a href={link2} target="_blank" rel="noreferrer noopener">
            {link2title}
          </a>
        </StyledButton>
        {link3 && (
          <StyledButton size="large">
            <a href={link3} target="_blank" rel="noreferrer noopener">
              {link3title}
            </a>
          </StyledButton>
        )}
      </StyledCardActions>
    </StyledCard>
  );
}
