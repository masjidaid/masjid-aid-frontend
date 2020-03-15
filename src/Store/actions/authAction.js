/* eslint-disable import/prefer-default-export */
import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';

const client = new ApolloClient({
  uri: 'https://5d10f643.ngrok.io/graphql/'
});

// eslint-disable-next-line no-unused-vars
export const signUp = (credentials) => async (dispatch, getState) => {
  try {
    const signUpResponse = await client.mutate({
      mutation: gql`
        mutation createUser (${credentials}) {
          user{
              email
          }
        }
      `,
    });
    return dispatch({ type: 'SIGNUP_SUCCESS', signUpResponse });
  } catch (error) {
    return dispatch({ type: 'SIGNUP_FAILURE', error });
  }
};
