import app from "../app.mjs";
import serverless from "serverless-http";

export const handler = serverless(app);

if (process.env.NODE_ENV !== "production") {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
}
