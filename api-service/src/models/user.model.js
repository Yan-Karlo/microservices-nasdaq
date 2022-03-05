/* eslint-disable linebreak-style */
const mongoose = require('mongoose');
const User = require('../domains/user.domain');
const { Schema } = mongoose;
const key = require('../../utils/key');

const UserSchema = new Schema({
  email: {
    type: String,
    trim: true,
    required: true,
  },
  role: {
    type: String,
    trim: true
  },
  password: {
    type: String,
    trim: true,
  },
},
{
  timestamps: true,
});

UserSchema.index({ email: 1 }, { unique: true });

UserSchema.pre('save', async function preSave(next) {
  let user = this;

  if (!this.isModified('password')) {
    return next();
  }

  try {
    user.password =  await key.generate()
    console.log(user.password);
    return next();
  } catch (error) {
    return next(error);
  }
})
module.exports = mongoose.model('User', UserSchema);
