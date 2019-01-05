import initialState from './initialState';

export const AUTH_REQUEST = 'LOAD_REPOS_SUCCESS';
export const AUTH_SUCCESS = 'LOAD_REPOS';
export const AUTH_ERROR = 'LOAD_REPOS_ERROR';

function appReducer(state = initialState, action) {
  switch (action.type) {
    case AUTH_REQUEST:
      return state;
    case AUTH_SUCCESS:
      return state;
    case AUTH_ERROR:
      return state;
    default:
      return state;
  }
}

export default appReducer;
