import { Profile } from '../../../../models';
import cather from '../../../../wrappers/resolverCather';
import auth from '../../../../lib/checkAuthAdmin';

export default async (_: any, args: any, context: any) =>
  cather(
    async () => {
      await Profile.deleteMany({
        _id: {
          $in: args?.idArr,
        },
      });

      return {
        result: 'SUCCESS',
        message: 'Profile deleted successful!',
      };
    },
    context,
    auth,
  );
