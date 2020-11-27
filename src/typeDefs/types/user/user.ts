import { gql } from 'apollo-server-express';

export default gql`
  type User {
    id: ID!
    name: String!
    email: String!
    imageId: String
    provider: String!
    type: userType
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
    user: [User]
  }

  # extend type Query {

  # }

  # extend type Mutation {

  # }
`;
