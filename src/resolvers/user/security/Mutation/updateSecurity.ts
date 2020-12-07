import { Security } from '../../../../models';
import cather from '../../../../wrappers/resolverCather';
import auth from '../../../../lib/checkAuthAdmin';

export default async (_: any, { id, profile: args }: any, context: any) =>
  cather(
    async () => {
      const security = await Security.findById(id);

      if (!security) throw new Error('Such security does`t exist!');

      const updatedSecurity = await Security.findByIdAndUpdate(args.id, args, {
        new: true,
      });

      return updatedSecurity;
    },
    context,
    auth,
  );
