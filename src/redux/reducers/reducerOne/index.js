import { SET_NAME } from "./const";

const initialState = {
  name: "",
};

export const reducerOne = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_NAME:
      return {
        ...state,
        name: payload,
      };
    default:
      return state;
  }
};
