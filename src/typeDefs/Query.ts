import { gql } from 'apollo-server-express';

export default gql`
  type Query {
    startLogin(email: String): LoginResult!
    finishLogin(token: String, password: String): LoginResult!
    _getSingUpUsersByInterval: [User]!
  }
`;
