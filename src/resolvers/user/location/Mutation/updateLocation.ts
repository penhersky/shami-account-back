import { Location } from '../../../../models';
import cather from '../../../../wrappers/resolverCather';
import auth from '../../../../lib/checkAuth';

export default async (_: any, { id, location: args }: any, context: any) =>
  cather(
    async () => {
      const location = await Location.findById(id);

      if (!location) throw new Error('Such location does`t exist!');

      return Location.findByIdAndUpdate(args.id, args, {
        new: true,
      });
    },
    context,
    auth,
  );
