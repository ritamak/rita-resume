import React from "react";
import styled from "styled-components";

const StyledImage = styled.img`
  border-radius: 50%;
  border: 6px solid white;
  -webkit-box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 1);
  -moz-box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 1);
  box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 1);
  height: calc(40px + 2vmin);

  :hover {
    transform: scale(1.1);
  }

  @media (min-width: 600px) {
    border-radius: 50%;
    border: 6px solid white;
    -webkit-box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 1);
    -moz-box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 1);
    box-shadow: 2px 2px px 0px rgba(0, 0, 0, 1);
    height: calc(100px + 2vmin);
  }
`;

const PhotoRita = () => {
  return (
    <>
      <StyledImage
        src="https://media-exp1.licdn.com/dms/image/C4E03AQGcvQsKNIKuUw/profile-displayphoto-shrink_800_800/0/1624188853558?e=1637193600&v=beta&t=bIugkxGZsYCHbPF919i_4PPtjD_bmt36-BXzDfbOMAg"
        alt="Rita Mak"
      ></StyledImage>
    </>
  );
};

export default PhotoRita;
