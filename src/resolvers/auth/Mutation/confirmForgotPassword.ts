import bcrypt from 'bcrypt';

import { Security } from '../../../models';
import cather from '../../../wrappers/resolverCather';
import { registration } from '../../../lib/validation';
import { verify } from '../../../lib/token';

import { USER_TOKEN_SECURITY_KEY, SALT } from '../../../config';

export default async (_: any, args: any) =>
  cather(async () => {
    const data = verify(args.token, String(USER_TOKEN_SECURITY_KEY));
    if (
      typeof data === 'string' ||
      Number(data?.expiresIn) < Date.now() ||
      data?.codeResult !== 'SUCCESS'
    )
      return {
        result: 'ERROR',
        status: 48,
        message: 'Invalid expired!',
      };

    const validationErr = await registration.password({
      password: args.newPassword,
    });
    if (validationErr) return new Error(validationErr[0].message);

    const userSecurity = await Security.findOne({ user: data?.userId });
    if (!userSecurity)
      return {
        result: 'ERROR',
        status: 48,
        message: 'Invalid expired!',
      };

    const comparedPasswords = await bcrypt.compare(
      args.newPassword,
      userSecurity.password,
    );
    if (comparedPasswords)
      return {
        result: 'ERROR',
        status: 454,
        message: 'The old password is the same as the new one!',
      };

    const salt = await bcrypt.genSalt(Number(SALT));
    const hashPassword = await bcrypt.hash(args.newPassword, salt);

    await userSecurity.updateOne({
      password: hashPassword,
    });

    return {
      result: 'SUCCESS',
      status: 21,
      redirectTo: '/singIn/step1',
      message: 'Password updated successfully!',
    };
  });
