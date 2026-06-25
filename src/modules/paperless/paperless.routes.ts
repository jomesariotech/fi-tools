import { Router } from "express";
import { paperlessController } from "./paperless.controller";

const router = Router();

router.post("/search", paperlessController.search);

export default router;
