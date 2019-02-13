import { SET_PERSONAL_INFO, SET_PORTFOLIO_INFO, SET_PROJECTS_INFO } from "../actions/types";

const initialState = {
  personalInfo: "",
  portfolioInfo: "",
  projectsInfo: "",
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_PERSONAL_INFO:
      return {
        ...state,
        personalInfo: action.payload
      };
    case SET_PORTFOLIO_INFO:
      return {
        ...state,
        portfolioInfo: action.payload
      };
    case SET_PROJECTS_INFO:
      return {
        ...state,
        projectsInfo: action.payload
      };
    default:
      return state;
  }
}
