import bcrypt from 'bcrypt';

import { User } from '../../../models';
import cather from '../../../wrappers/resolverCather';
import { verify, createTempToken } from '../../../lib/token';

import { USER_TOKEN_SECURITY_KEY } from '../../../config';

export default async (_: any, args: any) =>
  cather(async () => {
    const data = verify(args.token, String(USER_TOKEN_SECURITY_KEY));
    if (typeof data === 'string' || Number(data?.expiresIn) < Date.now())
      return {
        result: 'ERROR',
        status: 48,
        message: 'Invalid expired!',
        redirectTo: '/singUp/step1',
      };

    const user = await User.findById(data?.userId);
    if (!user || !user.active)
      return {
        result: 'ERROR',
        status: 44,
        message: 'Invalid expired!',
        redirectTo: '/singUp/step1',
      };

    const result = await bcrypt.compare(args.code, String(data.code));
    if (!result)
      return {
        result: 'ERROR',
        status: 45,
      };

    const token = createTempToken(
      { userId: user?.id, codeResult: 'SUCCESS' },
      String(USER_TOKEN_SECURITY_KEY),
    );

    return {
      result: 'SUCCESS',
      status: 20,
      token,
      message: 'Registration was successful!',
    };
  });
