import { gql } from 'apollo-server-express';

export default gql`
  type Location {
    id: ID!
    user: User
    name: String
    lat: String
    lng: String
    createdAt: String
    updatedAt: String
  }

  input UpdateLocation {
    name: String
    lat: String
    lng: String
  }

  input CreateLocation {
    name: String
    lat: String
    lng: String
  }

  type Locations {
    result: result
    totalItems: Int
    page: Int
    limit: Int
    totalPages: Int
    locations: [Location]
  }

  extend type Query {
    getLocation(id: ID!): Location!
    getLocations(paginate: Paginate!): Locations!
  }

  extend type Mutation {
    addLocation(profile: ID!, location: CreateLocation): Result!
    deleteLocations(idArr: [ID!]!): Result!
    updateLocation(id: ID!, location: UpdateLocation!): Location!
    # user
    updateMyLocation(location: UpdateLocation!): Result!
  }
`;
