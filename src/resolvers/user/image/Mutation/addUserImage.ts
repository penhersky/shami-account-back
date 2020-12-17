import axios from 'axios';

import { User, Image } from '../../../../models';
import cather from '../../../../wrappers/resolverCather';
import auth from '../../../../lib/checkAuth';
import { SLS_URL } from '../../../../config';

export default async (_: any, { image }: any, context: any) =>
  cather(
    async (user: any) => {
      const owner = await User.findById(user.id);
      if (!owner) return new Error('Bad Request');

      const { createReadStream, filename, mimetype } = await image.image;

      const fileStream = createReadStream();

      const result = await axios.post(`${SLS_URL}/upload`, {
        file: fileStream,
        mine: mimetype,
        filename,
      });

      if (image.active)
        await Image.updateMany({ user: owner.id }, { active: false });

      return Image.create({
        user: owner.id,
        active: image?.active,
        Location: result.data?.Location,
        Etag: result.data?.Etag,
        Key: result.data?.Key,
      });
    },
    context,
    auth,
  );
