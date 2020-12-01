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

  enum userType {
    customer
    performer
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
    count: Int
    users: [User]
  }

  type Performers {
    result: result
    count: Int
    users: [User]
  }

  extend type Query {
    getAccount: User!
    getCustomer(id: ID!): Customer!
    getCustomers: Customers!
    getPerformer(id: ID!): Performer!
    getPerformers: Performers!
  }

  # extend type Mutation {

  # }
`;
