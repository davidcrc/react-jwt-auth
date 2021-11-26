import { gql } from "@apollo/client";

export const SIG_IN = gql`
  mutation sigIn($email: String!, $password: String!) {
    signIn(email: $email, password: $password) {
      accessToken
    }
  }
`;
