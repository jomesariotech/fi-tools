import dotenv from "dotenv";

dotenv.config();

export const env = {
  port: Number(process.env.PORT ?? 3000),

  paperless: {
    url: process.env.PAPERLESS_URL ?? "",
    token: process.env.PAPERLESS_TOKEN ?? "",
  },
};
