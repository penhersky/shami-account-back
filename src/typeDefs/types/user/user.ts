import { gql } from 'apollo-server-express';

export default gql`
  type User {
    id: ID!
    name: String!
    email: String!
    provider: String!
    type: userType
    active: Boolean
    # profile
    firstName: String
    lastName: String
    middleName: String
    description: String
    birthday: String
    categoriesId: [String]
    images: [Image]
    contacts: [Contact]
    location: Location
    accountType: AccountType
    deleted: Boolean
    createdAt: String
    updatedAt: String
  }

  type Customer {
    user: User!
    security: Security # only admin
  }

  type Performer {
    user: User!
    security: Security # only admin
  }

  type Users {
    result: result
    totalItems: Int
    page: Int
    limit: Int
    totalPages: Int
    users: [User]
  }

  input UpdateUser {
    name: String!
    email: String!
    provider: String!
    type: userType
    active: Boolean
    firstName: String
    lastName: String
    middleName: String
    description: String
    birthday: String
    categoriesId: [String]
  }

  type AccountRes {
    result: result
    user: User
    admin: Admin
    userToken: String
    adminToken: String
    expiresIn: String
  }

  type UserRes {
    result: result
    status: Int
    user: User
  }

  input UpdateFullName {
    firstName: String
    lastName: String
    middleName: String
  }

  input UpdateCategories {
    categoriesId: [String]!
  }

  extend type Query {
    # user
    getAccount: AccountRes! # +
    getUser(id: ID!): UserRes! # +
    getUsersByCategoryId(id: ID!, type: userType, search: String): Users! # +
    findUsers(type: userType, search: String!): Users! # +
    # admin
    getCustomer(id: ID!): Customer! # +
    getPerformer(id: ID!): Performer! # +
    getCustomers(paginate: Paginate!): Users! # +
    getPerformers(paginate: Paginate!): Users! # +
  }

  extend type Mutation {
    # user
    updateFullName(fullName: UpdateFullName!): Result! # +
    updateDescription(description: String!): Result! # +
    updateBirthday(birthday: String!): Result! # +
    updateCategories(categories: UpdateCategories): Result! # +
    deleteAccount: Result!
    # admin
    updateUser(id: ID!, user: UpdateUser!): User! # +
    createUser(name: String!, email: String, password: String!): User! # +
    deleteUser(id: ID!): Result! # +
  }
`;
