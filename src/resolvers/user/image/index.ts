import { Image } from '../../../models';
import { getMany, getOne } from '../../../lib/templates/get';
import update from '../../../lib/templates/update';
import deleteMany from '../../../lib/templates/deleteMany';

import addImage from './Mutation/addImage';
import addUserImage from './Mutation/addUserImage';
import setActiveImage from './Mutation/setActiveImage';

export default {
  Mutation: {
    addImage,
    addUserImage,
    updateImage: update(Image, 'image'),
    deleteImages: deleteMany(Image, 'image'),
    setActiveImage,
  },
  Query: {
    getImage: getOne(Image),
    getImages: getMany(Image, 'image'),
  },
};
