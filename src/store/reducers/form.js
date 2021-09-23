import {inputFields as formFields} from '../../data/formFields.json';
import {ADD_SUBMISSION} from '../actions/form';

const initialState = {
  submissions: [],
  formFields,
};

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SUBMISSION:
      const newSubmissions = [...state.submissions, action.newSubmission];
      return {
        ...state,
        submissions: newSubmissions,
      };
  }

  return state;
};

export default formReducer;
