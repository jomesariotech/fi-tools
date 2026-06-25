import express from "express";

import paperlessRoutes from "./modules/paperless/paperless.routes";

const app = express();

app.use(express.json());

app.get("/health", (_, res) => {
  res.json({
    status: "ok",
    service: "fi-tools",
    version: "0.1.0",
  });
});

app.use("/paperless", paperlessRoutes);

export default app;
