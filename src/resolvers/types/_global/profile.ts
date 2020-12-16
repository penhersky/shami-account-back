import { Profile } from '../../../models';

const getProfileByRootRef = async (root: any) => Profile.findById(root.profile);

export default { getProfileByRootRef };
