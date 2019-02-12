import { SEND_NUEVO } from "../actions/types";

const initialState = {
  test: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SEND_NUEVO:
      return {
        ...state,
        test: action.payload
      };
    default:
      return state;
  }
}
