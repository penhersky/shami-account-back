import { gql } from 'apollo-server-express';

export default gql`
  type User {
    id: ID!
    name: String!
    email: String!
    image: String
    provider: String!
    type: userType
    active: Boolean
    profile: Profile # owner, admins, authUsers ++-, other +--
    accountType: AccountType
    createdAt: String
    updatedAt: String
  }

  type Customer {
    user: User!
    security: Security # only admin
  }

  type Performer {
    user: User!
    security: Security # only admin
  }

  type Customers {
    result: result
    totalItems: Int
    page: Int
    limit: Int
    totalPages: Int
    customers: [User]
  }

  type Performers {
    result: result
    totalItems: Int
    page: Int
    limit: Int
    totalPages: Int
    performers: [User]
  }

  type AccountRes {
    user: User
    admin: Admin
  }

  extend type Query {
    # user
    getAccount: AccountRes!
    getUser(id: ID!): User!
    # admin
    getCustomer(id: ID!): Customer! # +
    getPerformer(id: ID!): Performer! # +
    # all
    getCustomers(paginate: Paginate): Customers! # +
    getPerformers(paginate: Paginate): Performers! # +
  }

  extend type Mutation {
    deleteUser(id: ID!): Result!
  }
`;
