import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import { Security, User, Profile } from '../../../models';
import cather from '../../../wrappers/resolverCather';
import verifyToken from '../../../lib/verifyToken';

import { USER_TOKEN_SECURITY_KEY } from '../../../config';

export default async (_: any, args: any) =>
  cather(async () => {
    const data = verifyToken(args.token, String(USER_TOKEN_SECURITY_KEY));
    if (typeof data === 'string' || Number(data?.expiresIn) < Date.now())
      return new Error('Time for authorization has expired!');

    const user = await User.findOne({ _id: data.id, email: data.email });
    if (!user || !user.active)
      return {
        result: 'ERROR',
        status: 'USER NOT EXIST OR NOT ACTIVE',
        redirectTo: '/singUn/step1',
      };

    const security = await Security.findOne({ user: user.id });
    const profile = await Profile.findOne({ user: user.id });

    const result = await bcrypt.compare(
      args.password,
      String(security?.password),
    );
    if (!result)
      return {
        result: 'ERROR',
        status: 'BAD PASSWORD',
      };

    const token = jwt.sign(
      { id: user.id, email: user.email, profileId: profile?.id },
      String(USER_TOKEN_SECURITY_KEY),
      {
        expiresIn: '31d',
      },
    );

    return {
      result: 'SUCCESS',
      token,
      status: 'OK!',
    };
  });
