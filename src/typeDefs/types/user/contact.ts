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
    totalItems: Int
    page: Int
    limit: Int
    totalPages: Int
    Contacts: [Contacts]
  }

  extend type Query {
    # Only admins
    getContacts(paginate: Paginate!): Contacts! # +
    getContact(id: ID!): Contact! # +
  }

  extend type Mutation {
    # user
    addProfileContact(contact: CreateContact!): Contact! # +
    deleteContact(id: ID!): Result! # +
    # only admin
    addContact(profile: ID!, contact: CreateContact!): Contact! # +
    deleteContacts(idArr: [ID!]!): Result! # +
    # owner and admins
    updateContact(id: ID!, contact: UpdateContact!): Contact! # +
  }
`;
