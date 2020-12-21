import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

export interface ContactType extends mongoose.Document {
  user: string;
  show: boolean;
  name: string;
  value: string;
  icon: string;
}

const Schema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
    },
    show: {
      type: Boolean,
      required: false,
      default: true,
    },
    name: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: false,
    },
    icon: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  },
);

Schema.plugin(mongoosePaginate);
interface Contact<T extends mongoose.Document>
  extends mongoose.PaginateModel<T> {}

const Model: Contact<ContactType> = mongoose.model<ContactType>(
  'Contact',
  Schema,
) as Contact<ContactType>;

export default Model;
