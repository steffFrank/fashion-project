import { Client } from "./classes/Client";
import { Product } from "./classes/Product";
import { ProcessProduction } from "./classes/ProcessProduction";
import {
  ProductType,
  ProductSize,
  ProductColor,
  ProductGender,
  ProductState,
} from "./interfaces/IProduct";
import { ProcessName } from "./interfaces/IProcessProduction";

// Step 1: Creazione Clienti
const client1 = new Client("Mario", "Rossi", "mario.rossi@example.com");
const client2 = new Client("Luigi", "Bianchi", "luigi.bianchi@example.com");

console.log("Clienti creati:");
console.log(`${client1.getFullName()} (${client1.email})`);
console.log(`${client2.getFullName()} (${client2.email})`);

// Step 2: Creazione Prodotti
console.log("\nCreazione prodotti singoli:");
const product1 = new Product(
  ProductType.SWIMSUIT,
  ProductSize.M,
  ProductColor.RED,
  ProductGender.FEMALE
);
const product2 = new Product(
  ProductType.HAT,
  ProductSize.L,
  ProductColor.BLUE,
  ProductGender.MALE
);

console.log(product1.displayDetails());
console.log(product2.displayDetails());

// Step 3: Creazione Multipla prodotto
console.log("\nCreazione multipla di prodotti:");
const products = Product.createMultiple(
  ProductType.PAREU,
  ProductSize.S,
  ProductColor.YELLOW,
  ProductGender.UNISEX,
  ProductState.AVAILABLE,
  3 // Ne creaimo 3
);
products.forEach((p) => console.log(p.displayDetails()));

// Step 4: I Clienti ordinano i prodotti
console.log("\nClienti effettuano ordini:");

client1.orderProduct(product1); // Success
client1.orderProduct(products[0]); // Success
client2.orderProduct(product2); // Success
client2.orderProduct(products[1]); // Success

console.log("\nProdotti ordinati da Mario Rossi:");
client1.displayOrderedProducts();

console.log("\nProdotti ordinati da Luigi Bianchi:");
client2.displayOrderedProducts();

// Step 5: Visualizazzione prodotti
console.log("\nVisualizzazione di tutti i prodotti creati:");
console.log(Product.displayAllProducts());

// Step 6: Conteggion prodotti per attributo
console.log("\nConteggio prodotti per attributo:");
console.log("Per colore:", Product.countProductsByAttribute("color"));
console.log("Per genere:", Product.countProductsByAttribute("gender"));

// Step 7: Crezione processi
console.log("\nCreazione di un processo di produzione:");
const production = new ProcessProduction(
  ProcessName.RELAX,
  "Produzione di articoli per il relax"
);
production.addProduct(product1); 
production.addProduct(product2); 
production.addProduct(products[2]); 

console.log("\nProdotti nel processo di produzione:");
console.log(production.listProducts());

// Step 8: Rimuovere un prodotto dalla produzione
console.log("\nRimuovo il prodotto 1 dalla produzione:");
production.removeProduct(product1.id);

console.log("\nProdotti nel processo di produzione dopo la rimozione:");
console.log(production.listProducts());

// Step 9: Reset
console.log("\nReset della lista di prodotti:");
Product.clearAllProducts();
console.log(Product.displayAllProducts());
