import { Location, User } from '../../../../models';
import cather from '../../../../wrappers/resolverCather';
import auth from '../../../../lib/checkAuthAdmin';

export default async (_: any, { user: id, location }: any, context: any) =>
  cather(
    async () => {
      const user = await User.findById(id);
      if (!user) return new Error('Bad Request');

      return Location.create({
        user: user.id,
        ...location,
      });
    },
    context,
    auth,
  );
