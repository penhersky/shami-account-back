import { Profile } from '../../../../models';
import cather from '../../../../wrappers/resolverCather';
import auth from '../../../../lib/checkAuthAdmin';

export default async (_: any, { id, profile: args }: any, context: any) =>
  cather(
    async () => {
      const profile = await Profile.findById(id);

      if (!profile) throw new Error('Such profile does`t exist!');

      const updatedProfile = await Profile.findByIdAndUpdate(id, args, {
        new: true,
      });

      return updatedProfile;
    },
    context,
    auth,
  );
