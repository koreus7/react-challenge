import { STORE_CONFIG } from "../ActionTypes";

const initialState = {
    apiUrl: undefined
};

const ConfigReducer = (state = initialState, action) => {
    switch(action.type) {
    case STORE_CONFIG:
      return {
        ...state,
        ...action.config
      };
    default:
      return state;
    }
  };
  
export default ConfigReducer;
