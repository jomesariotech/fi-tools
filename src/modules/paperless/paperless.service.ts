import { paperlessClient } from "./paperless.client";

export class PaperlessService {
  async search(query: string) {
    return paperlessClient.search(query);
  }
}

export const paperlessService = new PaperlessService();
