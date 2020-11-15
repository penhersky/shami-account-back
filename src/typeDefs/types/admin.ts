import { gql } from 'apollo-server-express';

export default gql`
  type Admin {
    id: ID
    name: String
    email: String
    imageUrl: String
    state: String
    createdAt: String
    updatedAt: String
  }

  input CreateAdmin {
    name: String!
    email: String!
    imageUrl: String
    password: String!
    state: String
  }

  input UpdateAdmin {
    name: String
    email: String
    imageUrl: String
    password: String
    state: String
  }

  type AllAdmins {
    count: Int
    admins: [Admins]
  }

  type AdminLogin {
    admin: Admin
    token: String
  }

  union ResAdmin = Admin | Result
  union ResAdmins = AllAdmins | Result
  union ResAdminLogin = AdminLogin | Result
`;
