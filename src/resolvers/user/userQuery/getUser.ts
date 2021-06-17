import { User } from '../../../models';
import cather from '../../../wrappers/resolverCather';

export default async (_: any, args: any) =>
  cather(async () => {
    const user = await User.findById(args.id);
    if (!user || user?.deleted)
      return {
        result: 'ERROR',
        status: 44,
      };
    return {
      status: 10,
      result: 'SUCCESS',
      user,
    };
  });
