import axios from 'axios';

import { logError } from './logger';
import { SLS_URL } from '../config';

export default async (
  forTitle: string,
  object: string,
  html: string,
  to: String[],
): Promise<undefined | String> => {
  try {
    const result = await axios.post(`${SLS_URL}/email`, {
      forTitle,
      object,
      html,
      to,
    });
    return result.status >= 400 ? result.data?.message : undefined;
  } catch (error) {
    logError(error?.message);
    throw new Error('Sending email Error');
  }
};
