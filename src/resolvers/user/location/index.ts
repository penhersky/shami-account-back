import addLocation from './Mutation/addLocation';
import deleteLocations from './Mutation/deleteLocation';
import updateLocation from './Mutation/updateLocation';
import updateMyLocation from './Mutation/updateMyLocation';

import getLocation from './Query/getLocation';
import getLocations from './Query/getLocations';

export default {
  Mutation: {
    updateMyLocation,
    addLocation,
    updateLocation,
    deleteLocations,
  },
  Query: {
    getLocation,
    getLocations,
  },
};
