import { gql } from 'apollo-server-express';

export default gql`
  type Mutation {
    singUpCustomer(name: String, email: String): FormResult
    singUpPerformer(name: String, email: String): FormResult
    confirmRegistration(token: String, password: String): Result

    forgotPassword(email: String): FormResult
    changePassword(token: String, password: String): Result
  }
`;
