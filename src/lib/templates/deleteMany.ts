import cather from '../../wrappers/resolverCather';
import auth from '../checkAuthAdmin';

export default (Model: any, key: string) => async (
  _: any,
  args: any,
  context: any,
) =>
  cather(
    async () => {
      await Model.deleteMany({
        _id: {
          $in: args?.idArr,
        },
      });

      return {
        result: 'SUCCESS',
        message: `${key}s deleted successful!`,
      };
    },
    context,
    auth,
  );
