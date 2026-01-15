// TODO: Define la interfaz Product basándote en db.json
export interface Product {
  id: string,
  name: string,
  price: number,
  stock: number,
  image: string
}

// TODO: Define la interfaz CartItem (Extiende de Product e incluye quantity)
export interface CartItem {
  product: Product,
  quantity: number
}

export interface Order {
  orderLines: CartItem[],
  total: number
}