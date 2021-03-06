import React, { useReducer, useState, useEffect } from "react";
import ButtonSkip from "../components/ButtonSkip";
import RitaTalking from "../components/RitaTalking";
import Topics from "../components/Topics";
import Layout from "../components/Layout";
import TypingAndErasing from "../components/TypingAndErasing";

const initialMessageState = { message: "Hi! Ask me anything." };

const messageReducer = (state, action) => {
  switch (action.type) {
    case "one":
      return {
        message:
          "Hi there! My name is Rita Mak, I'm 29 years old and I'm a portuguese Web Developer with a background in Event Production (I used to be an event producer until the covid-19 appeared...)",
      };
    case "two":
      return {
        message:
          "Well, I was working in the event industy but suddenly I found myself at home, with no job and no clue of what to do next. Do nothing is never an option for me! That was when I discovered the wonderful world of web development. Istarted learning JavaScript by myself and through that I found a passion I didn't know I had! ",
      };
    case "three":
      return {
        message:
          "I became addicted to coding, so I applied, enroled and completed ironhack's Web Development bootcamp in a total of 9 intense weeks. I don't have a Bachelor but I have passion, commitment and I'm deeply dedicated to become the best developer I can be.",
      };
    case "four":
      return {
        message:
          "I have a passion for nature, I am an animal lover and a cooking enthusiast. In my free time I like to spend time with the people I love, enjoy concerts and all type of cultural events. I find very important to  take the time to care for myself, both mentally and physically, so I also try to workout as many day's a week as possible. I'm also a football fan and love to support Benfica.",
      };
    case "five":
      return {
        message: `JavaScript, React, (a little) TypeScript and Next.js, Gatsby, Node.js, MongoDB. I'm a native portuguese speaker but I'm very confortable with English. Due to my background, I'm a very organized person and a team player. I'm used to work under pressure and stress, communicate with clients and have fun along the way! Always! `,
      };
    case "seven":
      return {
        message:
          "I'm a problem-solver, very resilient, creative, hard-worker and a team player.",
      };
    case "eight":
      return {
        message:
          "Thinking and reacting on the spot (under pressure), solving problems, motivating others, organizing projects and activities.",
      };
    case "nine":
      return {
        message:
          "I look for good ethics, sense of community, teamwork, flexibility, and last but not least, a creative environment.",
      };
    default:
      throw new Error();
  }
};

const HomePage = () => {
  const [stateMessage, dispatchMessage] = useReducer(
    messageReducer,
    initialMessageState
  );
  const [showContent, setShowContent] = useState(false);
  const [question, updateQuestion] = useState([]);

  const handleTopicChange = (question) => {
    updateQuestion(question);
    console.log(question.target.value);
    console.log(question);
    console.log(question.target.value.label);
  };

  const contentHandler = () => {
    setShowContent(true);
  };

  useEffect(() => {
    let timeout = setTimeout(contentHandler, 7000);
    return () => clearTimeout(timeout);
  }, []);

  const handleTimeout = () => {
    setShowContent(true);
  };

  return (
    <>
      <Layout>
        {!showContent && (
          <>
            <TypingAndErasing />
            <ButtonSkip onHandleSkip={handleTimeout} title="skip" />
          </>
        )}
        {showContent && (
          <>
            <Topics
              onHandleOne={() => dispatchMessage({ type: "one" })}
              onHandleTwo={() => dispatchMessage({ type: "two" })}
              onHandleThree={() => dispatchMessage({ type: "three" })}
              onHandleFour={() => dispatchMessage({ type: "four" })}
              onHandleFive={() => dispatchMessage({ type: "five" })}
              onHandleSeven={() => dispatchMessage({ type: "seven" })}
              onHandleEight={() => dispatchMessage({ type: "eight" })}
              onHandleNine={() => dispatchMessage({ type: "nine" })}
              onHandleTopic={handleTopicChange}
              question={question?.target?.value?.label || ""}
            />
            {!question && <RitaTalking message={stateMessage.message} />}
            {question && <RitaTalking message={stateMessage.message} />}
          </>
        )}
      </Layout>
    </>
  );
};

export default HomePage;
