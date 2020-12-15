import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

export interface SettingsT extends mongoose.Document {
  style?: string;
  status?: string;
  active?: boolean;
}

const Schema = new mongoose.Schema(
  {
    style: {
      type: String,
      required: false,
      default: 'default',
    },
    status: {
      type: String,
      required: false,
      default: 'default',
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

interface Setting<T extends mongoose.Document>
  extends mongoose.PaginateModel<T> {}

const Model: Setting<SettingsT> = mongoose.model<SettingsT>(
  'appSetting',
  Schema,
) as Setting<SettingsT>;

export default Model;
