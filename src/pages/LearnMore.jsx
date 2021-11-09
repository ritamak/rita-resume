import React, { useReducer } from "react";
import RitaTalking from "../components/RitaTalking";
import Topics from "../components/Topics";
import Layout from "../components/Layout";

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
          "Well, I was working in the event industy but suddenly I found myself at home, with no job and no clue of what to do next. Do nothing is never an option for me! That was when I started learning JavaScript by myself and through that I found a passion I didn't know I had! Later, I applied, enroled and completed ironhack's Web Development bootcamp in a total of 9 intense weeks. I don't have a Bachelor but I have passion, commitment and I'm deeply dedicated to become the best developer I can be",
      };
    case "three":
      return {
        message:
          "I have a passion for nature, I am an animal lover and a cooking enthusiast. In my free time I like to spend time with the people I love, enjoy concerts and all type of cultural events. I find very important to  take the time to care for myself, both mentally and physically, so I also try to workout as many day's a week as possible. I'm also a football fan and love to support Benfica.",
      };
    case "four":
      return {
        message:
          "JavaScript, React, (a little) TypeScript and Next.js, Gatsby, Node.js, MongoDB. I'm a native portuguese speaker but I'm very confortable with English. Due to my background, I'm a very organized person and a team player. I'm used to work under pressure and stress, communicate with clients and have fun along the way! Always!",
      };
    case "five":
      return {
        message: `For sure! You can find my at `,
      };
    case "clear":
      return initialMessageState;
    default:
      throw new Error();
  }
};

const LearnMore = () => {
  const [stateMessage, dispatchMessage] = useReducer(
    messageReducer,
    initialMessageState
  );

  return (
    <>
      <Layout>
        <Topics
          onHandleOne={() => dispatchMessage({ type: "one" })}
          onHandleTwo={() => dispatchMessage({ type: "two" })}
          onHandleThree={() => dispatchMessage({ type: "three" })}
          onHandleFour={() => dispatchMessage({ type: "four" })}
          onHandleFive={() => dispatchMessage({ type: "five" })}
        />
        <RitaTalking message={stateMessage.message} />
      </Layout>
    </>
  );
};

export default LearnMore;
