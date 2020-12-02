import bcrypt from 'bcrypt';

import { User, Security, Profile, AccountType } from '../../../models';
import cather from '../../../wrappers/resolverCather';
import { registration } from '../../../lib/validation';
import verifyToken from '../../../lib/verifyToken';

import { USER_TOKEN_SECURITY_KEY, SALT } from '../../../config';

export default async (_: any, args: any) =>
  cather(async () => {
    const data = verifyToken(args.token, String(USER_TOKEN_SECURITY_KEY));
    if (typeof data === 'string' || Number(data?.expiresIn) < Date.now())
      return {
        result: 'ERROR',
        message: 'Invalid expired!',
      };

    const validationErr = await registration.password({
      password: args.password,
    });
    if (validationErr)
      return {
        result: 'ERROR',
        message: validationErr[0].message,
      };

    const user = await User.findByIdAndUpdate(data?.userId, {
      active: true,
    });
    if (!user)
      return {
        result: 'ERROR',
        message: 'Invalid expired!',
      };

    const salt = await bcrypt.genSalt(Number(SALT));
    const hashPassword = await bcrypt.hash(args.password, salt);

    await Security.create({
      user: user.id,
      password: hashPassword,
    });

    await Profile.create({
      user: user.id,
    });

    await AccountType.create({
      user: user.id,
    });

    return {
      result: 'SUCCESS',
      message: 'Registration was successful!',
    };
  });
