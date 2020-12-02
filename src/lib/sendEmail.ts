import axios from 'axios';

import { SLS_URL } from '../config';

export default async (
  forTitle: string,
  object: string,
  html: string,
  to: String[],
): Promise<undefined | String> => {
  const result = await axios.post(`${SLS_URL}/email`, {
    forTitle,
    object,
    html,
    to,
  });
  return result.status >= 400 ? result.data?.message : undefined;
};
