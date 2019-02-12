import { combineReducers } from "redux";
import authReducer from "./authReducers";
import errorReducer from "./errorReducers";
import reducerNuevo from "./reducerNuevo";



export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  nuevo: reducerNuevo
});