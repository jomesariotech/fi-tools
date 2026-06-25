import { paperlessClient } from "./modules/paperless/paperless.client";

async function main() {
  const result = await paperlessClient.search("CURP");

  console.log(JSON.stringify(result, null, 2));
}

main().catch(console.error);
