# Landing Page entregadorbloqueado.com.br — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a conversion-focused landing page for CASCOB targeting delivery drivers and ride-share drivers blocked from platforms (iFood, Uber).

**Architecture:** Single HTML file with external CSS and minimal JS. Static site, no build tools, deployed on GitHub Pages. Follows the same patterns as cascob-v2 (the main CASCOB site).

**Tech Stack:** HTML5, CSS3 (custom properties, grid, flexbox), vanilla JS, GitHub Pages

---

## File Structure

```
cascobentregadores/
├── index.html              — Full landing page (all 10 sections)
├── assets/
│   ├── css/
│   │   └── styles.css      — All styles, mobile-first
│   ├── js/
│   │   └── main.js         — Menu toggle, FAQ accordion, scroll effects, phone mask
│   ├── img/
│   │   ├── hero-entregador.png    — Copy from Downloads (image 1)
│   │   ├── form-entregador.png    — Copy from Downloads (image 2)
│   │   ├── logo-cascob.png        — Copy from cascob-v2
│   │   └── logo-cascob.webp       — Copy from cascob-v2
│   └── fonts/
│       ├── fonts.css                      — Copy from cascob-v2
│       ├── cormorant-garamond-500.woff2   — Copy from cascob-v2
│       ├── cormorant-garamond-500-italic.woff2
│       ├── cormorant-garamond-600.woff2
│       ├── manrope-400.woff2
│       ├── manrope-500.woff2
│       ├── manrope-600.woff2
│       └── manrope-700.woff2
├── robots.txt
├── sitemap.xml
├── CNAME
└── docs/  (already exists)
```

---

### Task 1: Setup — Copy Assets & Create File Structure

**Files:**
- Create: `assets/css/styles.css`, `assets/js/main.js`, `CNAME`, `robots.txt`, `sitemap.xml`
- Copy: fonts from cascob-v2, logo from cascob-v2, images from Downloads

- [ ] **Step 1: Create directory structure**

```bash
cd C:/Users/PICHAU/.openclaw/workspace/repos/cascobentregadores
mkdir -p assets/css assets/js assets/img assets/fonts
```

- [ ] **Step 2: Copy fonts from cascob-v2**

```bash
cp C:/Users/PICHAU/.openclaw/workspace/repos/cascob-site/cascob-v2/assets/fonts/* assets/fonts/
```

- [ ] **Step 3: Copy logo from cascob-v2**

```bash
cp C:/Users/PICHAU/.openclaw/workspace/repos/cascob-site/cascob-v2/assets/img/logo-cascob.png assets/img/
cp C:/Users/PICHAU/.openclaw/workspace/repos/cascob-site/cascob-v2/assets/img/logo-cascob.webp assets/img/
```

- [ ] **Step 4: Copy hero images from Downloads**

```bash
cp "C:/Users/PICHAU/Downloads/ChatGPT Image 4 de jun. de 2026, 13_20_11.png" assets/img/hero-entregador.png
cp "C:/Users/PICHAU/Downloads/ChatGPT Image 4 de jun. de 2026, 13_20_42.png" assets/img/form-entregador.png
```

- [ ] **Step 5: Create CNAME**

```
entregadorbloqueado.com.br
```

- [ ] **Step 6: Create robots.txt**

```
User-agent: *
Allow: /
Sitemap: https://entregadorbloqueado.com.br/sitemap.xml
```

- [ ] **Step 7: Create sitemap.xml**

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://entregadorbloqueado.com.br/</loc>
    <lastmod>2026-06-04</lastmod>
    <priority>1.0</priority>
  </url>
</urlset>
```

- [ ] **Step 8: Create empty styles.css and main.js**

Create `assets/css/styles.css` and `assets/js/main.js` as empty files (content added in later tasks).

- [ ] **Step 9: Commit**

```bash
git add assets/ CNAME robots.txt sitemap.xml
git commit -m "chore: setup project structure with assets, fonts, and images"
```

---

### Task 2: CSS — Design Tokens, Reset & Base Styles

**Files:**
- Create: `assets/css/styles.css`

- [ ] **Step 1: Write CSS tokens, reset, and base typography**

```css
@import url('../fonts/fonts.css');

:root {
  --black: #0a0a0a;
  --black-soft: #111111;
  --black-card: #161616;
  --gold: #c89b3c;
  --gold-light: #e2bd5b;
  --gold-deep: #a07d28;
  --red: #c0392b;
  --red-light: #e74c3c;
  --white: #f3ecdb;
  --white-soft: #b8ad95;
  --green-wa: #25d366;

  --serif: 'Cormorant Garamond', Georgia, serif;
  --sans: 'Manrope', system-ui, sans-serif;

  --maxw: 1200px;
  --section-pad: clamp(64px, 10vw, 120px);
  --container-pad: 20px;
  --transition: 200ms cubic-bezier(.4,0,.2,1);
  --radius: 12px;
}

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }
body {
  font-family: var(--sans);
  background: var(--black);
  color: var(--white);
  font-size: 17px;
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
}
img, svg { max-width: 100%; display: block; }
a { color: inherit; text-decoration: none; }
button { font-family: inherit; cursor: pointer; border: none; background: none; }
ul { list-style: none; }

.container { max-width: var(--maxw); margin: 0 auto; padding: 0 var(--container-pad); }

h1, h2, h3 { font-family: var(--serif); font-weight: 500; line-height: 1.15; }
h1 { font-size: clamp(2.2rem, 5vw, 3.8rem); }
h2 { font-size: clamp(1.8rem, 4vw, 2.8rem); }
h3 { font-size: clamp(1.2rem, 2.5vw, 1.6rem); }

em { font-style: italic; color: var(--gold-light); }

.kicker {
  display: inline-block;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--gold);
  margin-bottom: 12px;
}

.btn {
  display: inline-flex; align-items: center; gap: 8px;
  padding: 14px 28px;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 600;
  transition: transform var(--transition), box-shadow var(--transition);
}
.btn:hover { transform: translateY(-2px); }
.btn--gold {
  background: linear-gradient(135deg, var(--gold), var(--gold-deep));
  color: #111;
}
.btn--gold:hover { box-shadow: 0 8px 24px rgba(200,155,60,0.35); }
.btn--ghost {
  border: 2px solid rgba(255,255,255,0.3);
  color: var(--white);
}
.btn--ghost:hover { border-color: var(--gold); color: var(--gold-light); }
.btn--green {
  background: var(--green-wa);
  color: #fff;
}
.btn--green:hover { box-shadow: 0 8px 24px rgba(37,211,102,0.35); }

.skip-link {
  position: absolute; left: -9999px; top: auto;
  padding: 8px 16px; background: var(--gold); color: #111;
  z-index: 100;
}
.skip-link:focus { left: 16px; top: 16px; }
```

- [ ] **Step 2: Verify file renders** — open `index.html` in browser (created in next task), confirm dark background and no errors.

- [ ] **Step 3: Commit**

```bash
git add assets/css/styles.css
git commit -m "feat: add CSS design tokens, reset, and base component styles"
```

---

### Task 3: HTML — Header + Hero Section

**Files:**
- Create: `index.html`

- [ ] **Step 1: Write full HTML head with SEO, Schema.org, and header + hero**

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Bloqueado no iFood ou Uber? Conheça seus direitos | CASCOB</title>
<meta name="description" content="Entregador ou motorista bloqueado no iFood, Uber ou outra plataforma? A CASCOB atua na reativação de conta, compensação financeira e reparação por danos. Fale conosco.">
<link rel="canonical" href="https://entregadorbloqueado.com.br/">
<meta property="og:title" content="Bloqueado no iFood ou Uber? Conheça seus direitos | CASCOB">
<meta property="og:description" content="Entregador ou motorista bloqueado? Reativação de conta, lucros cessantes e danos morais. CASCOB Recuperação de Créditos.">
<meta property="og:url" content="https://entregadorbloqueado.com.br/">
<meta property="og:type" content="website">
<meta property="og:locale" content="pt_BR">
<meta name="twitter:card" content="summary_large_image">
<link rel="icon" href="/assets/img/logo-cascob.png" type="image/png">
<link rel="preload" href="/assets/fonts/cormorant-garamond-500.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/assets/fonts/manrope-500.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="/assets/css/styles.css">
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "CASCOB Recuperação de Créditos",
  "url": "https://entregadorbloqueado.com.br/",
  "logo": "https://entregadorbloqueado.com.br/assets/img/logo-cascob.png",
  "telephone": "+55-17-99199-9006",
  "areaServed": {"@type": "Country", "name": "Brasil"}
}
</script>
</head>
<body>
<a href="#main" class="skip-link">Pular para o conteúdo</a>

<header class="nav" id="site-header">
  <div class="container nav__row">
    <a href="#top" class="logo" aria-label="CASCOB — início">
      <picture>
        <source srcset="/assets/img/logo-cascob.webp" type="image/webp">
        <img class="logo__img" src="/assets/img/logo-cascob.png" alt="" width="48" height="48">
      </picture>
      <span class="logo__text">
        <span class="logo__name">CASCOB</span>
        <span class="logo__sub">recuperação de créditos</span>
      </span>
    </a>
    <nav class="nav__links" aria-label="Navegação principal">
      <a href="#direitos">Seus Direitos</a>
      <a href="#como-funciona">Como Funciona</a>
      <a href="#faq">Dúvidas</a>
    </nav>
    <div class="nav__actions">
      <a class="btn btn--gold btn--sm" href="https://wa.me/5517991999006?text=Ol%C3%A1%2C%20vim%20pelo%20site%20entregadorbloqueado.com.br." target="_blank" rel="noopener">
        <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M19.05 4.91A10 10 0 0 0 4.43 17.69L3 22l4.43-1.16A10 10 0 1 0 19.05 4.91ZM12 20.16a8.13 8.13 0 0 1-4.15-1.14l-.3-.18-2.63.69.7-2.56-.2-.31A8.16 8.16 0 1 1 12 20.16Zm4.5-6.13c-.25-.13-1.46-.72-1.69-.8s-.39-.13-.55.13-.63.8-.78.96-.28.2-.53.07a6.7 6.7 0 0 1-3.34-2.92c-.25-.43.25-.4.72-1.34.08-.16 0-.3-.04-.42s-.55-1.33-.76-1.82-.4-.42-.55-.43h-.47a.9.9 0 0 0-.66.31 2.76 2.76 0 0 0-.85 2c0 1.18.86 2.32.98 2.48s1.69 2.58 4.1 3.62a14 14 0 0 0 1.37.5 3.3 3.3 0 0 0 1.51.1 2.47 2.47 0 0 0 1.62-1.14 2 2 0 0 0 .14-1.14c-.06-.1-.22-.16-.47-.29Z"/></svg>
        Falar agora
      </a>
      <button class="hamburger" aria-label="Abrir menu" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
    </div>
  </div>
</header>

<main id="main">

<section class="hero" id="top">
  <div class="hero__bg">
    <img src="/assets/img/hero-entregador.png" alt="" loading="eager">
  </div>
  <div class="container hero__content">
    <h1>Bloqueado no iFood ou Uber <em>sem motivo?</em><br>Você pode ter direitos.</h1>
    <p class="hero__sub">Reativação de conta, compensação financeira e reparação por prejuízos.</p>
    <div class="hero__ctas">
      <a class="btn btn--gold" href="https://wa.me/5517991999006?text=Ol%C3%A1%2C%20fui%20bloqueado%20na%20plataforma%20de%20delivery%20e%20gostaria%20de%20avaliar%20meu%20caso." target="_blank" rel="noopener">
        <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M19.05 4.91A10 10 0 0 0 4.43 17.69L3 22l4.43-1.16A10 10 0 1 0 19.05 4.91Z"/></svg>
        Falar no WhatsApp
      </a>
      <a class="btn btn--ghost" href="#contato">Analisar meu caso</a>
    </div>
    <div class="hero__trust">
      <div><strong>12+</strong><span>anos de mercado</span></div>
      <div><strong>2 mil</strong><span>clientes assessorados</span></div>
      <div><strong>BR</strong><span>atuação em todo o Brasil</span></div>
    </div>
  </div>
</section>
```

- [ ] **Step 2: Add header and hero CSS to styles.css**

Append to `assets/css/styles.css`:

```css
/* ───────── nav ───────── */
.nav {
  position: fixed; top: 0; left: 0; right: 0;
  z-index: 50; padding: 16px 0;
  transition: background .25s, padding .25s;
  border-bottom: 1px solid transparent;
}
.nav--scrolled {
  background: rgba(10,10,10,0.92);
  backdrop-filter: blur(10px);
  border-bottom-color: rgba(200,155,60,0.15);
  padding: 10px 0;
}
.nav__row { display: flex; align-items: center; justify-content: space-between; gap: 20px; }
.nav__links { display: flex; gap: 24px; font-size: 14px; color: var(--white-soft); }
.nav__links a { padding: 6px 0; transition: color .15s; }
.nav__links a:hover { color: var(--gold-light); }
.nav__actions { display: flex; align-items: center; gap: 12px; }
.btn--sm { padding: 10px 20px; font-size: 13px; }

.logo { display: inline-flex; align-items: center; gap: 10px; }
.logo__img { height: 40px; width: auto; }
.logo__text { display: flex; flex-direction: column; line-height: 1.2; }
.logo__name { font-family: var(--serif); font-size: 20px; font-weight: 600; letter-spacing: 2px; }
.logo__sub { font-size: 10px; text-transform: uppercase; letter-spacing: 1.5px; color: var(--white-soft); }

.hamburger { display: none; flex-direction: column; gap: 5px; padding: 8px; }
.hamburger span { display: block; width: 22px; height: 2px; background: var(--white); transition: var(--transition); }

@media (max-width: 768px) {
  .nav__links { display: none; }
  .nav__links.open { display: flex; flex-direction: column; position: absolute; top: 100%; left: 0; right: 0; background: rgba(10,10,10,0.96); padding: 20px; gap: 16px; border-bottom: 1px solid rgba(200,155,60,0.15); }
  .hamburger { display: flex; }
  .btn--sm .btn-text { display: none; }
}

/* ───────── hero ───────── */
.hero { position: relative; min-height: 100vh; display: flex; align-items: center; overflow: hidden; }
.hero__bg { position: absolute; inset: 0; z-index: 0; }
.hero__bg img { width: 100%; height: 100%; object-fit: cover; }
.hero__bg::after {
  content: ''; position: absolute; inset: 0;
  background: linear-gradient(to right, rgba(10,10,10,0.92) 40%, rgba(10,10,10,0.5) 100%);
}
.hero__content { position: relative; z-index: 1; max-width: 680px; padding: var(--section-pad) 0; }
.hero__sub { font-size: clamp(1rem, 2vw, 1.25rem); color: var(--white-soft); margin: 20px 0 32px; }
.hero__ctas { display: flex; flex-wrap: wrap; gap: 16px; margin-bottom: 48px; }

.hero__trust {
  display: flex; gap: 32px;
  padding-top: 32px;
  border-top: 1px solid rgba(255,255,255,0.1);
}
.hero__trust div { display: flex; flex-direction: column; }
.hero__trust strong { font-size: 1.5rem; color: var(--gold-light); font-family: var(--serif); }
.hero__trust span { font-size: 12px; color: var(--white-soft); text-transform: uppercase; letter-spacing: 1px; }

@media (max-width: 768px) {
  .hero__trust { gap: 20px; }
  .hero__ctas { flex-direction: column; }
  .hero__ctas .btn { justify-content: center; }
}
```

- [ ] **Step 3: Open in browser, verify header + hero render correctly**

- [ ] **Step 4: Commit**

```bash
git add index.html assets/css/styles.css
git commit -m "feat: add header and hero section with full SEO markup"
```

---

### Task 4: HTML+CSS — Sections 3-5 (Direitos, Plataformas, Jurisprudência)

**Files:**
- Modify: `index.html` (append sections after hero)
- Modify: `assets/css/styles.css` (append section styles)

- [ ] **Step 1: Add Seus Direitos section to index.html** (after hero closing tag)

```html
<section class="section" id="direitos">
  <div class="container">
    <span class="kicker">conheça seus direitos</span>
    <h2>A Justiça reconhece o <em>bloqueio injusto</em></h2>
    <div class="cards">
      <article class="card">
        <div class="card__icon">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none"><path d="M9 12l2 2 4-4" stroke="var(--gold)" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="12" r="10" stroke="var(--gold)" stroke-width="1.5"/></svg>
        </div>
        <span class="card__num">01</span>
        <h3>Reativação da conta</h3>
        <p>A plataforma pode ser obrigada judicialmente a reativar seu cadastro</p>
      </article>
      <article class="card">
        <div class="card__icon">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" stroke="var(--gold)" stroke-width="1.5" stroke-linecap="round"/></svg>
        </div>
        <span class="card__num">02</span>
        <h3>Compensação financeira</h3>
        <p>Indenização pelo período em que ficou impedido de trabalhar</p>
      </article>
      <article class="card">
        <div class="card__icon">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="var(--gold)" stroke-width="1.5"/></svg>
        </div>
        <span class="card__num">03</span>
        <h3>Reparação por danos morais</h3>
        <p>Bloqueio sem justificativa pode gerar dever de indenizar</p>
      </article>
      <article class="card">
        <div class="card__icon">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" stroke="var(--gold)" stroke-width="1.5"/></svg>
        </div>
        <span class="card__num">04</span>
        <h3>Avaliação do seu caso</h3>
        <p>Conte o que aconteceu e avaliamos a viabilidade jurídica</p>
      </article>
    </div>
  </div>
</section>
```

- [ ] **Step 2: Add Outras Plataformas section**

```html
<section class="section section--alt" id="plataformas">
  <div class="container plataformas">
    <h2>Bloqueado em outra plataforma? <em>Também podemos ajudar.</em></h2>
    <div class="plataformas__grid">
      <div class="plataforma plataforma--destaque">iFood</div>
      <div class="plataforma plataforma--destaque">Uber</div>
      <div class="plataforma">Rappi</div>
      <div class="plataforma">Lalamove</div>
    </div>
    <p class="plataformas__text">A mesma lógica jurídica se aplica a todas as plataformas de delivery e transporte que bloqueiam trabalhadores sem justificativa adequada.</p>
  </div>
</section>
```

- [ ] **Step 3: Add Jurisprudência section**

```html
<section class="section" id="jurisprudencia">
  <div class="container">
    <span class="kicker">a justiça está do seu lado</span>
    <h2>Caso real: entregador bloqueado no iFood <em>ganhou na Justiça</em></h2>
    <div class="acordao">
      <div class="acordao__icon">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none"><path d="M12 3L1 9l11 6 9-4.91V17M5 13.18v4L12 21l7-3.82v-4" stroke="var(--gold)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </div>
      <div class="acordao__body">
        <h3>Acórdão — TJSP, 26ª Câmara de Direito Privado</h3>
        <p class="acordao__ref">Apelação Cível nº 1005969-54.2025.8.26.0405 · Novembro/2025</p>
        <ul class="acordao__list">
          <li>Reativação obrigatória do cadastro, prazo de 5 dias</li>
          <li>Lucros cessantes de R$600/semana (do bloqueio até reativação)</li>
          <li>Danos morais fixados em R$10.000,00</li>
          <li>Multa diária de R$1.000 por descumprimento</li>
        </ul>
        <blockquote class="acordao__quote">
          "Não pode prevalecer a cláusula contratual de rescisão unilateral imotivada, em respeito à função social do contrato e da boa-fé objetiva."
        </blockquote>
        <p class="acordao__disclaimer">Cada caso é analisado individualmente. Resultados podem variar conforme as circunstâncias.</p>
      </div>
    </div>
  </div>
</section>
```

- [ ] **Step 4: Add CSS for all three sections**

Append to `assets/css/styles.css`:

```css
/* ───────── sections ───────── */
.section { padding: var(--section-pad) 0; }
.section--alt { background: var(--black-soft); }

/* ───────── cards (direitos) ───────── */
.cards { display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; margin-top: 40px; }
.card {
  background: var(--black-card);
  border: 1px solid rgba(200,155,60,0.15);
  border-radius: var(--radius);
  padding: 32px;
  transition: transform var(--transition), box-shadow var(--transition);
}
.card:hover { transform: translateY(-4px); box-shadow: 0 12px 32px rgba(200,155,60,0.12); }
.card__icon { margin-bottom: 16px; }
.card__num { font-family: var(--serif); font-size: 2rem; color: rgba(200,155,60,0.2); font-weight: 600; }
.card h3 { margin: 8px 0; color: var(--gold-light); }
.card p { font-size: 15px; color: var(--white-soft); line-height: 1.5; }

@media (max-width: 600px) { .cards { grid-template-columns: 1fr; } }

/* ───────── plataformas ───────── */
.plataformas { text-align: center; }
.plataformas__grid { display: flex; justify-content: center; flex-wrap: wrap; gap: 20px; margin: 32px 0; }
.plataforma {
  padding: 16px 32px; border-radius: 8px;
  background: var(--black-card); border: 1px solid rgba(255,255,255,0.08);
  font-size: 18px; font-weight: 600; color: var(--white-soft);
}
.plataforma--destaque {
  border-color: var(--gold);
  color: var(--gold-light);
  font-size: 22px;
}
.plataformas__text { max-width: 600px; margin: 0 auto; color: var(--white-soft); font-size: 15px; }

/* ───────── jurisprudência ───────── */
.acordao {
  display: flex; gap: 28px; align-items: flex-start;
  background: var(--black-card);
  border: 1px solid var(--gold-deep);
  border-radius: var(--radius);
  padding: 40px;
  margin-top: 40px;
}
.acordao__icon { flex-shrink: 0; padding-top: 4px; }
.acordao__ref { font-size: 14px; color: var(--white-soft); margin: 4px 0 16px; }
.acordao__list { padding-left: 0; margin-bottom: 20px; }
.acordao__list li {
  padding: 6px 0 6px 24px;
  position: relative;
  color: var(--white);
  font-size: 15px;
}
.acordao__list li::before { content: '✓'; position: absolute; left: 0; color: var(--gold); font-weight: 700; }
.acordao__quote {
  border-left: 3px solid var(--gold);
  padding: 12px 20px;
  font-family: var(--serif);
  font-style: italic;
  font-size: 1.1rem;
  color: var(--gold-light);
  margin: 20px 0;
}
.acordao__disclaimer { font-size: 12px; color: var(--white-soft); font-style: italic; }

@media (max-width: 600px) {
  .acordao { flex-direction: column; padding: 24px; }
}
```

- [ ] **Step 5: Verify in browser**

- [ ] **Step 6: Commit**

```bash
git add index.html assets/css/styles.css
git commit -m "feat: add direitos, plataformas, and jurisprudência sections"
```

---

### Task 5: HTML+CSS — Sections 6-7 (Como Funciona + Depoimentos)

**Files:**
- Modify: `index.html` (append sections)
- Modify: `assets/css/styles.css` (append styles)

- [ ] **Step 1: Add Como Funciona section to index.html**

```html
<section class="section section--alt" id="como-funciona">
  <div class="container">
    <span class="kicker">simples e direto</span>
    <h2>Como funciona</h2>
    <div class="timeline">
      <div class="timeline__step">
        <div class="timeline__dot">1</div>
        <div class="timeline__icon">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" stroke="var(--gold)" stroke-width="1.5"/></svg>
        </div>
        <h3>Fale conosco</h3>
        <p>Conte o que aconteceu pelo WhatsApp ou formulário</p>
      </div>
      <div class="timeline__line"></div>
      <div class="timeline__step">
        <div class="timeline__dot">2</div>
        <div class="timeline__icon">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="8" stroke="var(--gold)" stroke-width="1.5"/><path d="M21 21l-4.35-4.35" stroke="var(--gold)" stroke-width="1.5" stroke-linecap="round"/></svg>
        </div>
        <h3>Análise do caso</h3>
        <p>Avaliamos a situação e explicamos as possibilidades</p>
      </div>
      <div class="timeline__line"></div>
      <div class="timeline__step">
        <div class="timeline__dot">3</div>
        <div class="timeline__icon">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><path d="M12 3L1 9l11 6 9-4.91V17M5 13.18v4L12 21l7-3.82v-4" stroke="var(--gold)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </div>
        <h3>Ação judicial</h3>
        <p>Entramos com pedido de reativação + indenização</p>
      </div>
    </div>
  </div>
</section>
```

- [ ] **Step 2: Add Depoimentos section**

```html
<section class="section" id="depoimentos">
  <div class="container">
    <span class="kicker">quem já passou por isso</span>
    <h2>Depoimentos</h2>
    <div class="depoimentos">
      <article class="depoimento">
        <svg class="depoimento__aspas" width="32" height="32" viewBox="0 0 24 24" fill="var(--gold-deep)"><path d="M3 21c3-6.5 3-12 0-18h5c4 6 4 12 0 18zm10 0c3-6.5 3-12 0-18h5c4 6 4 12 0 18z"/></svg>
        <p>Fui bloqueado do iFood sem nenhuma explicação. Com a CASCOB, consegui a reativação da minha conta e recebi indenização pelo tempo parado.</p>
        <footer><strong>Carlos M.</strong> · São José do Rio Preto, SP</footer>
      </article>
      <article class="depoimento">
        <svg class="depoimento__aspas" width="32" height="32" viewBox="0 0 24 24" fill="var(--gold-deep)"><path d="M3 21c3-6.5 3-12 0-18h5c4 6 4 12 0 18zm10 0c3-6.5 3-12 0-18h5c4 6 4 12 0 18z"/></svg>
        <p>A Uber bloqueou minha conta depois de anos dirigindo. A equipe foi muito atenciosa e resolveu tudo judicialmente. Recomendo.</p>
        <footer><strong>Ana P.</strong> · Osasco, SP</footer>
      </article>
      <article class="depoimento">
        <svg class="depoimento__aspas" width="32" height="32" viewBox="0 0 24 24" fill="var(--gold-deep)"><path d="M3 21c3-6.5 3-12 0-18h5c4 6 4 12 0 18zm10 0c3-6.5 3-12 0-18h5c4 6 4 12 0 18z"/></svg>
        <p>Achei que não tinha jeito quando fui desligado do aplicativo. Procurei a CASCOB e descobri que tinha direito a compensação. Valeu muito a pena.</p>
        <footer><strong>Rafael S.</strong> · Campinas, SP</footer>
      </article>
    </div>
  </div>
</section>
```

- [ ] **Step 3: Add CSS for timeline and depoimentos**

Append to `assets/css/styles.css`:

```css
/* ───────── timeline ───────── */
.timeline { display: flex; align-items: flex-start; justify-content: center; gap: 0; margin-top: 48px; }
.timeline__step { text-align: center; flex: 1; max-width: 260px; position: relative; }
.timeline__dot {
  width: 40px; height: 40px; border-radius: 50%;
  background: var(--gold); color: #111;
  display: flex; align-items: center; justify-content: center;
  font-weight: 700; font-size: 16px; margin: 0 auto 16px;
}
.timeline__icon { margin: 0 auto 12px; }
.timeline__step h3 { margin-bottom: 8px; color: var(--gold-light); }
.timeline__step p { font-size: 14px; color: var(--white-soft); padding: 0 8px; }
.timeline__line {
  flex: 0 0 60px; height: 2px;
  background: linear-gradient(90deg, var(--gold-deep), var(--gold));
  margin-top: 20px;
}

@media (max-width: 600px) {
  .timeline { flex-direction: column; align-items: center; gap: 8px; }
  .timeline__line { width: 2px; height: 40px; flex: 0 0 40px; }
  .timeline__step { max-width: 100%; }
}

/* ───────── depoimentos ───────── */
.depoimentos { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; margin-top: 40px; }
.depoimento {
  background: var(--black-card);
  border: 1px solid rgba(255,255,255,0.06);
  border-radius: var(--radius);
  padding: 32px;
}
.depoimento__aspas { margin-bottom: 12px; opacity: 0.5; }
.depoimento p { font-size: 15px; line-height: 1.6; color: var(--white); margin-bottom: 16px; }
.depoimento footer { font-size: 13px; color: var(--white-soft); }
.depoimento footer strong { color: var(--gold-light); }

@media (max-width: 768px) { .depoimentos { grid-template-columns: 1fr; } }
```

- [ ] **Step 4: Verify in browser**

- [ ] **Step 5: Commit**

```bash
git add index.html assets/css/styles.css
git commit -m "feat: add como-funciona timeline and depoimentos sections"
```

---

### Task 6: HTML+CSS — Sections 8-10 (Formulário, FAQ, Footer)

**Files:**
- Modify: `index.html` (append sections + close body/html)
- Modify: `assets/css/styles.css` (append styles)

- [ ] **Step 1: Add Formulário + WhatsApp section**

```html
<section class="section section--alt" id="contato">
  <div class="container">
    <h2 style="text-align:center;margin-bottom:40px;">Fale com um <em>especialista</em> agora</h2>
    <div class="contato__grid">
      <div class="contato__wa">
        <svg width="48" height="48" viewBox="0 0 24 24"><path fill="var(--green-wa)" d="M19.05 4.91A10 10 0 0 0 4.43 17.69L3 22l4.43-1.16A10 10 0 1 0 19.05 4.91ZM12 20.16a8.13 8.13 0 0 1-4.15-1.14l-.3-.18-2.63.69.7-2.56-.2-.31A8.16 8.16 0 1 1 12 20.16Zm4.5-6.13c-.25-.13-1.46-.72-1.69-.8s-.39-.13-.55.13-.63.8-.78.96-.28.2-.53.07a6.7 6.7 0 0 1-3.34-2.92c-.25-.43.25-.4.72-1.34.08-.16 0-.3-.04-.42s-.55-1.33-.76-1.82-.4-.42-.55-.43h-.47a.9.9 0 0 0-.66.31 2.76 2.76 0 0 0-.85 2c0 1.18.86 2.32.98 2.48s1.69 2.58 4.1 3.62a14 14 0 0 0 1.37.5 3.3 3.3 0 0 0 1.51.1 2.47 2.47 0 0 0 1.62-1.14 2 2 0 0 0 .14-1.14c-.06-.1-.22-.16-.47-.29Z"/></svg>
        <p class="contato__numero">(17) 99199-9006</p>
        <a class="btn btn--green" href="https://wa.me/5517991999006?text=Ol%C3%A1%2C%20fui%20bloqueado%20na%20plataforma%20e%20gostaria%20de%20avaliar%20meu%20caso." target="_blank" rel="noopener">Chamar no WhatsApp agora</a>
        <p class="contato__horario">Resposta rápida em horário comercial</p>
      </div>
      <form class="form" id="form-contato" action="https://wa.me/5517991999006" method="GET">
        <div class="form__field">
          <label for="nome">Nome completo</label>
          <input type="text" id="nome" name="nome" required>
        </div>
        <div class="form__field">
          <label for="whatsapp">WhatsApp</label>
          <input type="tel" id="whatsapp" name="whatsapp" placeholder="(00) 00000-0000" required>
        </div>
        <div class="form__field">
          <label for="plataforma">Plataforma</label>
          <select id="plataforma" name="plataforma" required>
            <option value="">Selecione...</option>
            <option value="iFood">iFood</option>
            <option value="Uber">Uber</option>
            <option value="Rappi">Rappi</option>
            <option value="Lalamove">Lalamove</option>
            <option value="Outra">Outra</option>
          </select>
        </div>
        <div class="form__field">
          <label for="relato">Conte brevemente o que aconteceu</label>
          <textarea id="relato" name="relato" rows="3"></textarea>
        </div>
        <button type="submit" class="btn btn--gold form__submit">Enviar para análise</button>
        <p class="form__lgpd">Seus dados estão protegidos (LGPD — Lei nº 13.709/2018)</p>
      </form>
    </div>
  </div>
</section>
```

- [ ] **Step 2: Add FAQ section with Schema.org**

```html
<section class="section" id="faq">
  <div class="container">
    <h2 style="text-align:center;margin-bottom:40px;">Dúvidas <em>frequentes</em></h2>
    <div class="faq">
      <details class="faq__item">
        <summary>Quanto custa o serviço?</summary>
        <p>O custo varia por caso. Após a análise, informamos o valor antes de qualquer contratação.</p>
      </details>
      <details class="faq__item">
        <summary>Preciso de provas do bloqueio?</summary>
        <p>Prints e e-mails ajudam, mas não são obrigatórios. Avaliamos o caso com o que você tiver.</p>
      </details>
      <details class="faq__item">
        <summary>Funciona para quem foi bloqueado há tempo?</summary>
        <p>Sim, desde que dentro do prazo legal. Cada caso é analisado individualmente.</p>
      </details>
      <details class="faq__item">
        <summary>Atende minha cidade?</summary>
        <p>Sim. Atendemos em todo o Brasil — presencialmente em Rio Preto ou por vídeo.</p>
      </details>
      <details class="faq__item">
        <summary>Quanto tempo demora o processo?</summary>
        <p>Varia conforme a complexidade. Acompanhamos até o desfecho.</p>
      </details>
      <details class="faq__item">
        <summary>Só trabalham com iFood?</summary>
        <p>iFood e Uber são nosso foco principal, mas atuamos com outras plataformas de delivery e transporte também.</p>
      </details>
    </div>
  </div>
</section>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {"@type":"Question","name":"Quanto custa o serviço?","acceptedAnswer":{"@type":"Answer","text":"O custo varia por caso. Após a análise, informamos o valor antes de qualquer contratação."}},
    {"@type":"Question","name":"Preciso de provas do bloqueio?","acceptedAnswer":{"@type":"Answer","text":"Prints e e-mails ajudam, mas não são obrigatórios. Avaliamos o caso com o que você tiver."}},
    {"@type":"Question","name":"Funciona para quem foi bloqueado há tempo?","acceptedAnswer":{"@type":"Answer","text":"Sim, desde que dentro do prazo legal. Cada caso é analisado individualmente."}},
    {"@type":"Question","name":"Atende minha cidade?","acceptedAnswer":{"@type":"Answer","text":"Sim. Atendemos em todo o Brasil — presencialmente em Rio Preto ou por vídeo."}},
    {"@type":"Question","name":"Quanto tempo demora o processo?","acceptedAnswer":{"@type":"Answer","text":"Varia conforme a complexidade. Acompanhamos até o desfecho."}},
    {"@type":"Question","name":"Só trabalham com iFood?","acceptedAnswer":{"@type":"Answer","text":"iFood e Uber são nosso foco principal, mas atuamos com outras plataformas de delivery e transporte também."}}
  ]
}
</script>
```

- [ ] **Step 3: Add Footer + close tags**

```html
</main>

<footer class="footer">
  <div class="container footer__grid">
    <div class="footer__brand">
      <a href="#top" class="logo">
        <picture>
          <source srcset="/assets/img/logo-cascob.webp" type="image/webp">
          <img class="logo__img" src="/assets/img/logo-cascob.png" alt="CASCOB" width="40" height="40">
        </picture>
        <span class="logo__text">
          <span class="logo__name">CASCOB</span>
          <span class="logo__sub">recuperação de créditos</span>
        </span>
      </a>
    </div>
    <div class="footer__contact">
      <p><strong>Telefone:</strong> (17) 99199-9006</p>
      <p><strong>Instagram:</strong> <a href="https://instagram.com/cascobsjrp" target="_blank" rel="noopener">@cascobsjrp</a></p>
      <p><strong>Site principal:</strong> <a href="https://cascob.com.br" target="_blank" rel="noopener">cascob.com.br</a></p>
    </div>
    <div class="footer__legal">
      <p>CNPJ: 22.770.533/0001-95</p>
      <p>Seus dados são protegidos conforme a Lei nº 13.709/2018 (LGPD)</p>
      <p>&copy; 2026 CASCOB Recuperação de Créditos</p>
    </div>
  </div>
</footer>

<script src="/assets/js/main.js"></script>
</body>
</html>
```

- [ ] **Step 4: Add CSS for form, FAQ, and footer**

Append to `assets/css/styles.css`:

```css
/* ───────── contato ───────── */
.contato__grid {
  display: grid; grid-template-columns: 1fr 1fr; gap: 40px; align-items: start;
}
.contato__wa {
  text-align: center;
  background: var(--black-card);
  border: 1px solid rgba(37,211,102,0.2);
  border-radius: var(--radius);
  padding: 40px;
  display: flex; flex-direction: column; align-items: center; gap: 16px;
}
.contato__numero { font-family: var(--serif); font-size: 1.8rem; color: var(--white); }
.contato__horario { font-size: 13px; color: var(--white-soft); }

.form {
  background: var(--black-card);
  border: 1px solid rgba(200,155,60,0.15);
  border-radius: var(--radius);
  padding: 32px;
}
.form__field { margin-bottom: 16px; }
.form__field label { display: block; font-size: 13px; font-weight: 600; margin-bottom: 6px; color: var(--white-soft); }
.form__field input,
.form__field select,
.form__field textarea {
  width: 100%; padding: 12px 14px;
  background: var(--black); border: 1px solid rgba(255,255,255,0.1);
  border-radius: 8px; color: var(--white);
  font-family: var(--sans); font-size: 15px;
  transition: border-color var(--transition);
}
.form__field input:focus,
.form__field select:focus,
.form__field textarea:focus {
  outline: none; border-color: var(--gold);
}
.form__submit { width: 100%; justify-content: center; margin-top: 8px; }
.form__lgpd { font-size: 11px; color: var(--white-soft); text-align: center; margin-top: 12px; }

@media (max-width: 768px) {
  .contato__grid { grid-template-columns: 1fr; }
}

/* ───────── FAQ ───────── */
.faq { max-width: 720px; margin: 0 auto; }
.faq__item {
  border-bottom: 1px solid rgba(255,255,255,0.06);
}
.faq__item summary {
  padding: 20px 0;
  font-size: 16px; font-weight: 600;
  cursor: pointer;
  list-style: none;
  display: flex; justify-content: space-between; align-items: center;
  color: var(--white);
  transition: color var(--transition);
}
.faq__item summary:hover { color: var(--gold-light); }
.faq__item summary::after { content: '+'; font-size: 22px; color: var(--gold); transition: transform var(--transition); }
.faq__item[open] summary::after { content: '−'; }
.faq__item p { padding: 0 0 20px; font-size: 15px; color: var(--white-soft); line-height: 1.6; }

/* ───────── footer ───────── */
.footer {
  background: #050505;
  border-top: 1px solid rgba(200,155,60,0.1);
  padding: 48px 0;
}
.footer__grid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 32px; }
.footer__contact p, .footer__legal p { font-size: 14px; color: var(--white-soft); margin-bottom: 6px; }
.footer__contact a { color: var(--gold-light); }
.footer__contact a:hover { text-decoration: underline; }
.footer__legal { text-align: right; }

@media (max-width: 768px) {
  .footer__grid { grid-template-columns: 1fr; text-align: center; }
  .footer__legal { text-align: center; }
}
```

- [ ] **Step 5: Verify all sections render in browser**

- [ ] **Step 6: Commit**

```bash
git add index.html assets/css/styles.css
git commit -m "feat: add contact form, FAQ with schema.org, and footer"
```

---

### Task 7: JavaScript — Interactivity

**Files:**
- Create: `assets/js/main.js`

- [ ] **Step 1: Write main.js with all interactivity**

```javascript
(function () {
  'use strict';

  // ── Nav scroll effect ──
  var nav = document.getElementById('site-header');
  var scrollThreshold = 60;
  function onScroll() {
    nav.classList.toggle('nav--scrolled', window.scrollY > scrollThreshold);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // ── Mobile menu toggle ──
  var hamburger = document.querySelector('.hamburger');
  var navLinks = document.querySelector('.nav__links');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function () {
      var open = navLinks.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', open);
    });
    navLinks.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        navLinks.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // ── Phone mask ──
  var phoneInput = document.getElementById('whatsapp');
  if (phoneInput) {
    phoneInput.addEventListener('input', function (e) {
      var v = e.target.value.replace(/\D/g, '').slice(0, 11);
      if (v.length > 6) v = '(' + v.slice(0,2) + ') ' + v.slice(2,7) + '-' + v.slice(7);
      else if (v.length > 2) v = '(' + v.slice(0,2) + ') ' + v.slice(2);
      else if (v.length > 0) v = '(' + v;
      e.target.value = v;
    });
  }

  // ── Form submit → WhatsApp ──
  var form = document.getElementById('form-contato');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var nome = document.getElementById('nome').value;
      var whatsapp = document.getElementById('whatsapp').value;
      var plataforma = document.getElementById('plataforma').value;
      var relato = document.getElementById('relato').value;
      var msg = 'Olá, enviei um formulário pelo site entregadorbloqueado.com.br.\n\n'
        + 'Nome: ' + nome + '\n'
        + 'WhatsApp: ' + whatsapp + '\n'
        + 'Plataforma: ' + plataforma + '\n'
        + 'Relato: ' + relato;
      window.open('https://wa.me/5517991999006?text=' + encodeURIComponent(msg), '_blank');
    });
  }
})();
```

- [ ] **Step 2: Verify in browser** — test hamburger menu, phone mask, form submission to WhatsApp, scroll effect on nav.

- [ ] **Step 3: Commit**

```bash
git add assets/js/main.js
git commit -m "feat: add JS interactivity (nav scroll, mobile menu, phone mask, form→WhatsApp)"
```

---

### Task 8: Git Init & Final Verification

**Files:**
- All files

- [ ] **Step 1: Initialize git repo** (if not already)

```bash
cd C:/Users/PICHAU/.openclaw/workspace/repos/cascobentregadores
git init
git add .
git commit -m "feat: landing page entregadorbloqueado.com.br — complete initial build"
```

- [ ] **Step 2: Full visual verification in browser**

Open `index.html` in browser and verify:
- Header fixed, scrolls with background change
- Hero with background image and overlay
- 4 cards in Seus Direitos
- Plataformas section with iFood and Uber highlighted
- Jurisprudência card with acórdão details
- Timeline 3 steps
- 3 depoimentos cards
- Contact form + WhatsApp side by side
- FAQ accordion opens/closes
- Footer with all info
- Mobile responsive (resize browser)

- [ ] **Step 3: Fix any visual issues found**

- [ ] **Step 4: Final commit if fixes were needed**

```bash
git add .
git commit -m "fix: visual adjustments from final review"
```
