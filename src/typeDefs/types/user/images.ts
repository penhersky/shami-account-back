import { gql } from 'apollo-server-express';

export default gql`
  scalar UploadImage

  type Image {
    id: ID!
    user: User
    Etag: String
    Key: String
    Location: String
    active: Boolean
    createdAt: String
    updatedAt: String
  }

  input CreateUserImage {
    image: UploadImage!
    active: Boolean
  }

  input CreateImage {
    Etag: String!
    Key: String!
    Location: String!
    active: Boolean
  }

  input UpdateImage {
    Etag: String
    Key: String
    Location: String
    active: Boolean
  }

  type Images {
    result: result
    totalItems: Int
    page: Int
    limit: Int
    totalPages: Int
    images: [Image]
  }

  type ResUserImage {
    result: result
    image: Image
  }

  extend type Query {
    # Only admins
    getImages(paginate: Paginate!): Images! # +
    getImage(id: ID!): Image! # +
  }

  extend type Mutation {
    # user
    addUserImage(image: CreateUserImage!): ResUserImage! # +
    setActiveImage(id: ID!): Result! # +
    # Only admins
    addImage(id: ID!, image: CreateImage!): Image! # +
    deleteImages(idArr: [ID!]!): Result! # +
    updateImage(id: ID!, image: UpdateImage!): Image! # +
  }
`;
