import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

export interface ProfileType extends mongoose.Document {
  user: string;
  firstName?: string;
  lastName?: string;
  middleName?: string;
  location?: string;
  description?: string;
  birthday?: string;
  categoriesId?: [string];
}

const maxLength = (val: Array<string>) => val.length < 3;

const Schema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
    },
    firstName: {
      type: String,
      required: false,
    },
    lastName: {
      type: String,
      required: false,
    },
    middleName: {
      type: String,
      required: false,
    },
    location: {
      type: String,
      required: false,
    },
    description: {
      type: String,
      required: false,
    },
    birthday: {
      type: Date,
      required: false,
    },
    fonImageId: {
      type: String,
      required: false,
    },
    categoriesId: {
      type: [String],
      required: false,
      validate: [maxLength, '{PATH} length must be 3 or less'],
      default: [],
    },
  },
  {
    timestamps: true,
  },
);

Schema.plugin(mongoosePaginate);

interface Profile<T extends mongoose.Document>
  extends mongoose.PaginateModel<T> {}

const Model: Profile<ProfileType> = mongoose.model<ProfileType>(
  'Profile',
  Schema,
) as Profile<ProfileType>;

export default Model;
