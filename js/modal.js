// Captura os elementos do modal
console.log("O script foi carregado com sucesso!");
const modal = document.getElementById("gameModal");
const modalTitle = document.getElementById("modalGameTitle");
const modalGenre = document.getElementById("modalGameGenre");
const modalDesc = document.getElementById("modalGameDesc");

const closeBtn = document.querySelector(".close-btn");

// Seleciona TODOS os botões "VER MAIS"
const verMaisButtons = document.querySelectorAll(".btn-ver-mais");

// Adiciona o evento de clique em cada um deles
verMaisButtons.forEach(button => {
  button.addEventListener("click", function() {
    // Pegando os dados do botão que foi clicado
    const titulo = this.getAttribute("data-titulo");
    const genero = this.getAttribute("data-genero");
    const descricao = this.getAttribute("data-desc");
    const linkDoApp = this.getAttribute("data-link");

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