import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

import { Admin } from '../../../models';
import { logError, logWarn } from '../../../lib/logger';
import { login } from '../../../lib/validation';
import {
  ADMIN_TOKEN_SECURITY_KEY,
  isDevelopment,
  ACCESS_SERVICE_SECURITY_TOKEN_KEY,
} from '../../../config';

export default async (_: any, args: any) => {
  try {
    const validationErr = await login(args);
    if (typeof validationErr === 'string') {
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
      'id name email state password imageUrl updatedAt createdAt',
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
      {
        id: admin.id,
        email: admin.email,
        state: admin?.state,
        name: admin.name,
        type: 'admin',
      },
      String(ADMIN_TOKEN_SECURITY_KEY),
      {
        expiresIn: isDevelopment ? '31d' : '3d',
      },
    );

    const serviceToken = jwt.sign(
      { id: admin?.id, status: admin?.state, type: 'admin' },
      String(ACCESS_SERVICE_SECURITY_TOKEN_KEY),
      {
        expiresIn: isDevelopment ? '31d' : '3d',
      },
    );

    return {
      result: 'SUCCESS',
      admin,
      token,
      serviceToken,
    };
  } catch (error) {
    logError(error);
    return { result: 'ERROR', message: 'Server Error' };
  }
};
