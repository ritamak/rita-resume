import { useReducer, useCallback } from "react";

const initialState = { message: null };

export const messageReducer = (state, action) => {
  switch (action.type) {
    case "one":
      return {
        message:
          "Hello! My name is Rita Mak and I'm a Portuguese Web developer",
      };
    case "two":
      return {
        message:
          "I have a background in Event Production but recently I found a new passion I didn't know I had'",
      };
    case "clear":
      return initialState;
    default:
      throw new Error();
  }
};

const useMessage = () => {
  const [state, dispatch] = useReducer(messageReducer, initialState);

  const clear = useCallback(() => dispatch({ type: "clear" }), []);

  return {
    data: state.message,
    clear: clear,
  };
};

export default useMessage;
