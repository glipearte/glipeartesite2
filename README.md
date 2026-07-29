# Glipearte Pegue e Monte 🎈

Site oficial da **Glipearte Pegue e Monte**, empresa especializada em locação de kits de decoração para festas em Fortaleza/CE.

> **Missão:** Tornar festas bonitas, acessíveis e práticas, com o modelo "Pegue e Monte" — o cliente retira, monta e devolve, economizando sem abrir mão da beleza.

---

## 🎯 Objetivos do Projeto

- Criar uma presença online moderna, elegante e atrativa
- Converter visitantes em clientes via WhatsApp
- Apresentar catálogo de kits de decoração com filtros e busca
- Transmitir elegância, alegria, criatividade, confiança, facilidade e economia

---

## ✅ Funcionalidades Implementadas

### Páginas
- **Início (`index.html`)** — Hero com animações, sobre, como funciona, diferenciais, temas em destaque, depoimentos, Instagram, newsletter, FAQ e rodapé
- **Catálogo (`catalogo.html`)** — Filtros por categoria, busca instantânea, calculadora de decoração, cards de kits, favoritos, modal de detalhes e reserva via WhatsApp
- **Galeria (`galeria.html`)** — Layout estilo Pinterest/masonry, filtros por categoria, lightbox com navegação por teclado
- **Blog (`blog.html`)** — Artigos com dicas, tendências e inspirações para festas
- **Contato (`contato.html`)** — Formulário com validação, informações de contato, mapa do Google Maps e botões para WhatsApp/Instagram

### Recursos Premium
- ✅ Menu transparente com efeito ao rolar
- ✅ Modo escuro (dark mode) persistente via localStorage
- ✅ Barra de progresso de leitura
- ✅ Botão "Voltar ao Topo"
- ✅ WhatsApp flutuante em todas as páginas
- ✅ Busca instantânea no catálogo
- ✅ Sistema de favoritos no catálogo
- ✅ Calculadora de estimativa de decoração
- ✅ Carrossel de depoimentos automático
- ✅ Accordion de FAQ
- ✅ Lightbox na galeria
- ✅ Modal de detalhes dos kits
- ✅ Animações suaves e responsivas
- ✅ Lazy load em imagens

### SEO & Performance
- ✅ Meta tags completas (description, keywords, robots)
- ✅ Open Graph (Facebook/LinkedIn)
- ✅ Twitter Card
- ✅ Schema.org / JSON-LD (LocalBusiness)
- ✅ `robots.txt`
- ✅ `sitemap.xml`
- ✅ Favicon SVG
- ✅ Fontes e ícones otimizados via CDN
- ✅ Semântica HTML5 e acessibilidade (ARIA labels)

---

## 📁 Estrutura do Projeto

```
/
├── index.html
├── catalogo.html
├── galeria.html
├── blog.html
├── contato.html
│
├── css/
│   └── style.css
│
├── js/
│   ├── main.js
│   ├── catalogo.js
│   ├── galeria.js
│   └── contato.js
│
└── assets/
    ├── favicon.svg
    ├── robots.txt
    └── sitemap.xml
```

---

## 🌐 URLs de Entrada (Entry URIs)

| Página | URL | Parâmetros Suportados |
|--------|-----|----------------------|
| Home | `/` ou `index.html` | `#sobre`, `#como-funciona`, `#temas`, `#depoimentos`, `#faq`, `#contato` |
| Catálogo | `catalogo.html` | `?categoria=Infantil`, `?categoria=Adulto`, `?categoria=Casamento`, etc. <br> `?busca=Stitch` |
| Galeria | `galeria.html` | Filtros via interface |
| Blog | `blog.html` | - |
| Contato | `contato.html` | - |

### Exemplos de links diretos:
- `https://www.glipearte.com.br/catalogo.html?categoria=Infantil`
- `https://www.glipearte.com.br/catalogo.html?busca=Stitch`
- `https://www.glipearte.com.br/index.html#como-funciona`

---

## 🎨 Design System

### Paleta de Cores
- **Rosa Claro:** `#F8D7E6`
- **Rosa Pink:** `#EC4899`
- **Azul Tiffany:** `#44CFCB`
- **Azul:** `#4EA5D9`
- **Branco:** `#FFFFFF`
- **Cinza Claro:** `#F7F7F7`
- **Dourado:** `#F4C542`

### Tipografia
- **Títulos:** Poppins (ExtraBold)
- **Textos:** Nunito

### Ícones
- Font Awesome 6.4

---

## 🛠️ Tecnologias Utilizadas

- HTML5 semântico
- CSS3 moderno (variáveis, grid, flexbox, animações)
- JavaScript ES6+ (vanilla, sem frameworks)
- Mobile First
- Design responsivo
- Intersection Observer API
- LocalStorage para tema e favoritos
- CDN: Google Fonts, Font Awesome

---

## 🚀 Como Publicar

Para colocar o site no ar, vá até a aba **Publish** no painel do projeto e publique com um clique. O sistema gerará a URL de produção automaticamente.

---

## 📞 Dados de Contato (Exemplo)

- **Empresa:** Glipearte Pegue e Monte
- **Cidade:** Fortaleza – CE
- **WhatsApp:** (85) 99999-9999
- **E-mail:** contato@glipearte.com.br
- **Instagram:** [@glipearte](https://instagram.com/glipearte)
- **Facebook:** [glipearte](https://facebook.com/glipearte)

---

## ⚠️ Pontos de Atenção

- As imagens do site são placeholders via Unsplash e devem ser substituídas por fotos reais da Glipearte.
- O número de WhatsApp deve ser atualizado para o número real da empresa.
- O endereço completo e mapa do Google Maps devem ser ajustados para o local real de retirada dos kits.
- As URLs do `sitemap.xml` e `robots.txt` apontam para `https://www.glipearte.com.br/` — ajustar para o domínio final após a publicação.

---

## 📋 Próximos Passos Recomendados

1. **Substituir imagens** por fotos reais dos kits e decorações montadas.
2. **Atualizar dados de contato** (WhatsApp, endereço, e-mail, redes sociais).
3. **Conectar Instagram real** para exibir publicações recentes (atualmente é uma seção ilustrativa).
4. **Adicionar integração real** com Google Analytics e Google Search Console.
5. **Implementar backend** para formulário de contato e newsletter (atualmente redireciona para WhatsApp).
6. **Testar Lighthouse** e otimizar para pontuação acima de 95.
7. **Criar página individual** para cada kit (tema.html) se desejado futuramente.

---

© 2026 Glipearte Pegue e Monte. Todos os direitos reservados.
