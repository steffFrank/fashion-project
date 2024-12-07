import { IProduct } from "./IProduct";

export enum ProcessName {
	RELAX = "Relax",
	ACTIVE = "Active",
	EXTREME = "Extreme",
}
export interface IprocessProduct {
	id: string;
	name: ProcessName;
	description: string;
	productsInProduction: IProduct[];
	addProduct: (product: IProduct) => void;
	removeProduct: (productId: string) => void; // Metodo per rimuovere un prodotto 
	listProducts: () => string; // Metodo per visualizzare tutti i prodotti in produzione
}