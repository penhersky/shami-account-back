import { Profile } from '../../../../models';
import cather from '../../../../wrappers/resolverCather';
import auth from '../../../../lib/checkAuth';

export default async (
  _: any,
  { categories: { categoriesId } }: any,
  context: any,
) =>
  cather(
    async (user: any) => {
      const profile = await Profile.findOne({ user: user.id });

      if (!profile) throw new Error('Bad request!');

      if (categoriesId.length > 3) throw new Error('Bad request!');

      await profile.updateOne({
        categoriesId,
      });
      return {
        result: 'SUCCESS',
        message: 'Updated successful!',
      };
    },
    context,
    auth,
  );
