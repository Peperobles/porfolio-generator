import { combineReducers } from "redux";
import authReducer from "./authReducers";
import errorReducer from "./errorReducers";
import createPortfolioReducer from "./createPortfolioReducers";



import reducerNuevo from "./reducerNuevo"; // QUITAR CUANDOTODO FUNCIONE POR DIOS !!!!



export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  createPortfolio: createPortfolioReducer,

  nuevo: reducerNuevo // QUITAR CUANDOTODO FUNCIONE POR DIOS !!!!

});