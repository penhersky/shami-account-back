import { gql } from 'apollo-server-express';

export default gql`
  type Contact {
    id: ID
    name: String
    value: String
    icon: String
    show: Boolean
    createdAt: String
    updatedAt: String
  }

  input CreateContact {
    name: String!
    value: String
    icon: String
    show: Boolean
  }

  extend type Mutation {
    addContact(contact: CreateContact): Contact!
    deleteContacts(idArr: [ID!]!): Result!
  }
`;
