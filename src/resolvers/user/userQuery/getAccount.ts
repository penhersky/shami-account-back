import jwt from 'jsonwebtoken';

import { Admin, User, AccountType } from '../../../models';
import cather from '../../../wrappers/resolverCather';
import auth from '../../../lib/checkAuth';
import {
  ACCESS_SERVICE_SECURITY_TOKEN_KEY,
  isDevelopment,
} from '../../../config';

export default async (_: any, args: any, context: any) =>
  cather(
    async (person: any) => {
      if (person.type === 'admin') {
        const admin = await Admin.findById(person.id);
        const token = jwt.sign(
          { id: admin?.id, status: admin?.state, type: 'admin' },
          String(ACCESS_SERVICE_SECURITY_TOKEN_KEY),
          {
            expiresIn: isDevelopment ? '31d' : '3d',
          },
        );
        return { admin, adminToken: token, result: 'SUCCESS' };
      }
      const user = await User.findById(person.id);
      if (!user || user?.deleted) return { result: 'ERROR' };
      const accountType = await AccountType.findOne({ user: person.id }).select(
        'from to status id',
      );

      const token = jwt.sign(
        {
          id: user?.id,
          account: accountType,
          type: user?.type,
        },
        String(ACCESS_SERVICE_SECURITY_TOKEN_KEY),
        {
          expiresIn: isDevelopment ? '31d' : '3d',
        },
      );
      return { user, userToken: token, result: 'SUCCESS' };
    },
    context,
    auth,
  );
