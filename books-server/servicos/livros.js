import fs from 'fs';

function geTodosLivros(){
    return JSON.parse(fs.readFileSync("livros.json"));
}

export { 
    geTodosLivros,
};