import addLocation from './Mutation/addLocation';
import updateMyLocation from './Mutation/updateMyLocation';

import { Location } from '../../../models';
import { getMany, getOne } from '../../../lib/templates/get';
import update from '../../../lib/templates/update';
import deleteMany from '../../../lib/templates/deleteMany';

export default {
  Mutation: {
    updateMyLocation,
    addLocation,
    updateLocation: update(Location, 'location'),
    deleteLocations: deleteMany(Location, 'location'),
  },
  Query: {
    getLocation: getOne(Location),
    getLocations: getMany(Location, 'location'),
  },
};
