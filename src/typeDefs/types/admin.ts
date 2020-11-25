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
    id: ID!
    name: String
    email: String
    imageUrl: String
    password: String
    state: String
  }

  type Admins {
    result: result
    count: Int
    admins: [Admin]
  }

  type AdminLogin {
    result: result
    message: String
    redirectTo: String
    admin: Admin
    token: String
  }

  extend type Query {
    getAdmin(id: ID!): Admin!
    getAdmins: Admins!
    adminLogin(email: String, password: String): AdminLogin!
  }

  extend type Mutation {
    addAdmin(admin: CreateAdmin): Admin!
    updateAdmin(admin: UpdateAdmin): Admin!
    deleteAdmins(idArr: [ID!]!): Result!
  }
`;
