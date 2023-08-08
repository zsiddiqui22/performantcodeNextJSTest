import { combineReducers } from 'redux';

// Define your reducers and initial state here
// For example, a reducer for storing form data could be like this:
const formDataReducer = (state = {}, action) => {
  switch (action.type) {
    case 'UPDATE_FORM_DATA':
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  formData: formDataReducer,
  // Add other reducers here if needed
});

export default rootReducer;