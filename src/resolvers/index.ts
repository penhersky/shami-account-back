import resolveAdminUnion from './admin/resolveUnion';

export default {
  Query: {
    hello: () => 'The result was obtained successfully! Congratulations!',
  },
  ...resolveAdminUnion,
};
