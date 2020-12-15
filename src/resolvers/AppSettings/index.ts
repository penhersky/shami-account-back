import { AppSetting } from '../../models';

import update from '../../lib/templates/update';
import getSettings from './getSettings';
import addSettings from './addSetings';

export default {
  Mutation: {
    updateSettings: update(AppSetting, 'settings'),
    addSettings,
  },
  Query: {
    getSettings,
  },
};
