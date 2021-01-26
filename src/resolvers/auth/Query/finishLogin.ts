import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import { Security, User } from '../../../models';
import cather from '../../../wrappers/resolverCather';
import verifyToken from '../../../lib/verifyToken';

import { USER_TOKEN_SECURITY_KEY } from '../../../config';

export default async (_: any, args: any) =>
  cather(async () => {
    const data = verifyToken(args.token, String(USER_TOKEN_SECURITY_KEY));
    if (typeof data === 'string' || Number(data?.expiresIn) < Date.now())
      return {
        result: 'ERROR',
        status: 48,
        redirectTo: '/singUn/step1',
      };

    const user = await User.findOne({ _id: data.id, email: data.email });
    if (!user || !user.active)
      return {
        result: 'ERROR',
        status: 42,
        redirectTo: '/singUn/step1',
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
      token,
      status: 10,
    };
  });
