import jwt from 'jsonwebtoken';

import { logWarn } from './logger';
import { ADMIN_TOKEN_SECURITY_KEY } from '../config';

export const highSecurityCheck = (admin: any) =>
  admin?.name === 'root' || admin?.state === 'admin';

export default (context: any) => {
  try {
    const result = <string | any>(
      jwt.verify(
        context?.req?.headers['x-admin-security-token-x'],
        String(ADMIN_TOKEN_SECURITY_KEY),
      )
    );
    if (typeof result === 'string' || result?.type !== 'admin')
      throw new Error('Access denied');
    return result;
  } catch (error) {
    logWarn(error);
    return 'Access denied';
  }
};
