import { gql } from 'apollo-server-express';

export default gql`
  enum result {
    ERROR
    SUCCESS
  }
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
`;
