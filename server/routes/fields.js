import express from "express";
import { getFields } from '../controllers/fields.js'

const router = express.Router();

router.get("/", getFields)

export default router
