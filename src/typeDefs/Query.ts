import { gql } from 'apollo-server-express';

export default gql`
  type Query {
    # @admin_queries
    adminLogin(email: String, password: String): ResAdminLogin!
    getAdmins(email: String, password: String): ResAdmins!
  }
`;
