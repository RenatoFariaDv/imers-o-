function pesquisar() {
    // Obtém o valor digitado no input
    const nomeBatera = document.getElementById("nome-batera").value.trim().toLowerCase(); // Convertendo para minúsculas para uma busca sem diferenciação de maiúsculas/minúsculas
    console.log(`Procurando por: ${nomeBatera}`); // Exibe o valor do input no console para testes

    // Obtém a referência da seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    console.log(section); // Exibe no console a referência à seção para garantir que foi encontrada corretamente.

    // Cria uma string vazia que vai armazenar os resultados da pesquisa
    let resultados = "";

    // Loop que percorre o array 'dados', onde estão os detalhes de cada baterista
    for (let dado of dados) {
        // Verifica se o nome do baterista no array contém o valor digitado no campo de pesquisa
        if (dado.nome.toLowerCase().includes(nomeBatera)) {
            // A cada iteração, a string 'resultados' vai sendo preenchida com o HTML para exibir os dados do baterista
            resultados += `
                <div class="item-resultado">
                    <h2>
                        <a href="${dado.instagram}" target="_blank">${dado.nome}</a> <!-- Nome do baterista como link para Instagram -->
                    </h2> 
                    <p class="descricao-meta">Nacionalidade: ${dado.nacionalidade}</p> <!-- Nacionalidade do baterista -->
                    <p class="descricao-meta">Idade: ${dado.idade}</p> <!-- Idade do baterista -->
                    <p class="descricao-meta">Gênero Musical: ${dado.generoMusical}</p> <!-- Gênero musical em que o baterista atua -->
                    <p class="descricao-meta">Descrição: ${dado.descricao}</p> <!-- Descrição do baterista, se houver -->
                    <a href="${dado.link}" target="_blank">Assista a uma performance</a> <!-- Link para assistir à performance do baterista -->
                </div>
            `;
        }
    }

    // Se nenhum resultado for encontrado
    if (resultados === "") {
        resultados = `<p>Nenhum baterista encontrado com esse nome.</p>`;
    }

    // Após o loop, insere a string 'resultados' dentro da seção de resultados
    section.innerHTML = resultados;
}


