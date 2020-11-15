import { gql } from 'apollo-server-express';

export default gql`
  enum result {
    ERROR
    SUCCESS
  }
  type Result {
    result: result
    message: String!
    redirectTo: String!
  }
`;
