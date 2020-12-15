import { Profile } from '../../models';

export default {
  profile: (root: any) => Profile.findById(root.profile),
};
