import app from "./app";
import { env } from "./config/env";

app.listen(env.port, () => {
  console.log("==================================");
  console.log("🚀 Fi Tools");
  console.log(`🌐 Listening on port ${env.port}`);
  console.log("==================================");
});
