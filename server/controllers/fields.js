import mongoose from "mongoose";
import Field from "../models/field.js";

export const getFields = async (req, res) => {
  try {
    const fields = await Field.find();

    res.status(200).json(fields);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const createField = async (req, res) => {
  const field = req.body;
  const newField = new Field(field);
  try {
    await newField.save();
    res.status(201).json(newField);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }

  res.send("Field created")

};
