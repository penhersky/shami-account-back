import { gql } from 'apollo-server-express';

export default gql`
  type Profile {
    id: ID
    firstName: String
    lastName: String
    middleName: String
    location: String
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
    location: String
    description: String
    birthday: String
    categoriesId: [String]
  }

  input UpdateFullName {
    firstName: String
    lastName: String
    middleName: String
  }

  input UpdateLocation {
    location: String!
  }

  input UpdateCategories {
    categoriesId: [String]!
  }

  type Profiles {
    result: result
    count: Int
    profiles: [Profile]
  }

  extend type Query {
    getProfile(id: ID!): Profile!
    getProfiles: Profiles!
  }

  extend type Mutation {
    # Only admins
    updateProfile(profile: UpdateProfile!): Result!

    # Only owner
    updateFullName(fullName: UpdateFullName!): Result!
    updateLocation(location: UpdateLocation!): Result!
    updateDescription(description: String!): Result!
    updateBirthday(birthday: String!): Result!
    updateCategories(categories: UpdateCategories): Result!
  }
`;