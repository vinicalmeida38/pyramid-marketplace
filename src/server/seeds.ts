import { Server } from "miragejs";

export default function seeds(server: Server) {
  createProduct(server);
}

function createProduct(server: Server) {
  server.createList("product", 25);
}
