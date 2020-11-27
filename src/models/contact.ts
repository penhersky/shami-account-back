import mongoose from 'mongoose';

export interface Contact extends mongoose.Document {
  profile: string;
  show: boolean;
  name: string;
  value: string;
  icon: string;
}

const ContactModel = mongoose.model<Contact>(
  'Contact',
  new mongoose.Schema(
    {
      profile: {
        type: mongoose.Types.ObjectId,
        ref: 'Profile',
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
  ),
);

export default ContactModel;
