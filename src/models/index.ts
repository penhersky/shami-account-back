import { UserType } from './user';
import { AccountType } from './accountType';
import { Security } from './security';
import { Profile } from './profile';
import { Contact } from './contact';
import { AdminType } from './admin';

export { default as User } from './user';
export { default as AccountType } from './accountType';
export { default as Security } from './security';
export { default as Profile } from './profile';
export { default as Contact } from './contact';

export { default as Admin } from './admin';

export type TUser = UserType;
export type TAccountType = AccountType;
export type TSecurity = Security;
export type TProfile = Profile;
export type TContact = Contact;

export type TAdmin = AdminType;
