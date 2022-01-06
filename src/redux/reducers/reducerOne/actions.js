import { SET_NAME } from "./const";

export const setName = (payload) => {
  const normalPayload = payload.toLowerCase();
  return {
    type: SET_NAME,
    payload: normalPayload,
  };
};
