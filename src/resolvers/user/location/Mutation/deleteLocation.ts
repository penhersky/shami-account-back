import { Location } from '../../../../models';
import cather from '../../../../wrappers/resolverCather';
import auth from '../../../../lib/checkAuthAdmin';

export default async (_: any, args: any, context: any) =>
  cather(
    async () => {
      await Location.deleteMany({
        _id: {
          $in: args?.idArr,
        },
      });

      return {
        result: 'SUCCESS',
        message: 'Locations deleted successful!',
      };
    },
    context,
    auth,
  );
