import mongoose from 'mongoose';

const { Schema, model } = mongoose;

// Create Schema
const ItemSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  description:{
    type:String,
    required:true
  },
  publish_date: {
    type: Date,
    default: Date.now
  }
});

const Item = model('item', ItemSchema);

export default Item;
