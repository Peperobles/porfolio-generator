import { SEND_NUEVO } from "./types";

export const setPrueba = payload => {
  return {
    type: SEND_NUEVO,
    payload
  };
};

export const sendAlgo = xd => dispatch => {
    dispatch(setPrueba(xd));
  };
  
