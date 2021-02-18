import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

import { User, Security } from '../../../models';
import cather from '../../../wrappers/resolverCather';
import { USER_TOKEN_SECURITY_KEY } from '../../../config';

export default async (_: any, args: any) =>
  cather(async () => {
    const user = await User.findOne({ email: args.email });
    if (!user || !user.active || user.deleted)
      return {
        result: 'ERROR',
        status: 42,
        redirectTo: '/singUn/step1',
      };

    if (user.provider !== 'email')
      return {
        result: 'ERROR',
        status: 41,
        redirectTo: '/singIn/providers',
      };

    const security = await Security.findOne({ user: user.id });

    const result = await bcrypt.compare(
      args.password,
      String(security?.password),
    );
    if (!result)
      return {
        result: 'ERROR',
        status: 45,
      };

    const token = jwt.sign(
      { id: user.id, email: user.email },
      String(USER_TOKEN_SECURITY_KEY),
    );

    return {
      result: 'SUCCESS',
      status: 10,
      redirectTo: '/login/step2',
      token,
      user,
    };
  });
