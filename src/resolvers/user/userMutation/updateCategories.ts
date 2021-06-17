import { User } from '../../../models';
import cather from '../../../wrappers/resolverCather';
import auth from '../../../lib/checkAuth';

export default async (_: any, { categories }: any, context: any) =>
  cather(
    async (authUser: any) => {
      await User.findByIdAndUpdate(authUser.id, {
        categories: categories.categoriesId,
      });

      return {
        result: 'SUCCESS',
        status: 21,
        message: 'Categories updated successful!',
      };
    },
    context,
    auth,
  );
