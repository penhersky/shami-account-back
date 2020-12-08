import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

export interface LocationT extends mongoose.Document {
  profile: string;
  name?: string;
  lat?: string;
  lng?: string;
}

const Schema = new mongoose.Schema(
  {
    profile: {
      type: mongoose.Types.ObjectId,
      ref: 'Profile',
    },
    name: {
      type: String,
      required: false,
    },
    lat: {
      type: String,
      required: false,
    },
    lng: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  },
);

Schema.plugin(mongoosePaginate);

interface Account<T extends mongoose.Document>
  extends mongoose.PaginateModel<T> {}

const Model: Account<LocationT> = mongoose.model<LocationT>(
  'Location',
  Schema,
) as Account<LocationT>;

export default Model;
