import jwt from 'jsonwebtoken';

import { User } from '../../../models';
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

    const date = new Date();
    date.setMinutes(date.getMinutes() + 20);

    const token = jwt.sign(
      { id: user.id, email: user.email, expiresIn: Number(date) },
      String(USER_TOKEN_SECURITY_KEY),
      {
        expiresIn: '6h',
      },
    );

    return {
      result: 'SUCCESS',
      status: 10,
      redirectTo: '/login/step2',
      token,
    };
  });
