import { AppSetting } from '../../models';
import cather from '../../wrappers/resolverCather';
import auth from '../../lib/checkAuthAdmin';

export default async (_: any, { settings }: any, context: any) =>
  cather(async () => AppSetting.create(settings), context, auth);
