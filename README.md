# Sunnee Beachwear Model - TypeScript Project


Un progetto in TypeScript che modella la struttura operativa di un brand di beachwear sostenibile, Sunnee. Il sistema include la definizione di clienti, prodotti beachwear e processi di produzione sostenibile.

## 📋 Caratteristiche
- Modello di prodotto per articoli di beachwear (costumi, parei, cappelli) realizzati in plastica riciclata.
- Sistema di gestione clienti e assegnazione di prodotti.
- Simulazione dei processi di produzione sostenibile.

---

## 🛠️ Tecnologie Utilizzate
- **TypeScript** - Linguaggio di programmazione principale.
- **Node.js** - Runtime per eseguire il progetto.
- **UUID** - Per generare identificatori univoci.
- **Visual Studio Code (VSCode)** - Editor consigliato.

---

## 🚀 Installazione e Utilizzo

### Prerequisiti
- **Node.js**: Assicurati di aver installato Node.js (versione 14 o successiva). Puoi scaricarlo da [Node.js Official Website](https://nodejs.org/).
- **Git**: Per clonare il repository. Scarica Git da [Git Official Website](https://git-scm.com/).
- **Visual Studio Code (VSCode)**: Editor consigliato, scaricabile da [VSCode Official Website](https://code.visualstudio.com/).

---

### 1️⃣ Clona il Repository
Apri il terminale e digita:
```bash
git clone https://github.com/tuo-utente/sunnee-beachwear-model.git
cd sunnee-beachwear-model

npm install
npm run build
npm start


sunnee-beachwear-model/
│
├── src/               # Codice sorgente
│   ├── IProduct.ts    # Interfaccia per prodotti
│   ├── IClient.ts     # Interfaccia per clienti
│   ├── IProcessoProduzione.ts # Interfaccia per processi
│   └── main.ts        # File principale
│
├── dist/              # File compilati (generati dopo `npm run build`)
│
├── package.json       # Configurazione del progetto
├── tsconfig.json      # Configurazione TypeScript
└── README.md          # Documentazione
