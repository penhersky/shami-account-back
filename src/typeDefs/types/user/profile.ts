import { gql } from 'apollo-server-express';

export default gql`
  type Profile {
    id: ID!
    user: User!
    firstName: String
    lastName: String
    middleName: String
    location: Location
    description: String
    birthday: String
    categoriesId: [String]
    contacts: [Contact]
    createdAt: String
    updatedAt: String
  }

  input UpdateProfile {
    firstName: String
    lastName: String
    middleName: String
    description: String
    birthday: String
    categoriesId: [String]
  }

  input UpdateFullName {
    firstName: String
    lastName: String
    middleName: String
  }

  input UpdateCategories {
    categoriesId: [String]!
  }

  type Profiles {
    result: result
    totalItems: Int
    page: Int
    limit: Int
    totalPages: Int
    profiles: [Profile]
  }

  extend type Query {
    getProfile(id: ID!): Profile! # +
    getProfiles(paginate: Paginate!): Profiles! # +
  }

  extend type Mutation {
    # Only admins
    updateProfile(id: ID!, profile: UpdateProfile!): Profile! # +
    deleteProfiles(idArr: [ID!]!): Result! # +
    # Only owner
    updateFullName(fullName: UpdateFullName!): Result! # +
    updateDescription(description: String!): Result! # +
    updateBirthday(birthday: String!): Result! # +
    updateCategories(categories: UpdateCategories): Result! # +
  }
`;
