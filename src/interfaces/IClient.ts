import { IProduct } from "./IProduct";

export interface IClient {
	firstname: string;
	lastname:string;
	email:string;
	orderedProducts: IProduct[]; // Lista dei prodotti ordinati dal cliente
	orderProduct: (product: IProduct) => void;
	getFullName: () => string; // Metodo per ricavare il nome completo del cliente
}

