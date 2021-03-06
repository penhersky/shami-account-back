import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

export interface UserType extends mongoose.Document {
  name: string;
  email: string;
  provider: string;
  type?: string;
  active?: boolean;
  firstName?: string;
  lastName?: string;
  middleName?: string;
  description?: string;
  birthday?: string;
  categoriesId?: [string];
  deleted?: boolean;
}

const maxLength = (val: Array<string>) => val.length < 3;

const Schema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      indexes: true,
      unique: true,
    },
    provider: {
      type: String,
      allowNull: false,
    },
    type: {
      type: String,
      enum: ['customer', 'performer'],
      default: 'performer',
    },
    active: {
      type: Boolean,
      required: false,
      default: false,
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
    deleted: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

Schema.index({
  email: 'text',
  name: 'text',
  firstName: 'text',
  lastName: 'text',
  middleName: 'text',
  description: 'text',
  birthday: 'text',
});

Schema.plugin(mongoosePaginate);

interface User<T extends mongoose.Document> extends mongoose.PaginateModel<T> {}

const Model: User<UserType> = mongoose.model<UserType>(
  'User',
  Schema,
) as User<UserType>;

export default Model;
