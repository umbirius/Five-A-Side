import mongoose from "mongoose";
import Field from "../models/field.js";

export const getFields = async (req, res) => {
  try {
    const Fields = await Field.find();

    res.status(200).json(Fields);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
