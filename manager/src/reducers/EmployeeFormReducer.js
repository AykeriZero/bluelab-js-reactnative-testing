import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_CLEAR
} from '../actions/types';

const INITIAL_STATE = {
  name: '',
  phone: '',
  shift: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEE_CLEAR:
      return INITIAL_STATE;
    case EMPLOYEE_UPDATE:
      //action.payload = { prop, value }
      // square braces are called key interpolation
      return { ...state, [action.payload.prop]: action.payload.value };
    default:
      return state;
  }
};
