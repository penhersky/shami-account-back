import { gql } from 'apollo-server-express';

export default gql`
  type Query {
    login(email: String!, password: String!): ResultWidthTokenAndUser!
    verifyCode(token: String, code: String): ResultWidthToken
    _getSingUpUsersByInterval: [User]!
  }
`;
