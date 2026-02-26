# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

## Formuláře – odesílání na e-mail (Formspree)

Všechny kontaktní formuláře na webu (stránka Kontakt, sekce na homepage, imaLOCKER Mobile) odesílají data na váš e-mail přes službu [Formspree](https://formspree.io).

**Nastavení:**

1. Jděte na [formspree.io](https://formspree.io), zaregistrujte se (zdarma).
2. Vytvořte nový formulář („New form“).
3. Ověřte e-mail, na který chcete dostávat zprávy (např. **jsem@vratnicheck.cz** nebo **josef.purnoch@ima.cz**).
4. Zkopírujte **Form ID** – v URL formuláře je to část za `/f/`, např. `mzbjnpae`.
5. Nastavte proměnnou prostředí:
   - **Lokálně:** vytvořte v adresáři `app/` soubor `.env` (viz `app/.env.example`) a přidejte:
     ```
     VITE_FORMSPREE_FORM_ID=vas_form_id
     ```
   - **Na Vercelu:** Project → Settings → Environment Variables → přidejte `VITE_FORMSPREE_FORM_ID` s hodnotou vašeho Form ID. Po změně env znovu nasaďte (Redeploy).

Bez nastaveného Form ID formuláře zobrazí chybu „Formulář není nakonfigurován“. Na doméně **www.vratnicheck.cz** tedy nezapomeňte nastavit env proměnnou v hostingu (Vercel / jiný).

---

## Nasazení na Vercel (vratnicheck.tomaskalivoda.cz)

1. **Vercel**
   - Repozitář připojte na [vercel.com](https://vercel.com) (Import Git Repository).
   - **Root Directory** nastavte na `app` (pokud je projekt v podadresáři `verze2/app`).
   - Build a výstup Vercel detekuje z `vercel.json` (Vite, SPA rewrites).
   - Po nasazení získáte adresu typu `*.vercel.app`.

2. **Vlastní doména v Cloudflare**
   - Vercel: Project → Settings → Domains → Add `vratnicheck.tomaskalivoda.cz`.
   - V **Cloudflare** (DNS pro tomaskalivoda.cz):
     - Přidejte záznam **CNAME**: jméno `vratnicheck`, cíl `cname.vercel-dns.com` (nebo hodnotu, kterou Vercel zobrazí u domény).
   - Vercel doménu ověří a vystaví SSL; weby budou dostupné na https://vratnicheck.tomaskalivoda.cz.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
