import { SET_PERSONAL_INFO } from "./types";

export const setPersonalInfo = payload => {
    return {
      type: SET_PERSONAL_INFO,
      payload
    };
  };
  
  export const sendPersonalInfo = personalInfo => dispatch => {
      dispatch(setPersonalInfo(personalInfo));
    };