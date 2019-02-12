import { SET_PERSONAL_INFO } from "../actions/types";

const initialState = {
  personalInfo: "",
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_PERSONAL_INFO:
      return {
        ...state,
        personalInfo: action.payload
      };
    default:
      return state;
  }
}
