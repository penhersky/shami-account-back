import { gql } from 'apollo-server-express';

export default gql`
  type User {
    id: ID!
    name: String!
    email: String!
    imageId: String
    provider: String!
    type: userType
    profile: Profile # owner, admins, authUsers ++-, other +--
    accountType: AccountType
    security: Security # only admin
    createdAt: String
    updatedAt: String
  }

  enum userType {
    customer
    performer
  }

  # input CreateUser {

  # }

  # input UpdateUser {

  # }

  type Users {
    result: result
    count: Int
    users: [User]
  }

  extend type Query {
    getUser(id: ID!): User!
    getUsers: Users!
  }

  # extend type Mutation {

  # }
`;
