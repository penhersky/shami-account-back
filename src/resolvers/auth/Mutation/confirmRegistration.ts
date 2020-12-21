import bcrypt from 'bcrypt';

import { User, Security, AccountType, Location } from '../../../models';
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
        status: 48,
        message: 'Invalid expired!',
        redirectTo: '/singUp/step1',
      };

    const validationErr = await registration.password({
      password: args.password,
    });
    if (validationErr) return new Error(validationErr[0].message);

    const user = await User.findByIdAndUpdate(data?.userId, {
      active: true,
    });
    if (!user || user.active)
      return {
        result: 'ERROR',
        status: 48,
        message: 'Invalid expired!',
        redirectTo: '/singUp/step1',
      };

    const salt = await bcrypt.genSalt(Number(SALT));
    const hashPassword = await bcrypt.hash(args.password, salt);

    await Security.create({
      user: user.id,
      password: hashPassword,
    });

    const accountType = await AccountType.create({
      user: user.id,
    });

    await user.updateOne({
      accountType: accountType.id,
    });

    await Location.create({
      user: user.id,
    });

    return {
      result: 'SUCCESS',
      status: 20,
      message: 'Registration was successful!',
    };
  });
