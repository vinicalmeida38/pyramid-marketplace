export interface IProductCart {
  id: number;
  products: {
    productId: string;
    image: string;
    name: string;
    price: string;
  };
}

export interface IProductCartComponent extends IProductCart {
  id?: number;
}
