import jwt from 'jsonwebtoken';

import { logWarn } from './logger';
import { USER_TOKEN_SECURITY_KEY } from '../config';

export default (context: any) => {
  try {
    const result = <string | any>(
      jwt.verify(
        context?.req?.headers['x-user-security-token-x'],
        String(USER_TOKEN_SECURITY_KEY),
      )
    );
    if (typeof result === 'string') throw new Error('Access denied');
    return result;
  } catch (error) {
    logWarn(error);
    return 'Access denied';
  }
};
