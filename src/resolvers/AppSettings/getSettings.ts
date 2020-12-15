import { AppSetting } from '../../models';

import cather from '../../wrappers/resolverCather';
import auth from '../../lib/checkAuthAdmin';

export default async (_: any, args: any, context: any) =>
  cather(async () => AppSetting.find(), context, auth);
