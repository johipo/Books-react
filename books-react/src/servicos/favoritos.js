import axios from "axios"

const favoritosAPI = axios.create({baseURL: "http://localhost:8000/"})

async function getFavoritos() {
   const response = await favoritosAPI.get('/favoritos')
   return response.data
}

async function postFavorito(id){
   await favoritosAPI.post(`/favoritos/${id}`)
}

async function deleteFavorito(id){
   await favoritosAPI.delete(`/favoritos/${id}`)
}

export {
    getFavoritos,
    postFavorito,
    deleteFavorito
}