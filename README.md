# eTraktor.sk – Elektrický Malotraktor ET 2000

Moderná webstránka pre elektrický malotraktor ET 2000.

## 🚀 Deploy na Vercel cez GitHub

### 1. Vytvorte GitHub repozitár

```bash
git init
git add .
git commit -m "Initial commit – etraktor web"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/etraktor-web.git
git push -u origin main
```

### 2. Importujte na Vercel

1. Choďte na [vercel.com](https://vercel.com) a prihláste sa
2. Kliknite **"Add New Project"**
3. Importujte váš GitHub repozitár `etraktor-web`
4. Framework Preset: **Other** (statický HTML súbor)
5. Kliknite **Deploy** ✅

### 3. Vlastná doména (voliteľné)

V Vercel dashboarde → Settings → Domains → pridajte `etraktor.sk`

---

## 📁 Štruktúra projektu

```
etraktor-web/
├── index.html      ← celá webstránka (single-page)
├── vercel.json     ← Vercel konfigurácia
└── README.md
```

## ✨ Funkcie webu

- Responzívny dizajn (mobil, tablet, desktop)
- Sticky navigácia s hladkým scrollom
- Hero sekcia s kľúčovými štatistikami
- Porovnanie účinnosti (animované pruhy)
- Technické parametre s kartami (tabs)
- Galéria s lightboxom (klávesové šípky)
- Formulár kontakt
- Všetky fotky načítané priamo z etraktor.sk
