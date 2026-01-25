Ecco un README sintetico per la tua app.

***

# Family Expense Tracker

Applicazione web single‑page (HTML + JavaScript) per la gestione delle spese familiari, pensata per l’uso da browser desktop e mobile e installabile come PWA su iPhone. [ppl-ai-file-upload.s3.amazonaws](https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/13588851/77d7f690-b1fe-4927-91df-6fbd0011d020/Family-Expense-Tracker-v8.html)

***

## Funzionalità principali

- **Multi‑utente famiglia**  
  - Gestione di più membri (es. Papà, Mamma, Figlio).  
  - Selettore di “utente corrente” per associare automaticamente le nuove transazioni al membro che sta usando l’app. [ppl-ai-file-upload.s3.amazonaws](https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/13588851/77d7f690-b1fe-4927-91df-6fbd0011d020/Family-Expense-Tracker-v8.html)

- **Gestione entrate e uscite**  
  - Tab separati “Aggiungi Uscita” e “Aggiungi Entrata”.  
  - Campi: importo, data, categoria, sottocategoria, membro, descrizione. [ppl-ai-file-upload.s3.amazonaws](https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/13588851/77d7f690-b1fe-4927-91df-6fbd0011d020/Family-Expense-Tracker-v8.html)

- **Categorie e sottocategorie da Excel**  
  - Upload Excel per categorie di **uscita** (Col A = categoria, Col B = sottocategoria).  
  - Upload Excel per categorie di **entrata** (formato analogo).  
  - Categorie e sottocategorie salvate in `localStorage` per uso offline. [stackoverflow](https://stackoverflow.com/questions/46910080/reading-excel-file-using-sheetjs-javascript)

- **Budget mensile per categoria/sottocategoria**  
  - Form dedicato con importo per ogni mese da Gennaio a Dicembre.  
  - Upload Excel per budget uscite con formato:  
    - Col A: Categoria  
    - Col B: Sottocategoria (opzionale)  
    - Col C: Mese (1–12 o Gen/Feb/…)  
    - Col D: Importo. [ppl-ai-file-upload.s3.amazonaws](https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/13588851/4bb9bef4-937a-4efc-9d36-16dbc3e267e8/paste.txt)

- **Dashboard**  
  - Totali mensili: entrate, uscite, saldo, budget rimanente.  
  - Avvisi budget (verde/giallo/rosso) in base alla % di budget utilizzato.  
  - Lista ultime transazioni. [ppl-ai-file-upload.s3.amazonaws](https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/13588851/77d7f690-b1fe-4927-91df-6fbd0011d020/Family-Expense-Tracker-v8.html)

- **Analitiche e grafici**  
  - Spese per categoria (doughnut) ordinate dalla più grande alla più piccola.  
  - Spese per sottocategoria (bar orizzontali).  
  - Andamento mensile spese (linea).  
  - Spese per utente nel mese (bar).  
  - Budget vs spese cumulate nell’anno (linea doppia).  
  - Filtro per mese e categoria. [wildnetedge](https://www.wildnetedge.com/blogs/fintech-ux-design-best-practices-for-financial-dashboards)

- **Insight e “coaching” finanziario**  
  - Insight testuale sul mese corrente: categoria principale, confronto con media ultimi 3 mesi, utente più “virtuoso”.  
  - Obiettivo mensile per il figlio (categoria e limite di spesa, con barre di stato e messaggi motivazionali). [ppl-ai-file-upload.s3.amazonaws](https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/13588851/4bb9bef4-937a-4efc-9d36-16dbc3e267e8/paste.txt)

- **Esportazione dati**  
  - Export in CSV filtrando per intervallo di date. [ppl-ai-file-upload.s3.amazonaws](https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/13588851/77d7f690-b1fe-4927-91df-6fbd0011d020/Family-Expense-Tracker-v8.html)

***

## Tecnologie usate

- **Frontend**: HTML, CSS, JavaScript vanilla.  
- **Persistenza locale**: `localStorage` per appData (membri, categorie, sottocategorie, transazioni, budget).  
- **Grafici**: [Chart.js 3.x]. [chartjs](https://www.chartjs.org/docs/latest/charts/bar.html)
- **Excel parsing**: SheetJS (XLSX, caricata via CDN o file locale). [docs.sheetjs](https://docs.sheetjs.com/docs/getting-started/installation/standalone/)

***

## Struttura del progetto

- `index.html` – pagina principale (UI + logica JS inline).  
- `manifest.webmanifest` – manifest PWA (nome, icone, colori, start_url).  
- `service-worker.js` – service worker per cache offline di base.  
- `icon-192.png`, `icon-512.png` – icone per PWA. [uxpin](https://www.uxpin.com/studio/blog/dashboard-design-principles/)

***

## Formato file Excel

### Categorie spese (uscite)

- **Foglio 1**  
  - Colonna A: Categoria (es. “Alimentari”)  
  - Colonna B: Sottocategoria (es. “Supermercato”)  

### Categorie entrate

- Stesso formato delle uscite, ma la logica le salva come tipo `income`. [ppl-ai-file-upload.s3.amazonaws](https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/13588851/77d7f690-b1fe-4927-91df-6fbd0011d020/Family-Expense-Tracker-v8.html)

### Budget uscite

- **Foglio 1**  
  - Colonna A: Categoria (deve corrispondere a una categoria di tipo uscita)  
  - Colonna B: Sottocategoria (opzionale; se vuota il budget si applica alla categoria intera)  
  - Colonna C: Mese (1–12 oppure stringhe tipo “Gen”, “Feb”, “Marzo”)  
  - Colonna D: Importo budget mensile (€). [stackoverflow](https://stackoverflow.com/questions/17761859/get-each-price-per-month-for-a-category)

***

## Uso su desktop

1. Apri `index.html` in un browser moderno (Chrome, Edge, Firefox, Safari).  
2. Carica le categorie da Excel nel tab **Categorie**.  
3. Imposta budget nel tab **Budget** (da form o da Excel).  
4. Registra spese/entrate nei tab **Aggiungi Uscita / Aggiungi Entrata**.  
5. Analizza i dati nel tab **Analitiche** ed esporta CSV dal tab **Esporta**.

I dati restano salvati nel `localStorage` del browser finché non vengono cancellati.

***

## Uso come PWA su iPhone

1. Pubblica i file (index, manifest, service worker, icone) su un hosting HTTPS (es. GitHub Pages). [justinmind](https://www.justinmind.com/ui-design/dashboard-design-best-practices-ux)
2. Su iPhone apri l’URL in **Safari**.  
3. Tocca il tasto **Condividi** → **Aggiungi a Home**.  
4. L’app apparirà con la sua icona sulla Home e si aprirà a schermo intero; la cache offline è gestita dal service worker (i dati restano in `localStorage`).

***

## Limitazioni note

- **Libreria XLSX su mobile**  
  - Richiede connessione (se usi il CDN).  
  - Su iOS è più affidabile usare la build `xlsx.full.min.js` o servire il file localmente anziché dal CDN. [docs.sheetjs](https://docs.sheetjs.com/docs/demos/local/file/)
- I dati sono **solo locali** al browser/dispositivo (nessuna sincronizzazione cloud fra device).
- Nessun controllo di accesso: l’app è progettata come strumento familiare “domestico”.

***
