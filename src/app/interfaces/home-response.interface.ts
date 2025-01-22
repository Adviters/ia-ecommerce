export interface HomeResponse {
  success: boolean;
  response: Product[];
}

export interface Product {
  nombre: string;
  descripcion: string;
  talle: number[];
  colores: string[];
  categoria: string;
  precio: string;
  stock: string;
  id: number;
}
