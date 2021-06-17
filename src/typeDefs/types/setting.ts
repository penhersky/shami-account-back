import { gql } from 'apollo-server-express';

export default gql`
  type AppSettings {
    id: ID!
    style: String!
    status: String!
    active: Boolean
    createdAt: String
    updatedAt: String
  }

  input UpdateSettings {
    style: String
    status: String
    active: Boolean
  }

  extend type Query {
    getSettings(id: ID!): AppSettings!
  }

  extend type Mutation {
    addSettings(settings: UpdateSettings!): AppSettings!
    updateSettings(id: ID!, settings: UpdateSettings!): AppSettings!
  }
`;
