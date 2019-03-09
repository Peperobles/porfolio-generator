import { combineReducers } from "redux";
import authReducer from "./authReducers";
import errorReducer from "./errorReducers";
import createPortfolioReducer from "./createPortfolioReducers";






export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  createPortfolio: createPortfolioReducer,


});