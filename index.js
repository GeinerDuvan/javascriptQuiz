let url_api = "https://www.datos.gov.co/resource/ccvq-rp9s.json";

let contenido = document.querySelector('#contenido')
let boton = document.querySelector('#buscarboton')
let entrada = document.querySelector('input')
boton.addEventListener('click',  buscaDepartamento)

function buscaDepartamento(){
    dep = entrada.value;
    if (dep !== '') {
        url_api += `?departamento=${encodeURIComponent(dep)}`;
      }
    fetch(url_api)
      .then(resp => resp.json())
      .then(data => {
            tabular(data)
      })
}

function tabular(data){
        contenido.innerHTML = ''
        if(data.length > 0){
            let first_res = data.slice(0,10);
            for(let resultado of first_res){
                const fila = document.createElement('tr')
                fila.innerHTML +=`
                <td>${resultado.fechaobservacion}</td>
                <td>${resultado.valorobservado}</td>
                <td>${resultado.nombreestacion}</td>
                <td>${resultado.departamento}</td>
                <td>${resultado.municipio}</td>
                `;
                contenido.appendChild(fila);
            }
        }
}