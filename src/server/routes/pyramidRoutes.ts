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

  context.post("/shopping-cart", (schema: any, request) => {
    const content = JSON.parse(request.requestBody);
    if (!schema.shoppingCarts.find(content.id)) {
      return schema.shoppingCarts.create(content);
    }
  });

  context.get("/shopping-cart", (schema: any) => {
    return schema.shoppingCarts.all();
  });
};

export default pyramidRoutes;
