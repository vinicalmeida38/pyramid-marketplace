export interface IProduct {
  id: string;
  image: string;
  description: string;
  name: string;
  price: string;
  type: string;
  offer: Boolean;
}

export interface IProductComponent extends IProduct {
  description?: string;
  type?: string;
  offer?: Boolean;
}
