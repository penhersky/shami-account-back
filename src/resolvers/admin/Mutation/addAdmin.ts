import bcrypt from 'bcrypt';

import { Admin } from '../../../models';
import { logError } from '../../../lib/logger';

export default async (_: any, { admin: args }: any) => {
  try {
    const admin = await Admin.findOne({ email: args?.email });
    if (admin) throw new Error('Administrator with such mail already exists');

    const salt = await bcrypt.genSalt(10);

    const passwordHash = await bcrypt.hash(args?.password, salt);

    const newAdmin = await Admin.create({
      email: args?.email,
      name: args?.name,
      imageUrl: args?.imageUrl,
      password: passwordHash,
      state: args?.state ?? 'junior',
    });

    return newAdmin.toObject();
  } catch (error) {
    logError(error);
    return error;
  }
};
