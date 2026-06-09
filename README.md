# 🛠️ Pixel Forge Studios - Landing Page

Uma landing page moderna, responsiva e com estética premium gamer desenvolvida para a **Pixel Forge Studios** uma empressa fictícia. O site serve como vitrine para os jogos do estúdio, centraliza o feedback da comunidade e oferece uma experiência de navegação fluida e interativa.

---

## 🚀 Funcionalidades Principais

* **Menu de Navegação Inteligente (Header):**
    * Fixo no topo para fácil acesso.
    * **Efeito Scroll Oculto:** O menu desaparece automaticamente ao rolar a página para baixo (focando na gameplay/conteúdo) e reaparece instantaneamente ao rolar levemente para cima.
    * Âncoras com rolagem suave (`smooth scroll`) para todas as seções do site.

* **Catálogo de Jogos Interativo:**
    * Cards personalizados para títulos de peso como *Beer Miner*, *Acorn Colonies Odyssey*, *Mechaanicaal* e *Harmonia do Caos*.
    * Modais informativos e dinâmicos para detalhar o gênero e a proposta de cada jogo ao clicar em "Ver Mais".

* **Seção de Comunidade & Feedbacks Dinâmicos:**
    * Exibição de depoimentos fixos de jogadores em formato de cards estilizados.
    * **Sistema de Comentários em Tempo Real:** Permite que novos usuários publiquem seus feedbacks. Os novos comentários aparecem instantaneamente no topo da lista.
    * **Salvamento Provisório (`localStorage`):** Os comentários ficam guardados na memória do navegador. Mesmo atualizando a página (F5) ou fechando o navegador, as mensagens não se perdem.

* **Modal de Contato Integrado:**
    * O formulário de contato foi transformado em um modal centralizado e elegante, acessível tanto pelo menu superior quanto pelo botão dedicado no rodapé (`footer`), otimizando o espaço da página principal.
    * Fechamento prático ao clicar no botão "X" ou em qualquer área fora da caixa de diálogo.

* **Alternador de Tema (Dark/Light Mode):**
    * Botão integrado no header para alternar entre o modo escuro (foco gamer) e o modo claro, alterando as variáveis de cores do CSS de forma suave.

---

## 🛠️ Tecnologias Utilizadas

* **HTML5:** Estruturação semântica de todas as seções, formulários e elementos de mídia.
* **CSS3:** Estilização baseada em **Variáveis CSS** (Custom Properties) para fácil manutenção de cores, além de Flexbox/Grid layout para responsividade total em dispositivos móveis e desktops.
* **JavaScript (Vanilla JS):** Lógica de manipulação do DOM para abertura/fechamento de modais, controle de comportamento do scroll do header, persistência de dados com `localStorage` e animações de inserção de elementos.

---

## 📂 Estrutura do Projeto

```text
├── assets/
│   └── img/               # Logos, ícones e artes dos jogos
├── css/
│   └── styles.css         # Estilização geral, variáveis de tema e media queries
|   └── reset.css          # Reinicialização da pagina para melhor edição
├── html/
│   └── index.html         # Arquivo principal da estrutura da página
└── js/
    └── modal.js           # Toda a inteligência da página (Modais, Header e Comentários)

```

---
## 🌐 Como Acessar e Executar o Projeto

Você pode interagir com a landing page da Pixel Forge Studios de duas maneiras:

### 1. Executando Localmente (Na sua máquina)

Se você deseja baixar o código para testar, estudar ou fazer modificações:

1. **Faça o clone do repositório** utilizando o terminal:
   ```bash
   git clone https://github.com/RafaelAlegranzziKlein/Pixel-Forge-Studios.git

2. **Link do site** https://pixel-forge-studios-psi.vercel.app/
---

## 🙍 Autor do Projeto

* **Rafael Alegranzzi Klein**
