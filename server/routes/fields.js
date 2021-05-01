import express from "express";
import { getFields, createField } from "../controllers/fields.js";

const router = express.Router();

router.get("/", getFields);
router.post("/", createField);

export default router;
