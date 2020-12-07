import { UserType } from './user';
import { TAccountType as AccountType } from './accountType';
import { SecurityT } from './security';
import { ProfileType } from './profile';
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
export type TSecurity = SecurityT;
export type TProfile = ProfileType;
export type TContact = Contact;

export type TAdmin = AdminType;
