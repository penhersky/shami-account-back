import { User } from '../../../models';

const getUserByRootRef = async (root: any) => User.findById(root.user);

export default { getUserByRootRef };
