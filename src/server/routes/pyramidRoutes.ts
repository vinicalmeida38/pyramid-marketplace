import { Server } from "miragejs";
import { QUERY_CATEGORIES } from "../../assets/constants";
import { IProduct } from "../../components/Product/Product.d";

const pyramidRoutes = (context: Server): void => {
  context.namespace = "api";
  let products: Array<String> = [];

  context.get("/products", (schema: any) => {
    return schema.products.all();
  });

  context.get("/products/:id", (schema: any, request) => {
    const productId = request.params.id;
    const productDetail = schema.products.find(productId);
    return productDetail;
  });

  context.get("/products/search", (schema: any, request) => {
    let foundProducts: IProduct[] = [];
    const userSearch = request.queryParams.q;
    const searchProducts = () => {
      foundProducts = [];
      schema.products.findBy((product: IProduct) => {
        if (product.name.includes(userSearch)) {
          foundProducts.push(product);
        }
      });
    };
    searchProducts();
    return foundProducts;
  });

  context.get("/products/category", (schema: any, request) => {
    let foundProducts: IProduct[] = [];
    const userCategory = request.queryParams.q;
    const searchProducts = () => {
      foundProducts = [];
      schema.products.findBy((product: IProduct) => {
        const searchFilter =
          userCategory === QUERY_CATEGORIES.offer
            ? product.offer === true
            : product.type === userCategory;

        if (searchFilter) {
          foundProducts.push(product);
        }
      });
    };
    searchProducts();
    return foundProducts;
  });

  context.post("/shopping-cart", (schema: any, request) => {
    const content = JSON.parse(request.requestBody);
    if (!products.includes(content.id)) {
      products.push(content.id);
      return schema.shoppingCarts.create({ productDetails: content });
    }
  });

  context.get("/shopping-cart", (schema: any) => {
    return schema.shoppingCarts.all();
  });

  context.del("/shopping-cart", (schema: any, request) => {
    return schema.shoppingCarts.all().destroy();
  });

  context.post("/checkout", (schema: any, request) => {
    const content = JSON.parse(request.requestBody);
    return schema.checkouts.create(content);
  });
};

export default pyramidRoutes;
