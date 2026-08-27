function curtir(botao) {
    const container = botao.parentElement;
    const contador = container.querySelector('.like-count');
    const icone = botao.querySelector('.plant-icon');
    
    // Pega o número atual de curtidas
    let curtidas = parseInt(contador.innerText) || 0;
    curtidas++;
    
    // Atualiza o texto da contagem
    contador.innerText = curtidas + (curtidas === 1 ? " curtida" : " curtidas");

    // Faz a plantinha crescer dependendo das curtidas
    if (curtidas >= 10) {
        icone.innerText = "🌳"; // Árvore grande
    } else if (curtidas >= 5) {
        icone.innerText = "🪴"; // Vaso com planta
    } else if (curtidas >= 2) {
        icone.innerText = "🌿"; // Ramo de folhas
    }
}
