import { gql } from 'apollo-server-express';

export default gql`
  type Mutation {
    # @admin_queries
    addAdmin(admin: CreateAdmin): ResAdmins!
  }
`;
