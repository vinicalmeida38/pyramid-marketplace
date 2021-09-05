import * as faker from "faker";
import { Factory } from "miragejs";

const factories = {
  product: Factory.extend({
    id() {
      return faker.datatype.number({ min: 100, max: 10000 });
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
