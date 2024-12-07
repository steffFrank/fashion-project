import { UUIDTypes, v4 as uuidv4 } from "uuid";
import {
  IProduct,
  ProductType,
  ProductSize,
  ProductColor,
  ProductState,
  ProductGender,
} from "../interfaces/IProduct";
import { IClient } from "../interfaces/IClient";

export class Product implements IProduct {
  private static products: Product[] = []; // Arry per salvare i prodotti creati

  public readonly id: UUIDTypes; 
  public readonly type: ProductType;
  public readonly size: ProductSize;
  public readonly color: ProductColor;
  private state: ProductState;
  public readonly gender: ProductGender;

  constructor(
	type: ProductType,
	size: ProductSize,
	color: ProductColor,
	gender: ProductGender,
	state: ProductState = ProductState.AVAILABLE // Stato di default 
  ) {
	this.id = uuidv4();
	this.type = type;
	this.size = size;
	this.color = color;
	this.gender = gender;
	this.state = state;

	// Aggiungiamo ogni prodotto creato nell'array 
	Product.products.push(this);
  }

  // Getters per ottenere i valori degli attributi
  public getState(): ProductState {
	return this.state;
  }

	// Setter per cambiare lo stato di un prodotto
  public setState(newState: ProductState): void {
	if (
	  newState !== ProductState.AVAILABLE &&
	  newState !== ProductState.OUT_OF_STOCK
	) {
	  throw new Error("Stato non valido.");
	}
	this.state = newState;
  }

	// Metodo per assegnare un prodotto ad un cliente
  public assignClient(client: IClient): void {
	console.log(`Cliente ${client.firstname} assegnato al prodotto con ID: ${this.id}`);
  }

	// Metodo per visualizzare i dettagli di un prodotto
  public displayDetails(): string {
	return `
	==========================
		 Dettagli Prodotto
	==========================
	ID:          ${this.id}
	Tipo:        ${this.type}
	Taglia:      ${this.size}
	Colore:      ${this.color}
	Genere:      ${this.gender}
	Stato:       ${this.state}
	==========================
	`;
  }

  // Metodo per visualizzare tutti i prodotti creati
  public static displayAllProducts(): string {
	if (Product.products.length === 0) {
	  return "Non sono stati ancora creati prodotti.";
	}

	return Product.products.map((product) => product.displayDetails()).join("\n");
  }

  // Metodo statico per visualizzre i prodotti per attributo
  public static countProductsByAttribute(
	attribute: keyof Product
  ): Record<string, number> {
	const counts: Record<string, number> = {};

	for (const product of Product.products) {
	  const value = product[attribute].toString(); 
	  counts[value] = (counts[value] || 0) + 1; 
	}

	return counts;
  }

  // Metodo per creare multiple instanze di un prodotto
  public static createMultiple(
	type: ProductType,
	size: ProductSize,
	color: ProductColor,
	gender: ProductGender,
	state: ProductState = ProductState.AVAILABLE,
	quantity: number
  ): Product[] {
	if (quantity < 1 || quantity > 5) {
	  throw new Error(
		`La quantità deve essere compresa tra 1 e 5. Valore fornito: ${quantity}`
	  );
	}

	const createdProducts: Product[] = [];
	for (let i = 0; i < quantity; i++) {
	  const newProduct = new Product(type, size, color, gender, state);
	  createdProducts.push(newProduct);
	}
	return createdProducts;
  }

  // Metodo per cancellare tutti i prodotti creati 
  public static clearAllProducts(): void {
	Product.products = [];
	console.log("Tutti i prodotti sono stati rimossi.");
  }
}
