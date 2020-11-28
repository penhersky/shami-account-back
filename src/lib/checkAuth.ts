import jwt from 'jsonwebtoken';

import { logWarn } from './logger';
import { USER_TOKEN_SECURITY_KEY, ADMIN_TOKEN_SECURITY_KEY } from '../config';

export default (context: any) => {
  try {
    if (context?.req?.headers['x-admin-security-token-x']) {
      const result = <string | any>(
        jwt.verify(
          context?.req?.headers['x-admin-security-token-x'],
          String(ADMIN_TOKEN_SECURITY_KEY),
        )
      );
      if (typeof result !== 'string' && result?.type === 'admin') return result;
    }
    if (context?.req?.headers['x-user-security-token-x']) {
      const result = <string | any>(
        jwt.verify(
          context?.req?.headers['x-user-security-token-x'],
          String(USER_TOKEN_SECURITY_KEY),
        )
      );
      if (typeof result !== 'string') return result;
    }
    throw new Error('Access denied');
  } catch (error) {
    logWarn(error);
    return 'Access denied';
  }
};
