import { gql } from 'apollo-server-express';

export default gql`
  type Result {
    result: result!
    message: String!
    status: Int
    redirectTo: String
  }
  type FormResult {
    result: result!
    message: String!
    status: Int!
    redirectTo: String
    value: String
    fields: [String]
    token: String
  }

  type ResultWidthToken {
    result: result!
    status: Int!
    redirectTo: String
    token: String
  }

  type ResultWidthTokenAndUser {
    result: result!
    status: Int!
    redirectTo: String
    token: String
    user: User
  }
`;
