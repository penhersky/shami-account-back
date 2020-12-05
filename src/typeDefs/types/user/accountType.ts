import { gql } from 'apollo-server-express';

export default gql`
  type AccountType {
    id: ID!
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
    count: Int
    accountTypes: [AccountType]
  }

  extend type Query {
    # Only admins
    getAccountType(id: ID!): AccountType!
    getAccountTypes: AccountTypes!
  }

  extend type Mutation {
    # Only admins
    updateUpdateAccountType(accountType: UpdateAccountType!): Result!
  }
`;
