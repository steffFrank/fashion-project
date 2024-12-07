import { IprocessProduct, ProcessName } from "../interfaces/IProcessProduction"
import { IProduct } from "../interfaces/IProduct";
import { UUIDTypes, v4 as uuidv4 } from "uuid";

export class ProcessProduction implements IprocessProduct {
  public readonly id: UUIDTypes;
  public readonly name: ProcessName;
  public readonly description: string;
  private productsInProduction: IProduct[] = [];

  constructor(name: ProcessName, description: string) {
    this.id = uuidv4();
    this.name = name;
    this.description = description;
  }

  // Method to add a product to the production list
  public addProduct(product: IProduct): void {
    if (!product || !product.id) {
      console.log(`Errore: Prodotto non valido nel processo "${this.name}".`);
      return;
    }
    // Se un prodotto e' gia' in produzione non lo aggiungiamo piu
    if (this.productsInProduction.find((p) => p.id === product.id)) {
      console.log(
        `Errore: Il prodotto con ID ${product.id} è già in produzione nel processo "${this.name}".`
      );
      return;
    }

    this.productsInProduction.push(product);
    console.log(`Prodotto con ID ${product.id} aggiunto al processo "${this.name}".`);
  }

  // Method to remove a product from the production list by ID
  public removeProduct(productId: UUIDTypes): void {
    const index = this.productsInProduction.findIndex((p) => p.id === productId);

    if (index === -1) {
      console.log(`Errore: Nessun prodotto trovato con ID ${productId} nel processo "${this.name}".`);
      return;
    }

    this.productsInProduction.splice(index, 1);
    console.log(`Prodotto con ID ${productId} rimosso dal processo "${this.name}".`);
  }

  // List all products in production with process name
  public listProducts(): string {
    if (this.productsInProduction.length === 0) {
      return `Processo "${this.name}" - Nessun prodotto in produzione al momento.`;
    }

    const processHeader = `
    ==========================
         Processo Produzione
    ==========================
    ID Processo:    ${this.id}
    Nome Processo:  ${this.name}
    Descrizione:    ${this.description}
    ==========================
    `;

    const productDetails = this.productsInProduction
      .map((product) => product.displayDetails())
      .join("\n");

    return `${processHeader}\n${productDetails}`;
  }
}
