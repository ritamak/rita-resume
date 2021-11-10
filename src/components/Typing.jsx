import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { ThemeContext } from "../store/ThemeContext";

export default function Typing({ wordOne }) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [blink, setBlink] = useState(true);
  const [reverse, setReverse] = useState(false);

  const words = React.useMemo(() => [wordOne], [wordOne]);

  const Presentation = styled.h1`
    font-family: "Poppins", sans-serif;
    color: white !important;
    font-size: 4em;
    margin-bottom: 0px;
    @media (min-width: 600px) {
      font-size: 3em;
    }
  `;

  useEffect(() => {
    if (index === words.length) return;

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => prev + 1);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, Math.max(reverse ? 75 : subIndex === words[index].length ? 1000 : 150, parseInt(Math.random() * 350)));

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, words]);

  useEffect(() => {
    const timeout2 = setTimeout(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearTimeout(timeout2);
  }, [blink]);

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <>
      <Presentation darkMode={darkMode}>
        My {`${words[index].substring(0, subIndex)}${blink ? "|" : " "}`}
      </Presentation>
    </>
  );
}
