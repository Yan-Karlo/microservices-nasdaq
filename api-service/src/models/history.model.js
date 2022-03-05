/* eslint-disable linebreak-style */
const mongoose = require('mongoose');
const { Schema } = mongoose;
const key = require('../../utils/key');

const HistorySchema = new Schema({
  userId:  {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  name: {
    type: String,
    trim: true
  },
  symbol: {
    type: String,
    trim: true,
  },
  open: {
    type: String,
    trim: true,
  },
  high: {
    type: String,
    trim: true,
  },
  low: {
    type: String,
    trim: true,
  },
  close: {
    type: String,
    trim: true,
  },
},
{
  timestamps: true,
});

HistorySchema.index({ createdAt: -1 });
HistorySchema.index({ userId: 1 });
HistorySchema.index({ name: 1 });

module.exports = mongoose.model('History', HistorySchema);
