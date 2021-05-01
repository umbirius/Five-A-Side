import mongoose from "mongoose";

const fieldSchema = new mongoose.Schema({
  name: String,
  location: { name: String, lat: Number, lng: Number },
  cost: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
  rating: {
    type: Number,
    default: 0,
  },
});

const Field = mongoose.model("Field", fieldSchema);

export default Field;
