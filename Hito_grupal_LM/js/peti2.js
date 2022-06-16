let mapa=new Map();

function cargarData1(){
    fetch("https://www.el-tiempo.net/api/json/v2/provincias/18")
    .then(response=>response.json())
    .then(data=>mostrar2(data))
}

function cargarData2(){
    fetch("https://www.el-tiempo.net/api/json/v2/provincias/19")
    .then(response=>response.json())
    .then(data=>mostrar2(data))
}

function mostrar2(data) {
    let capa2=document.getElementById("destino");
    capa2.innerHTML="";
    let table="<tr><th>ID ciudad</th><th>Nombre ciudad</th><th>Descripción</th><th>Temperatura máxima</th><th>Temperatura mínima</th></tr>";
    let valor=data.ciudades;
    console.log(valor);
    for(let i=0; i<valor.length; i++) {
        table+="<tr><td>"+valor[i].id+"</td><td>"+valor[i].name+"</td><td>"+valor[i].stateSky.description+"</td><td>"+valor[i].temperatures.max+"</td><td>"+valor[i].temperatures.min+"</td></tr>"
    }
    document.getElementById("destino").innerHTML=table;

    let capa=document.getElementById("destino2");
    capa.innerHTML="";
    let nodo=document.createElement("p");
    let text="<b>Título:</b> "+data.title+"<br>"+"<b>Hoy:</b> "+data.today.p+"<br>"+"<b>Mañana:</b> "+data.tomorrow.p;
    nodo.innerHTML=text;
    capa.appendChild(nodo);
}