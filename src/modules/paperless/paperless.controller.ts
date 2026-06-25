import { Request, Response } from "express";
import { paperlessService } from "./paperless.service";

export class PaperlessController {
  search = async (req: Request, res: Response) => {
    try {
      const { query } = req.body;

      if (!query) {
        return res.status(400).json({
          error: "query is required",
        });
      }

      const result = await paperlessService.search(query);

      return res.json(result);
    } catch (error) {
      console.error(error);

      return res.status(500).json({
        error: "Internal server error",
      });
    }
  };
}

export const paperlessController = new PaperlessController();

