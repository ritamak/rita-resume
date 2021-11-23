import React from "react";
import Timer from "../components/Timer";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import styled from "styled-components";

const StyledCard = styled(Card)`
  width: 80%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledHeader = styled(Typography)`
  font-size: 3em !important;
  line-height: 1em !important;
  color: black;
  text-shadow: 1px 0px 1px #ccc, 0px 1px 1px #eee, 2px 1px 1px #ccc,
    1px 2px 1px #eee, 3px 2px 1px #ccc, 2px 3px 1px #eee, 4px 3px 1px #ccc,
    3px 4px 1px #eee, 5px 4px 1px #ccc, 4px 5px 1px #eee, 6px 5px 1px #ccc,
    5px 6px 1px #eee, 7px 6px 1px #ccc;
  @media (min-width: 600px) {
    margin-bottom: 0px;
    font-size: 2em !important;
  }
`;

const StyledBody = styled(Typography)`
  font-size: 3vw !important;
  display: -webkit-box;
  -webkit-line-clamp: 19;
  -webkit-box-orient: vertical;
  overflow: auto;
  max-height: 319px;
  text-align: justify;

  @media (min-width: 800px) {
    font-size: 1.5vw !important;
    -webkit-line-clamp: 10;
    max-height: 550px;
  }
`;

const StyledDate = styled(Typography)`
  font-size: 2vw !important;
  @media (min-width: 700px) {
    font-size: 1.5vw !important;
  }
`;

const StyledCardActions = styled(CardActions)`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0px;
`;

const StyledLink = styled.a`
  border: 1px solid black;
  width: 30%;
  height: 100%;
  color: black;
  text-decoration: none;
  font-size: 2em !important;

  @media (min-width: 700px) {
    font-size: 0.8em !important;
  }

  :hover {
    background: black !important;
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
        <StyledLink href={link1} target="_blank" rel="noreferrer noopener">
          {link1title}
        </StyledLink>
        <StyledLink href={link2} target="_blank" rel="noreferrer noopener">
          {link2title}
        </StyledLink>
        {link3 && (
          <StyledLink href={link3} target="_blank" rel="noreferrer noopener">
            {link3title}
          </StyledLink>
        )}
      </StyledCardActions>
    </StyledCard>
  );
}
