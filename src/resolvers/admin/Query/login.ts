import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

import { Admin } from '../../../models';
import { logError, logWarn } from '../../../lib/logger';
import validation from '../../../lib/validation';
import { ADMIN_TOKEN_SECURITY_KEY } from '../../../config';

export default async (_: any, args: any) => {
  try {
    const validationErr = await validation.login(args);
    if (typeof validation === 'string') {
      logWarn('admin login validation error', {
        message: validationErr,
        email: args.email,
      });
      return {
        result: 'ERROR',
        message: validationErr,
      };
    }

    const admin = await Admin.findOne({ email: args.email }).select(
      'id name email status password imageUrl updatedAt createdAt',
    );
    if (!admin) {
      logWarn('admin login find error', {
        email: args.email,
      });
      return {
        result: 'ERROR',
        message: 'Access denied',
      };
    }

    const passResult = await bcrypt.compare(args.password, admin.password);

    if (!passResult) {
      logWarn('admin login "password error"', {
        email: args.email,
      });
      return {
        result: 'ERROR',
        message: 'Access denied',
      };
    }

    const token = jwt.sign(
      { id: admin.id, email: admin.email, name: admin.name, type: 'admin' },
      String(ADMIN_TOKEN_SECURITY_KEY),
      {
        expiresIn: '1d',
      },
    );

    return {
      result: 'SUCCESS',
      admin: admin.toObject(),
      token,
    };
  } catch (error) {
    logError(error);
    return { result: 'ERROR', message: 'Server Error' };
  }
};
