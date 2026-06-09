console.log("O script foi carregado com sucesso!");

/* ========================================================
   LÓGICA DO MODAL
   ======================================================== */
const modal = document.getElementById("gameModal");
const modalTitle = document.getElementById("modalGameTitle");
const modalGenre = document.getElementById("modalGameGenre");
const modalDesc = document.getElementById("modalGameDesc");
const closeBtn = document.querySelector(".close-btn");
const verMaisButtons = document.querySelectorAll(".btn-ver-mais");

// Verifica se o modal existe nesta página antes de executar os eventos
if (modal && closeBtn) {
    verMaisButtons.forEach(button => {
        button.addEventListener("click", function() {
            const titulo = this.getAttribute("data-titulo");
            const genero = this.getAttribute("data-genero");
            const descricao = this.getAttribute("data-desc");
            
            // Nota: O this.getAttribute("data-link") foi removido pois não estava sendo usado.

            // Injetando os dados dentro do Modal
            modalTitle.innerText = titulo;
            modalGenre.innerText = `Gênero: ${genero}`;
            modalDesc.innerText = descricao;

            // Abre o modal na tela
            modal.style.display = "block";
        });
    });

    // Fechar o modal ao clicar no X
    closeBtn.onclick = function() {
        modal.style.display = "none";
    }

    // Fechar o modal ao clicar fora da caixinha
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

/* ========================================================
   LÓGICA DO MODO ESCURO E CLARO
   ======================================================== */
const darkModeToggle = document.getElementById('darkModeToggle');
const htmlElement = document.documentElement;
const logo = document.getElementById('logo');

// Verifica se o botão de tema e a logo existem nesta página
if (darkModeToggle && logo) {
    const pastaImagens = "../assets/img/";
    const logoClara = pastaImagens + "LogoClara.png";  // Imagem clara/branca
    const logoEscura = pastaImagens + "logoEscura.png";  // Imagem escura

    // Configuração Inicial do site (Modo Escuro Padrão)
    htmlElement.setAttribute('data-theme', 'dark');
    darkModeToggle.textContent = 'Modo Claro';
    logo.setAttribute('src', logoEscura); // Em fundo escuro, usamos a logo escura

    // Função que define o tema e troca a logo
    function definirTema(tema) {
        if (tema === 'dark') {
            htmlElement.setAttribute('data-theme', 'dark');
            darkModeToggle.textContent = 'Modo Claro';
            logo.setAttribute('src', logoEscura); 
        } else {
            htmlElement.removeAttribute('data-theme'); // Volta pro padrão (claro)
            darkModeToggle.textContent = 'Modo Escuro';
            logo.setAttribute('src', logoClara); 
        }
    }

    // Evento de clique no botão
    darkModeToggle.addEventListener('click', () => {
        const temaAtual = htmlElement.getAttribute('data-theme');
        
        if (temaAtual === 'dark') {
            definirTema('light');
        } else {
            definirTema('dark');
        }
    });
}


//Modal de contato
// Seleciona os elementos do modal de contato
const contatoModal = document.getElementById('contatoModal');
const btnOpenContato = document.getElementById('btnOpenContato');
const closeContatoBtn = document.getElementById('closeContatoBtn');

// Função para abrir o modal de contato
btnOpenContato.addEventListener('click', () => {
    contatoModal.style.display = 'block';
});

// Função para fechar o modal no botão (X)
closeContatoBtn.addEventListener('click', () => {
    contatoModal.style.display = 'none';
});

// Função para fechar o modal se o usuário clicar em qualquer lugar fora da caixa branca
window.addEventListener('click', (event) => {
    if (event.target === contatoModal) {
        contatoModal.style.display = 'none';
    }
});

// --- LÓGICA DO HEADER (SUMIR AO ROLAR PARA BAIXO / APARECER AO ROLAR PARA CIMA) ---
let ultimoScroll = window.scrollY;
const header = document.getElementById('mainHeader');

window.addEventListener('scroll', () => {
    const scrollAtual = window.scrollY;

    if (scrollAtual > ultimoScroll && scrollAtual > 100) {
        // Rolando para baixo -> Esconde o Header
        header.classList.add('header-hidden');
    } else {
        // Rolando para cima -> Mostra o Header
        header.classList.remove('header-hidden');
    }
    
    ultimoScroll = scrollAtual;
});

// --- LINK DO HEADER ABRIR O MODAL DE CONTATO ---
const navContato = document.getElementById('navContato');

// Verificando se as variáveis do modal de contato já existem (do passo anterior)
// Caso não existam no seu escopo global, o código abaixo garante o funcionamento:
const modalContatoDois = document.getElementById('contatoModal');

if (navContato && modalContatoDois) {
    navContato.addEventListener('click', (event) => {
        event.preventDefault(); // Impede a página de pular direto para a seção antiga
        modalContatoDois.style.display = 'block'; // Abre o modal elegantemente
    });
}






// ── Hamburger Menu ─────────────────────────────────────
const hamburgerBtn = document.getElementById('hamburgerBtn');
const navLinks     = document.getElementById('navLinks');

// Cria overlay dinamicamente
const overlay = document.createElement('div');
overlay.classList.add('nav-overlay');
document.body.appendChild(overlay);

function openMenu() {
    hamburgerBtn.classList.add('is-open');
    navLinks.classList.add('is-open');
    overlay.classList.add('is-open');
    hamburgerBtn.setAttribute('aria-expanded', 'true');
    navLinks.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
}

function closeMenu() {
    hamburgerBtn.classList.remove('is-open');
    navLinks.classList.remove('is-open');
    overlay.classList.remove('is-open');
    hamburgerBtn.setAttribute('aria-expanded', 'false');
    navLinks.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
}

hamburgerBtn.addEventListener('click', () => {
    hamburgerBtn.classList.contains('is-open') ? closeMenu() : openMenu();
});

// Fecha ao clicar no overlay
overlay.addEventListener('click', closeMenu);

// Fecha ao clicar em um link do menu
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
});

// Fecha com Escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
});