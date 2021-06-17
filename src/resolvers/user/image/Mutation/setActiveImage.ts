import { Image, User } from '../../../../models';
import cather from '../../../../wrappers/resolverCather';
import auth from '../../../../lib/checkAuth';

export default async (_: any, { id }: any, context: any) =>
  cather(
    async (user: any) => {
      const image = await Image.findById(id);
      if (!image)
        return {
          result: 'ERROR',
          status: 44,
          message: 'Such an image does not exist',
        };
      if (image.user !== user.id || user.type !== 'admin')
        return {
          result: 'ERROR',
          status: 30,
          message: 'Access denied',
          redirectTo: '/login/step1',
        };
      await User.updateMany({ user: id, active: true }, { active: false });
      await image.updateOne({ active: true });
      return {
        result: 'SUCCESS',
        status: 21,
        message: 'Active image changed successfully!',
        redirectTo: '/login/step1',
      };
    },
    context,
    auth,
  );
