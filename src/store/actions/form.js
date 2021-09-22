export const ADD_SUBMISSION = 'ADD_SUBMISSION';

export const addSubmission = inputData => {
  return {type: ADD_SUBMISSION, newSubmission: inputData};
};
