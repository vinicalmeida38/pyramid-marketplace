import { Server } from "miragejs";
import { IProduct } from "../../components/Product/Product.d";

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

  context.get("/products/search", (schema: any, request) => {
    const foundProducts: IProduct[] = [];
    const userSearch = request.queryParams.q;
    const searchProducts = () => {
      schema.products.findBy((product: IProduct) => {
        if (product.name.includes(userSearch)) {
          foundProducts.push(product);
        }
      });
    };
    searchProducts();
    return foundProducts;
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
