require("dotenv").config();

const createApp = require("./app");
const connectDB = require("./config/db");

async function startServer() {
  await connectDB();
  const app = await createApp();
  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}/graphql`);
  });
}

startServer();
