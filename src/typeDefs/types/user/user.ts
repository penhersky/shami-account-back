import { gql } from 'apollo-server-express';

export default gql`
  type User {
    id: ID!
    name: String!
    email: String!
    imageId: String
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

  extend type Query {
    # user
    getAccount: User!
    getUser(id: ID!): User!
    # admin
    getCustomer(id: ID!): Customer! # +
    getPerformer(id: ID!): Performer!
    # all
    getCustomers(page: Int, limit: Int, sort: sort, sortKey: String): Customers! # +
    getPerformers(
      page: Int
      limit: Int
      sort: sort
      sortKey: String
    ): Performers! # +
  }

  # extend type Mutation {

  # }
`;
