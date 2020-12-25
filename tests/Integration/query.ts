import { gql } from 'apollo-server-express';

export const ADMIN_LOGIN = gql`
  query adminLogin($email: String!, $password: String!) {
    adminLogin(email: $email, password: $password) {
      result
      token
    }
  }
`;

export const ADD_ADMIN = gql`
  mutation addAdmin($admin: CreateAdmin!) {
    addAdmin(admin: $admin) {
      id
    }
  }
`;
export const DELETE_ADMIN = gql`
  mutation deleteAdmins($idArr: [ID!]!) {
    deleteAdmins(idArr: $idArr) {
      result
    }
  }
`;

export const CREATE_USER = gql`
  mutation createUser($name: String!, $email: String!, $password: String!) {
    createUser(name: $name, email: $email, password: $password) {
      id
      email
    }
  }
`;

export const DELETE_USER = gql`
  mutation deleteUser($id: ID!) {
    deleteUser(id: $id) {
      result
    }
  }
`;
