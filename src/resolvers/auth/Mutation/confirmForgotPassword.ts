import bcrypt from 'bcrypt';

import { Security } from '../../../models';
import cather from '../../../wrappers/resolverCather';
import { registration } from '../../../lib/validation';
import verifyToken from '../../../lib/verifyToken';

import { USER_TOKEN_SECURITY_KEY, SALT } from '../../../config';

export default async (_: any, args: any) =>
  cather(async () => {
    const data = verifyToken(args.token, String(USER_TOKEN_SECURITY_KEY));
    if (typeof data === 'string' || Number(data?.expiresIn) < Date.now())
      return new Error('Invalid expired!');

    const validationErr = await registration.password({
      password: args.newPassword,
    });
    if (validationErr) return new Error(validationErr[0].message);

    const userSecurity = await Security.findOne({ user: data?.userId });
    if (!userSecurity) return new Error('Invalid expired!');

    const comparedPasswords = await bcrypt.compare(
      args.newPassword,
      userSecurity.password,
    );
    if (comparedPasswords)
      return new Error('The old password is the same as the new one');

    const salt = await bcrypt.genSalt(Number(SALT));
    const hashPassword = await bcrypt.hash(args.password, salt);

    await userSecurity.updateOne({
      password: hashPassword,
    });

    return {
      result: 'SUCCESS',
      message: 'Password updated successfully!',
    };
  });
