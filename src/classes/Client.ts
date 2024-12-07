import { IClient } from "../interfaces/IClient";
import { IProduct, ProductState } from "../interfaces/IProduct";
import { validateName, validateEmail } from "../utils/validations";

export class Client implements IClient {
  public readonly orderedProducts: IProduct[] = []; // Lista dei prodotti ordinati

  constructor(
	public readonly firstname: string,
	public readonly lastname: string,
	public readonly email: string
  ) {
	// Validazione dei dati
	validateName(firstname, "Nome");
	validateName(lastname, "Cognome");
	validateEmail(email);

	console.log(
	  `Creazione utente riuscita:\nNome: ${this.getFullName()}\nEmail: ${this.email}\n`
	);
  }

  // Funzione per ordinare un prodotto
  public orderProduct(product: IProduct): void {
	if (product.getState() !== ProductState.AVAILABLE) {
	  console.log(
		`Errore: Il prodotto con ID ${product.id} non è disponibile e non può essere ordinato.`
	  );
	  return;
	}

	// Ci assicuriamo che un ordine non sia duplicato
	if (this.orderedProducts.find((p) => p.id === product.id)) {
	  console.log(
		`Errore: Il prodotto con ID ${product.id} è già stato ordinato.`
	  );
	  return;
	}

	this.orderedProducts.push(product);
	console.log(`Prodotto con ID ${product.id} ordinato da ${this.getFullName()}`);
  }

  // Funzione per ricavare il nome completo del cliente
  public getFullName(): string {
	return `${this.firstname} ${this.lastname}`;
  }

  // Funzione per visualizzare i prodotti ordinati
  public displayOrderedProducts(): void {
	if (this.orderedProducts.length === 0) {
	  console.log(`Nessun prodotto ordinato da ${this.getFullName()}`);
	  return;
	}

	console.log(`Prodotti ordinati da ${this.getFullName()}:`);
	this.orderedProducts.forEach((product) => {
	  console.log(product.displayDetails());
	});
  }
}
