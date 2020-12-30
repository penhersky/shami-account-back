import 'dotenv/config';
import {
  createTestClient,
  ApolloServerTestClient,
} from 'apollo-server-testing';
import { ApolloServer } from 'apollo-server-express';

import resolvers from '../../src/resolvers';
import typeDefs from '../../src/typeDefs';

import database from '../../src/database';

import {
  ADMIN_LOGIN,
  CREATE_USER,
  DELETE_USER,
  ADD_ADMIN,
  DELETE_ADMIN,
} from './query';

describe('@ user', () => {
  let token: string;
  let client: ApolloServerTestClient;
  let adminId: string;
  const adminData = {
    name: 'admin',
    email: 'admin@gmail.com',
    password: '123456',
    state: 'root',
  };

  beforeAll(async () => {
    const server = new ApolloServer({
      typeDefs,
      resolvers,
      dataSources: () => ({}),
      context: () => ({
        req: { headers: { 'x-admin-security-token-x': token }, res: {} },
      }),
    });

    database('mongodb://localhost:27017/test');
    client = createTestClient(server as any);
  });

  it('add admin', async () => {
    const admin = await client.mutate({
      mutation: ADD_ADMIN,
      variables: { admin: adminData },
    });
    expect(typeof admin).toEqual('object');
    expect(typeof admin.data).toEqual('object');
    expect(typeof admin.data.addAdmin.id).toEqual('string');
    adminId = admin.data.addAdmin.id;
  });

  it('admin login', async () => {
    const login = await client.query({
      query: ADMIN_LOGIN,
      variables: { email: adminData.email, password: adminData.password },
    });
    expect(typeof login).toEqual('object');
    expect(typeof login.data).toEqual('object');
    expect(typeof login.data.adminLogin.token).toEqual('string');
    token = login.data.adminLogin.token;
  });

  describe('user resolvers', () => {
    let userId: string;
    it('add user', async () => {
      const variables = {
        name: 'test',
        email: 'test@gmail.com',
        password: '123456',
      };
      const user = await client.mutate({
        mutation: CREATE_USER,
        variables,
      });
      expect(typeof user).toEqual('object');
      expect(typeof user.data).toEqual('object');
      expect(typeof user.data.createUser.id).toEqual('string');
      expect(String(user.data.createUser.email)).toEqual(variables.email);
      userId = user.data.createUser.id;
    });
    it('delete user', async () => {
      const user = await client.mutate({
        mutation: DELETE_USER,
        variables: {
          id: userId,
        },
      });
      expect(typeof user).toEqual('object');
      expect(typeof user.data).toEqual('object');
      expect(user.data.deleteUser.result).toEqual('SUCCESS');
    });
  });
  it('delete admin', async () => {
    const admin = await client.mutate({
      mutation: DELETE_ADMIN,
      variables: { idArr: [adminId] },
    });
    expect(typeof admin).toEqual('object');
    expect(typeof admin.data).toEqual('object');
    expect(admin.data.deleteAdmins.result).toEqual('SUCCESS');
  });
});
