import { Security } from '../../../../models';
import cather from '../../../../wrappers/resolverCather';
import auth from '../../../../lib/checkAuthAdmin';

export default async (_: any, args: any, context: any) =>
  cather(
    async () => {
      await Security.deleteMany({
        _id: {
          $in: args?.idArr,
        },
      });

      return {
        result: 'SUCCESS',
        message: 'Security deleted successful!',
      };
    },
    context,
    auth,
  );
