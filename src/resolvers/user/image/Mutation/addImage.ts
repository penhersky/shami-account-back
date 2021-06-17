import { User, Image } from '../../../../models';
import cather from '../../../../wrappers/resolverCather';
import auth from '../../../../lib/checkAuthAdmin';

export default async (_: any, { id, image }: any, context: any) =>
  cather(
    async () => {
      const user = await User.findById(id);
      if (!user) return new Error('Bad Request');

      return Image.create({
        user: user.id,
        ...image,
      });
    },
    context,
    auth,
  );
