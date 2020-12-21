import jwt from 'jsonwebtoken';

import { Admin, User } from '../../../models';
import cather from '../../../wrappers/resolverCather';
import auth from '../../../lib/checkAuth';
import { ACCESS_SERVICE_SECURITY_TOKEN_KEY } from '../../../config';

export default async (_: any, args: any, context: any) =>
  cather(
    async (person: any) => {
      if (person.type === 'admin') {
        const admin = await await Admin.findById(person.id);
        const token = jwt.sign(
          { id: admin?.id, status: admin?.state, type: 'admin' },
          String(ACCESS_SERVICE_SECURITY_TOKEN_KEY),
          {
            expiresIn: '24h',
          },
        );
        return { admin, adminToken: token };
      }
      const user = await User.findById(person.id)
        .populate(['accountType'])
        .exec();
      const token = jwt.sign(
        {
          userId: user?.id,
          ...user?.accountType,
        },
        String(ACCESS_SERVICE_SECURITY_TOKEN_KEY),
        {
          expiresIn: '24h',
        },
      );
      return { user, userToken: token };
    },
    context,
    auth,
  );
