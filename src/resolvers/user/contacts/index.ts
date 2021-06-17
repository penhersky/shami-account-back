import addProfileContact from './Mutation/addProfileContact';
import addContact from './Mutation/addContact';
import deleteContact from './Mutation/deleteContact';

import { Contact } from '../../../models';
import { getMany, getOne } from '../../../lib/templates/get';
import update from '../../../lib/templates/update';
import deleteMany from '../../../lib/templates/deleteMany';

export default {
  Mutation: {
    addContact,
    addProfileContact,
    deleteContact,
    updateContact: update(Contact, 'contact'),
    deleteContacts: deleteMany(Contact, 'contact'),
  },
  Query: {
    getContact: getOne(Contact),
    getContacts: getMany(Contact, 'contact'),
  },
};
