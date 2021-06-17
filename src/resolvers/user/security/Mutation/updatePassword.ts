import bcrypt from 'bcrypt';

import { Security } from '../../../../models';
import cather from '../../../../wrappers/resolverCather';
import auth from '../../../../lib/checkAuth';
import { SALT } from '../../../../config';

export default async (_: any, { password: args }: any, context: any) =>
  cather(
    async (user: any) => {
      const security = await Security.findOne({ user: user.id });
      if (!security)
        return { result: 'ERROR', message: 'Such security does`t exist!' };

      const result = await bcrypt.compare(args.old, security.password);
      if (!result)
        return { result: 'ERROR', message: 'The old password is incorrect!!' };

      if (args.old === args.new)
        return {
          result: 'ERROR',
          message: 'The new password is the same as the old one!',
        };

      const salt = await bcrypt.genSalt(Number(SALT));
      const hashPassword = await bcrypt.hash(args.password, salt);

      await Security.findByIdAndUpdate(
        args.id,
        {
          password: hashPassword,
        },
        {
          new: true,
        },
      );

      return {
        result: 'SUCCESS',
        message: 'Password changed successfully!',
      };
    },
    context,
    auth,
  );
