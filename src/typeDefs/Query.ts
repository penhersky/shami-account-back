import { gql } from 'apollo-server-express';

export default gql`
  type Query {
    startLogin(email: string): string!
    finishLogin(token: string, password: string): string!
  }
`;
