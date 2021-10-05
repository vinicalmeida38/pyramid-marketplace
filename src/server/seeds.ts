import { Server } from "miragejs";

export default function seeds(server: Server) {
  createProduct(server);
  createMockedProduct(server);
}

function createProduct(server: Server) {
  server.createList("product", 31);
}

function createMockedProduct(server: Server) {
  server.create("product", {
    description: "O Mouse Emborrachado Com Fio Usb Preto Multilaser",
    id: "3ae935fb-3604-4c43-bb03-627162f99242",
    image: "https://m.media-amazon.com/images/I/51WxLmtDyXL._AC_SL1000_.jpg",
    name: "Mouse Multilaser Emborrachado Preto Com Fio Usb - MO222",
    offer: false,
    price: "R$ 21.56",
    type: "technology",
  });
}
