import { Server } from "miragejs";

const pyramidRoutes = (context: Server): void => {
  context.namespace = "api";

  context.get("/products", (schema: any) => {
    return schema.products.all();
  });

  context.get("/products/:id", (schema: any, request) => {
    const productId = request.params.id;
    const productDetail = schema.products.find(productId) || null;
    return productDetail;
  });
};

export default pyramidRoutes;
