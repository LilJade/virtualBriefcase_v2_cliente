import {API_HOST} from "../utils/constant";
import {getTokenApi} from "./auth"

export function getUserHabilidadesApi(idUser, page){
    const url = `${API_HOST}/veoherramientas?id=${idUser}&page=${page}`;

    const params ={
        headers:{
            "Content-Type": "application/json",
            Authorization: `Bearer ${getTokenApi()}`
        }
    }
    return fetch(url, params)
    .then(response => {
        return response.json();
    })
    .catch((err)=>{
        return err;
    });
}

export function getHabilidadesApi(search){
    const url = `${API_HOST}/mostrarHerramientas?page=1&type=new&search=${search}`;

    const params ={
        headers:{
            "Content-Type": "application/json",
            Authorization: `Bearer ${getTokenApi()}`
        }
    }
    return fetch(url, params)
    .then(response => {
        return response.json();
    })
    .catch((err)=>{
        return err;
    });
}



export function checkFollowhabilidadesApi(idHabilidad){
    const url = `${API_HOST}/consultaRelacionHU?id=${idHabilidad}`;

    const params = {
        headers:{
            Authorization: `Bearer ${getTokenApi()}`
        }
    }

    return fetch(url,params)
    .then(response =>{
        return response.json();
    })
    .then(result =>{
        return result;
    })
    .catch(err =>{
        return err
    });

}

export function unfollowHabilidadApi(idHabilidad){
    const url = `${API_HOST}/bajaRelacionHU?id=${idHabilidad}`;

    const params = {
        method: "DELETE",
        headers:{
            Authorization: `Bearer ${getTokenApi()}`
        }
    }

    return fetch(url,params)
    .then(response =>{
        return response.json();
    })
    .then(result =>{
        return result;
    })
    .catch(err =>{
        return err
    });

}

export function followHabilidadApi(idHabilidad){
    const url = `${API_HOST}/herramientasUsuario?id=${idHabilidad}`;

    const params = {
        method: "POST",
        headers:{
            Authorization: `Bearer ${getTokenApi()}`
        }
    }

    return fetch(url,params)
    .then(response =>{
        return response.json();
    })
    .then(result =>{
        return result;
    })
    .catch(err =>{
        return err
    });

}