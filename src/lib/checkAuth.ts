import jwt from 'jsonwebtoken';

import { USER_TOKEN_SECURITY_KEY, ADMIN_TOKEN_SECURITY_KEY } from '../config';

export const isAuthUserOrAdmin = (context: any) => {
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
    return 'Access denied';
  } catch (error) {
    return 'Access denied';
  }
};

export default (context: any) => {
  const result = isAuthUserOrAdmin(context);
  if (typeof result === 'string') throw new Error('Access denied');
  if (result?.id) return result;
  throw new Error('Access denied');
};
