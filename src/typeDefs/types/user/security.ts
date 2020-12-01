import { gql } from 'apollo-server-express';

export default gql`
  type Security {
    id: ID
    user: ID
    accessToken: String
    refreshToken: String
    createdAt: String
    updatedAt: String
  }

  input UpdatePassword {
    old: String!
    new: String
  }

  type Securitys {
    result: result
    count: Int
    Securitys: [Security]
  }

  extend type Query {
    # Only admins
    getSecurity(id: ID!): Security!
    getSecuritys: Securitys!
  }

  extend type Mutation {
    # only owner
    updatePassword(password: UpdatePassword): Result!
  }
`;
