export interface IProductCart {
  id: number;
  productDetails: {
    productId: string;
    image: string;
    name: string;
    price: string;
  };
}

export interface IProductCartComponent extends IProductCart {
  id?: number;
}
