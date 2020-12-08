import { gql } from 'apollo-server-express';

export default gql`
  type Security {
    id: ID!
    user: ID!
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
    totalItems: Int
    page: Int
    limit: Int
    totalPages: Int
    securitys: [Security]
  }

  extend type Query {
    # Only admins
    getSecurity(id: ID!): Security!
    getSecuritys(paginate: Paginate!): Securitys!
  }

  extend type Mutation {
    # only admins
    deleteSecuritys(idArr: [ID!]!): Result!
    updateSecurity(id: ID!, profile: UpdateProfile!): Security!

    # only owner
    updatePassword(password: UpdatePassword): Result!
  }
`;
