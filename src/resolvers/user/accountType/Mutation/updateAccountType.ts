import { AccountType } from '../../../../models';
import cather from '../../../../wrappers/resolverCather';
import auth from '../../../../lib/checkAuthAdmin';

export default async (_: any, { id, profile: args }: any, context: any) =>
  cather(
    async () => {
      const profile = await AccountType.findById(id);

      if (!profile) throw new Error('Such accountType does`t exist!');

      const updatedProfile = await AccountType.findByIdAndUpdate(
        args.id,
        args,
        {
          new: true,
        },
      );

      return updatedProfile;
    },
    context,
    auth,
  );
