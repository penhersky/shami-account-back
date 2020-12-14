import { gql } from 'apollo-server-express';

export default gql`
  type Result {
    result: result!
    message: String!
    redirectTo: String
  }
  type FormResult {
    result: result!
    message: String!
    redirectTo: String
    value: String
    key: String
    fields: [String]
  }

  type LoginResult {
    result: result!
    status: string!
    redirectTo: String
    token: string
  }
`;
