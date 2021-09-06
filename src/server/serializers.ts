import { RestSerializer } from "miragejs";

const serializers = {
  products: RestSerializer.extend({ include: ["list"], embed: true }),
  shoppingCarts: RestSerializer.extend({ embed: true }),
  checkouts: RestSerializer.extend({ include: ["list"], embed: true }),
};

export default serializers;
