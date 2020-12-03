import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

export interface UserType extends mongoose.Document {
  name: string;
  email: string;
  imageId?: string;
  provider: string;
  type?: string;
  active?: boolean;
}

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
    imageId: {
      type: mongoose.Types.ObjectId,
      ref: 'Image',
      required: false,
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
  },
  {
    timestamps: true,
  },
);

Schema.plugin(mongoosePaginate);

interface User<T extends mongoose.Document> extends mongoose.PaginateModel<T> {}

const Model: User<UserType> = mongoose.model<UserType>(
  'User',
  Schema,
) as User<UserType>;

export default Model;
