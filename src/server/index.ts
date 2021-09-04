import { createServer } from "miragejs";
import models from "./models";
import seeds from "./seeds";
import factories from "./factories";
import serializers from "./serializers";
import pyramidRoutes from "./routes/pyramidRoutes";

const startServer = () => {
  const server = createServer({
    models,
    seeds,
    factories,
    serializers,
    routes() {
      pyramidRoutes(this);
    },
  });

  return server;
};

export default startServer;
