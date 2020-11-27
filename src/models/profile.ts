import mongoose from 'mongoose';

export interface Profile extends mongoose.Document {
  user: string;
  firstName: string;
  lastName: string;
  middleName: string;
  location: string;
  description: string;
  birthday: string;
  categoriesId: [string];
}

const maxLength = (val: Array<string>) => val.length > 3;

const ProfileModel = mongoose.model<Profile>(
  'Profile',
  new mongoose.Schema(
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
      },
    },
    {
      timestamps: true,
    },
  ),
);

export default ProfileModel;
