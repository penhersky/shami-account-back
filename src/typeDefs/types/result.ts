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
  }

  type LoginResult {
    result: result!
    status: Int!
    redirectTo: String
    token: String
  }
`;
