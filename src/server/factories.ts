import * as faker from "faker";
import { Factory } from "miragejs";
import { v4 as uuidv4 } from "uuid";
import { QUERY_CATEGORIES } from "../assets/constants";

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
      return faker.image.imageUrl(375, 375, "product", true);
    },
    price() {
      return faker.finance.amount(1, 5000, 2, "R$");
    },
    type() {
      const types = [
        QUERY_CATEGORIES.offer,
        QUERY_CATEGORIES.technology,
        QUERY_CATEGORIES.fornitures,
        QUERY_CATEGORIES.building,
        QUERY_CATEGORIES.healthcare,
        QUERY_CATEGORIES.homeAppliances,
      ];
      return faker.random.arrayElement(types);
    },
    offer() {
      return faker.datatype.boolean();
    },
  }),
};
export default factories;
