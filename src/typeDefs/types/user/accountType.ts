import { gql } from 'apollo-server-express';

export default gql`
  type AccountType {
    id: ID!
    user: User
    status: String!
    from: String!
    to: String
    createdAt: String
    updatedAt: String
  }

  input UpdateAccountType {
    status: String!
    from: String!
    to: String!
  }

  type AccountTypes {
    result: result
    totalItems: Int
    page: Int
    limit: Int
    totalPages: Int
    accounttypes: [AccountType]
  }

  extend type Query {
    # Only admins
    getAccountType(id: ID!): AccountType!
    getAccountTypes(paginate: Paginate!): AccountTypes!
  }

  extend type Mutation {
    # Only admins
    updateAccountType(id: ID!, accountType: UpdateAccountType!): AccountType!
    deleteAccountTypes(idArr: [ID!]!): Result!
  }
`;
