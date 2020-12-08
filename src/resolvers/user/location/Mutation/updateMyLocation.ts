import { Location, Profile } from '../../../../models';
import cather from '../../../../wrappers/resolverCather';
import auth from '../../../../lib/checkAuth';

export default async (_: any, { location }: any, context: any) =>
  cather(
    async (user: any) => {
      const profile = await Profile.findOne({ user: user.id });
      if (!profile) return new Error('Bad Request');

      if (profile.user !== user.id) throw new Error('Bad Request');

      return Location.findOneAndUpdate({ profile: profile.id }, location, {
        new: true,
      });
    },
    context,
    auth,
  );
