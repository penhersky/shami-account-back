import addProfileContact from './Mutation/addProfileContact';
import addContact from './Mutation/addContact';
import updateContact from './Mutation/updateContact';
import deleteContacts from './Mutation/deleteContacts';

import getContact from './Query/getContact';
import getContacts from './Query/getContacts';

export default {
  Mutation: {
    addContact,
    addProfileContact,
    updateContact,
    deleteContacts,
  },
  Query: {
    getContact,
    getContacts,
  },
};
