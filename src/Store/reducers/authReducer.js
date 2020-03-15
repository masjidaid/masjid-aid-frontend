const initState = {
  authError: null
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case 'SIGNUP_SUCCESS':
      console.log('signup success');
      return {
        ...state,
        authError: null
      };
    case 'SIGNUP_FAILURE':
      console.log('signup failed');
      return {
        ...state,
        authError: action.error
      };
    default:
      return state;
  }
};

export default authReducer;
