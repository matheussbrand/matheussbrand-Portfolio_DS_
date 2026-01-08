# Portfólio Data Scientist - Premium Edition

Portfólio profissional para Data Scientists senior focado em SaaS, arquitetura de dados e produtos premium. Design dark/gold premium com carrossel de projetos e artigos.

## 🎨 Tema Premium

- **Background**: `#0E0E0E`
- **Cards**: `#1A1A1A`
- **Texto Principal**: `#F5F5F5`
- **Texto Secundário**: `#A1A1AA`
- **Destaque Premium**: `#D4AF37` (dourado)
- **Hover**: `#FACC15`

## 🚀 Tecnologias

- React 18.3.1
- Tailwind CSS 4.1.12
- React Slick (Carrossel)
- Lucide React (Ícones)
- Vite 6.3.5

## 📦 Instalação e Desenvolvimento

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev

# Build para produção
npm run build
```

## 🌐 Deploy no GitHub Pages

### 1. Preparar repositório

Crie um repositório no GitHub chamado `username.github.io` (substitua `username` pelo seu usuário do GitHub).

### 2. Configurar vite.config.ts

Adicione a configuração do base no arquivo `vite.config.ts`:

```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/', // ou '/nome-do-repositorio/' se não for username.github.io
})
```

### 3. Build e Deploy

```bash
# Fazer build
npm run build

# O conteúdo estará na pasta dist/
```

### 4. Deploy Automático com GitHub Actions

Crie o arquivo `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Build
        run: npm run build
        
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

### 5. Configurar GitHub Pages

1. Vá em `Settings` > `Pages` do seu repositório
2. Em `Source`, selecione `gh-pages` branch
3. Clique em `Save`

## ✨ Funcionalidades

### Carrossel de Projetos/Artigos
- Navegação automática e manual
- Links externos que abrem em nova aba
- Responsivo (3 slides desktop, 2 tablet, 1 mobile)
- Visual premium com hover effects

### Formulário de Contato
- Abre cliente de email nativo
- Assunto formatado: "Contato Portfólio: [Assunto do Formulário]"
- Validação de campos
- Feedback visual de envio

### Design Responsivo
- Mobile-first
- Smooth scroll entre seções
- Menu hambúrguer em mobile
- Animações suaves

## 🎯 Personalização

### Alterar Informações Pessoais

1. **Hero Section** (`/src/app/components/Hero.tsx`):
   - Nome, título, descrição
   - Links de redes sociais

2. **About Section** (`/src/app/components/About.tsx`):
   - Biografia, educação, experiência
   - Certificações

3. **Skills Section** (`/src/app/components/Skills.tsx`):
   - Categorias de skills
   - Níveis de proficiência

4. **Projects Section** (`/src/app/components/Projects.tsx`):
   - Lista de projetos e artigos
   - Links externos
   - Métricas

5. **Contact Section** (`/src/app/components/Contact.tsx`):
   - Email (altere `seu@email.com` para seu email real)
   - Localização
   - Mensagem de disponibilidade

### Alterar Cores

Edite o arquivo `/src/styles/theme.css` para mudar o esquema de cores.

## 📱 Responsividade

- **Desktop**: Layout completo com 3 colunas no carrossel
- **Tablet**: 2 colunas no carrossel, menu adaptado
- **Mobile**: 1 coluna, menu hambúrguer, navegação otimizada

## 🔧 Scripts Disponíveis

- `npm run dev` - Inicia servidor de desenvolvimento
- `npm run build` - Cria build de produção
- `npm run preview` - Preview do build local

## 📄 Licença

Este projeto é de código aberto para uso pessoal e profissional.

## 🤝 Contribuições

Sinta-se à vontade para fazer fork e personalizar para suas necessidades!

---

**Desenvolvido para Data Scientists Senior** 
Focado em SaaS, Arquitetura de Dados e ML em Escala
