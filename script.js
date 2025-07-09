document.addEventListener('DOMContentLoaded', () => {
    const heroSection = document.querySelector('.hero'); // Pegando a seção hero
    
    // Imagem 1 - Batman clássico
    const img1 = document.createElement('img');  // Criando a tag <img>
    img1.src = 'https://upload.wikimedia.org/wikipedia/commons/6/6f/Batman_VS_Superman_batman.png'; // Caminho para a primeira imagem
    img1.alt = 'Batman Clássico';  // Texto alternativo
    img1.classList.add('batman-classico');  // Adicionando uma classe para estilização
    img1.style.display = 'block'; // Garantindo que a imagem 1 seja exibida inicialmente
    
    // Imagem 2 - Batman de uma realidade alternativa
    const img2 = document.createElement('img');  // Criando a tag <img>
    img2.src = 'https://a-static.besthdwallpaper.com/batman-robin-dark-knight-figura-wallpaper-500x343-16372.jpg'; // Caminho para a segunda imagem
    img2.alt = 'Batman Alternativo';  // Texto alternativo
    img2.classList.add('batman-alternativo');  // Adicionando uma classe para estilização
    img2.style.display = 'none'; // A imagem 2 ficará oculta inicialmente
    
    // Adicionando as imagens à seção hero
    heroSection.appendChild(img1);
    heroSection.appendChild(img2);
    
    // Função para alternar entre as imagens quando clicado
    img1.addEventListener('click', () => {
        img1.style.display = 'none';  // Oculta a imagem 1 (Batman Clássico)
        img2.style.display = 'block'; // Exibe a imagem 2 (Batman Alternativo)
    });

    img2.addEventListener('click', () => {
        img2.style.display = 'none';  // Oculta a imagem 2 (Batman Alternativo)
        img1.style.display = 'block'; // Exibe a imagem 1 (Batman Clássico)
    });
});