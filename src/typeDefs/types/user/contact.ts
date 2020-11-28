import { gql } from 'apollo-server-express';

export default gql`
  type Contact {
    id: ID
    profile: ID
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

  input UpdateContact {
    name: String!
    value: String
    icon: String
    show: Boolean
  }

  type Contacts {
    result: result
    count: Int
    Contacts: [Contacts]
  }

  extend type Query {
    # Only admins
    getContacts(id: ID!): Contacts!
    getContact: Contact!
  }

  extend type Mutation {
    # only owner
    addContact(contact: CreateContact!): Contact!
    # owner and admins
    updateContact(contact: UpdateContact!): Result!
    deleteContacts(idArr: [ID!]!): Result!
  }
`;
