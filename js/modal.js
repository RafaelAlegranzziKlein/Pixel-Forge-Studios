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