import { gql } from 'apollo-server-express';

export default gql`
  type Mutation {
    singUpCustomer(name: String, email: String): Result
    singUpPerformer(name: String, email: String): Result
    confirmRegistration(token: String, password: String): Result

    forgotPassword(email: String): Result
    changePassword(token: String, password: String): Result
  }
`;
