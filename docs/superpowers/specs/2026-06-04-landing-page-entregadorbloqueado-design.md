# Landing Page — entregadorbloqueado.com.br

**Data:** 2026-06-04
**Projeto:** CASCOB Recuperação de Créditos — Nicho Entregadores
**Tipo:** Landing page de conversão (single page)
**Domínio:** entregadorbloqueado.com.br

---

## Objetivo

Captar entregadores e motoristas de aplicativo (iFood e Uber como foco principal, Rappi e outras plataformas como secundário) que foram bloqueados injustamente, direcionando-os para atendimento via WhatsApp ou formulário de contato.

## Fundamentação Jurídica (Referência: Acórdão TJSP)

Baseado no Acórdão da Apelação Cível nº 1005969-54.2025.8.26.0405 (26ª Câmara de Direito Privado, TJSP, 24/11/2025):

- **Tese central:** Bloqueio imotivado viola função social do contrato e boa-fé objetiva (art. 373, II, CPC)
- **Reativação:** Obrigatória, prazo de 5 dias, multa diária de R$1.000 (limite R$20.000)
- **Lucros cessantes:** Base semanal (ex: R$600/semana), do bloqueio até reativação. Cálculo: média dos últimos 12 meses, descontados 40% de custos operacionais (art. 402, CC)
- **Danos morais:** Fixados em R$10.000 — descredenciamento sem motivação e sem direito de defesa extrapola mero aborrecimento
- **Aplica-se a:** entregadores (iFood, Rappi) E motoristas (Uber)
- **Jurisprudência consolidada:** Múltiplos precedentes citados no acórdão (32ª e 27ª Câmaras de Direito Privado)

## Identidade Visual

- **Base:** tema escuro (preto #0a0a0a)
- **Marca:** dourado CASCOB (herança do site principal cascob.com.br)
- **Acento:** vermelho (#c0392b) — conecta com iFood e senso de urgência
- **Fontes:** Cormorant Garamond (títulos) + Manrope (corpo) — mesmas do site principal
- **Estilo:** impactante + profissional, fusão das 2 artes de referência

## Assets

- **Imagem hero:** ChatGPT Image 13_20_11.png (entregador de costas na moto, tema escuro/vermelho)
- **Imagem formulário:** ChatGPT Image 13_20_42.png (entregador com celular, tema claro/dourado)
- **Logo:** reutilizar de cascob-v2/assets/img/logo-cascob.png + .webp
- **Ícones:** SVG inline criados no código (balança, escudo, documento, telefone)
- Todas as imagens são placeholder — serão substituídas por material profissional

## Stack Técnico

- HTML + CSS + JS puro (sem frameworks)
- Mobile-first, responsivo
- GitHub Pages para hospedagem
- Formulário: integração WhatsApp API + fallback Formspree
- Estrutura de arquivos seguindo padrão cascob-v2

## Estrutura de Arquivos

```
cascobentregadores/
├── index.html
├── assets/
│   ├── css/
│   │   └── styles.css
│   ├── js/
│   │   └── main.js
│   ├── img/
│   │   ├── hero-entregador.png
│   │   ├── form-entregador.png
│   │   ├── logo-cascob.png
│   │   ├── logo-cascob.webp
│   │   └── og-image.jpg
│   └── fonts/
│       ├── cormorant-garamond-500.woff2
│       └── manrope-500.woff2
├── robots.txt
├── sitemap.xml
├── CNAME
└── README.md
```

---

## Seções da Landing Page

### 1. Header (fixo no topo)

- Logo CASCOB (esquerda)
- Links âncora: Seus Direitos · Como Funciona · Dúvidas
- Botão CTA: "Falar no WhatsApp" (dourado, canto direito)
- Compacto, colapsa em hamburger no mobile

### 2. Hero (viewport completo)

- **Background:** imagem 1 (entregador na moto) com overlay escuro gradiente
- **Headline:** "Bloqueado no iFood ou Uber sem motivo? Você pode ter direitos."
- **Subtítulo:** "Reativação de conta, compensação financeira e reparação por prejuízos."
- **CTAs:**
  - Botão dourado: "Falar no WhatsApp" → wa.me/5517991999006
  - Botão ghost (borda branca): "Analisar meu caso" → scroll para seção formulário
- **Trust bar (faixa inferior):** "12+ anos de mercado | 2 mil clientes assessorados | Atuação em todo o Brasil"

### 3. Seus Direitos (fundo escuro, cards)

- **Kicker:** "conheça seus direitos"
- **Título:** "A Justiça reconhece o bloqueio injusto"
- **4 cards** com ícone SVG dourado + número + texto:

| # | Título | Descrição |
|---|--------|-----------|
| 01 | Reativação da conta | A plataforma pode ser obrigada judicialmente a reativar seu cadastro |
| 02 | Compensação financeira | Indenização pelo período em que ficou impedido de trabalhar |
| 03 | Reparação por danos morais | Bloqueio sem justificativa pode gerar dever de indenizar |
| 04 | Avaliação do seu caso | Conte o que aconteceu e avaliamos a viabilidade jurídica |

- Cards com borda sutil dourada, hover eleva com sombra
- Grid 2x2 no desktop, empilhados no mobile

### 4. Outras Plataformas (fundo levemente mais claro #111)

- **Título:** "Bloqueado em outra plataforma? Também podemos ajudar."
- **Logos/ícones em linha:** iFood (destaque) · Uber (destaque) · Rappi · Lalamove
- **Texto:** "A mesma lógica jurídica se aplica a todas as plataformas de delivery que bloqueiam entregadores sem justificativa adequada."
- Seção compacta, sem CTA — funciona como expansão de escopo

### 5. Jurisprudência / Caso Real (fundo #0d0d0d, destaque)

- **Kicker:** "a justiça está do seu lado"
- **Título:** "Caso real: entregador bloqueado no iFood ganhou na Justiça"
- **Card destaque** com borda dourada, ícone de balança:
  - Resumo do acórdão TJSP (Apelação 1005969-54.2025.8.26.0405, 26ª Câmara, nov/2025)
  - Bullet points: Reativação obrigatória · Lucros cessantes de R$600/semana · Danos morais de R$10.000
  - Citação: "Não pode prevalecer a cláusula contratual de rescisão unilateral imotivada, em respeito à função social do contrato e da boa-fé objetiva."
  - Nota: "Cada caso é analisado individualmente. Resultados podem variar."
- Funciona como prova social jurídica — reforça credibilidade

### 6. Como Funciona (fundo escuro, timeline)

- **Kicker:** "simples e direto"
- **Título:** "Como funciona"
- **3 passos em timeline horizontal (desktop) / vertical (mobile):**

| Passo | Título | Descrição |
|-------|--------|-----------|
| 1 | Fale conosco | Conte o que aconteceu pelo WhatsApp ou formulário |
| 2 | Análise do caso | Avaliamos a situação e explicamos as possibilidades |
| 3 | Ação judicial | Entramos com pedido de reativação + indenização |

- Linha conectando os passos com pontos dourados
- Ícones SVG em cada passo (chat, lupa, balança)

### 7. Depoimentos (fundo #0d0d0d)

- **Título:** "Quem já passou por isso"
- **3 cards de depoimentos** (placeholder):
  - Aspas douradas decorativas
  - Texto do depoimento
  - Nome + Cidade
- Carousel no mobile, grid no desktop
- Conteúdo placeholder será substituído por depoimentos reais

### 8. Formulário + WhatsApp (seção de conversão)

- **Background:** imagem 2 (entregador com celular) com overlay, ou gradiente escuro→vermelho sutil
- **Título:** "Fale com um especialista agora"
- **Layout 2 colunas (desktop):**

**Coluna esquerda — Formulário:**
- Campo: Nome completo
- Campo: WhatsApp (com máscara)
- Dropdown: Plataforma (iFood, Uber, Rappi, Lalamove, Outra)
- Textarea: Conte brevemente o que aconteceu
- Botão submit dourado: "Enviar para análise"
- Texto pequeno: "Seus dados estão protegidos (LGPD)"

**Coluna direita — WhatsApp direto:**
- Ícone WhatsApp grande
- Número: (17) 99199-9006
- Botão verde: "Chamar no WhatsApp agora"
- Texto: "Resposta rápida em horário comercial"

No mobile: WhatsApp primeiro (mais acessível), formulário abaixo.

### 9. FAQ (fundo escuro, accordion)

- **Título:** "Dúvidas frequentes"
- **Perguntas (accordion clicável):**

| Pergunta | Resposta |
|----------|---------|
| Quanto custa o serviço? | O custo varia por caso. Após a análise, informamos o valor antes de qualquer contratação. |
| Preciso de provas do bloqueio? | Prints e e-mails ajudam, mas não são obrigatórios. Avaliamos o caso com o que você tiver. |
| Funciona para quem foi bloqueado há tempo? | Sim, desde que dentro do prazo legal. Cada caso é analisado individualmente. |
| Atende minha cidade? | Sim. Atendemos em todo o Brasil — presencialmente em Rio Preto ou por vídeo. |
| Quanto tempo demora o processo? | Varia conforme a complexidade. Acompanhamos até o desfecho. |
| Só trabalham com iFood? | iFood é nosso foco principal, mas atuamos com outras plataformas de delivery também. |

- Schema.org FAQPage para SEO

### 10. Footer

- Logo CASCOB + "Recuperação de Créditos"
- Telefone: (17) 99199-9006
- Instagram: @cascobsjrp
- Link: cascob.com.br (site principal)
- CNPJ: 22.770.533/0001-95
- Texto LGPD: "Seus dados são protegidos conforme a Lei nº 13.709/2018"
- Copyright 2026

---

## SEO

- Title: "Bloqueado no iFood ou Uber? Conheça seus direitos | CASCOB"
- Meta description: "Entregador ou motorista bloqueado no iFood, Uber ou outra plataforma? A CASCOB atua na reativação de conta, compensação financeira e reparação por danos. Fale conosco."
- Schema.org: Organization + FAQPage
- Open Graph + Twitter Cards com og-image específica
- robots.txt + sitemap.xml

## Performance

- Imagens com lazy loading (exceto hero)
- CSS crítico inline no head
- JS mínimo (accordion FAQ, smooth scroll, máscara WhatsApp, mobile menu)
- Fontes com preload + font-display: swap
- Meta viewport + acessibilidade (skip-link, aria-labels, alt texts)

## WhatsApp Links

Todas as mensagens pré-preenchidas com contexto:
- Hero: "Olá, fui bloqueado na plataforma de delivery e gostaria de avaliar meu caso."
- Formulário: "Olá, enviei um formulário pelo site entregadorbloqueado.com.br e gostaria de falar sobre meu caso."
- Header/Footer: "Olá, vim pelo site entregadorbloqueado.com.br."
