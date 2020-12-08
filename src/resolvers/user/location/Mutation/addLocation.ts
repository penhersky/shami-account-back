import { Location, Profile } from '../../../../models';
import cather from '../../../../wrappers/resolverCather';
import auth from '../../../../lib/checkAuthAdmin';

export default async (_: any, { profile: id, location }: any, context: any) =>
  cather(
    async () => {
      const profile = await Profile.findById(id);
      if (!profile) return new Error('Bad Request');

      return Location.create({
        profile: profile.id,
        ...location,
      });
    },
    context,
    auth,
  );
