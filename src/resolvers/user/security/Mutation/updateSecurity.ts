import bcrypt from 'bcrypt';

import { Security } from '../../../../models';
import cather from '../../../../wrappers/resolverCather';
import auth from '../../../../lib/checkAuthAdmin';
import { SALT } from '../../../../config';

export default async (_: any, { id, security: args }: any, context: any) =>
  cather(
    async () => {
      const security = await Security.findById(id);

      if (!security) throw new Error('Such security does`t exist!');

      const salt = await bcrypt.genSalt(Number(SALT));
      const hashPassword =
        args.password && (await bcrypt.hash(args.password, salt));

      const { password, ...rest } = args;

      return Security.findByIdAndUpdate(
        security.id,
        {
          ...rest,
          password: hashPassword,
        },
        {
          new: true,
        },
      );
    },
    context,
    auth,
  );
