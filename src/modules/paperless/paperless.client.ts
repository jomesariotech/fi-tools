import axios from "axios";
import { env } from "../../config/env";

export class PaperlessClient {
  private readonly client = axios.create({
    baseURL: env.paperless.url,
    headers: {
      Authorization: `Token ${env.paperless.token}`,
    },
  });

  async search(query: string) {
    const response = await this.client.get("/api/documents/", {
      params: {
        query,
      },
    });

    return response.data;
  }
}

export const paperlessClient = new PaperlessClient();
