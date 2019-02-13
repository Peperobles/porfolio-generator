import { SET_PERSONAL_INFO, SET_PORTFOLIO_INFO, SET_PROJECTS_INFO } from "./types";

export const setPersonalInfo = payload => {
  return {
    type: SET_PERSONAL_INFO,
    payload
  };
};
export const setPorfolioInfo = payload => {
  return {
    type: SET_PORTFOLIO_INFO,
    payload
  };
};
export const setProjectsInfo = payload => {
  return {
    type: SET_PROJECTS_INFO,
    payload
  };
};

export const sendPersonalInfo = personalInfo => dispatch => {
  dispatch(setPersonalInfo(personalInfo));
};
export const sendPortfolioInfo = portfolioInfo => dispatch => {
  dispatch(setPorfolioInfo(portfolioInfo));
};
export const sendProjectsInfo = projectsInfo => dispatch => {
  dispatch(setProjectsInfo(projectsInfo));
};
