import * as faker from "faker";
import { Factory } from "miragejs";
import { v4 as uuidv4 } from "uuid";

const factories = {
  product: Factory.extend({
    id() {
      return uuidv4();
    },
    name() {
      return faker.lorem.words();
    },
    description() {
      return faker.lorem.text();
    },
    image() {
      return faker.image.imageUrl(1000, 1000, "product", true);
    },
    price() {
      return faker.finance.amount(1, 5000, 2, "R$");
    },
  }),
};
export default factories;
