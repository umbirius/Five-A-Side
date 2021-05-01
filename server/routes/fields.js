import express from "express";
import { createField } from "../../client/src/api/fields.js";
import { getFields } from "../controllers/fields.js";

const router = express.Router();

router.get("/", getFields);
router.post("/", createField);

export default router;
