import bcrypt from 'bcrypt';

import { Admin } from '../../../models';
import { logError, logWarn } from '../../../lib/logger';

export default async (_: any, args: any) => {
  try {
    const admin = await Admin.findOne({ email: args?.email });
    if (admin) {
      logWarn('Administrator with such mail already exists', {
        email: args.email,
      });
      return {
        result: 'ERROR',
        message: 'Administrator with such mail already exists',
      };
    }

    const salt = await bcrypt.genSalt(10);

    const passwordHash = await bcrypt.hash(args?.password, salt);

    const newAdmin = await Admin.create({
      email: args?.email,
      name: args?.name,
      imageUrl: args?.imageUrl,
      password: passwordHash,
      state: args?.state ?? 'junior',
    });

    return {
      result: 'SUCCESS',
      admin: newAdmin.toObject(),
    };
  } catch (error) {
    logError(error);
    return { result: 'ERROR', message: 'Server Error' };
  }
};
