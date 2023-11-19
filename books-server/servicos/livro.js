import fs from 'fs';

function  getLivroPorId(id){
    const livros = JSON.parse(fs.readFileSync("livros.json"));
    const livroFiltrado = livros.filter( livro => livro.id === id)[0];
    return livroFiltrado;
}

function insereLivro(livroNovo){
    const livros = JSON.parse(fs.readFileSync("livros.json"));
    const novaListaDeLivros = [ ...livros, livroNovo ];

    fs.writeFileSync("livros.json", JSON.stringify(novaListaDeLivros));
}

function modificaLivro(modificacoes, id){
    let livros = JSON.parse(fs.readFileSync("livros.json"));
    const indiceModificado = livros.findIndex(livro => livro.id === id);

    const conteudoAtualizado = { ...livros[indiceModificado], ...modificacoes};
    livros[indiceModificado] = conteudoAtualizado;
    fs.writeFileSync("livros.json", JSON.stringify(livros));
    return livros[indiceModificado];
}

function deletaLivro(id){
    const livros = JSON.parse(fs.readFileSync("livros.json"));
    const livrosAtualizados = livros.filter( livro => livro.id !== id);

    fs.writeFileSync("livros.json", JSON.stringify(livrosAtualizados));
}

export { 
    getLivroPorId,
    insereLivro,
    modificaLivro,
    deletaLivro
};