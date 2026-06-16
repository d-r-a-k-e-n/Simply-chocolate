import mongoose from 'mongoose';

const ResponseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
});

export const ResponseModel = mongoose.model('Response', ResponseSchema);
