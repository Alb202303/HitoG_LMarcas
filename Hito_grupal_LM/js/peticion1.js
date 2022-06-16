let mapi= new Map();



function cargarData(){
    fetch("https://jsonplaceholder.typicode.com/comments")
    .then(response=>response.json())
    .then(data=>mostrar(data))
}


function mostrar(dato){
    for (let i in dato) {
        mapi.set(dato[i].id,dato[i]);
    }
    document.getElementById("datos").innerText = "Hemos localizado "+mapi.size+ " Posts para tí";

}

function verTodo(){
    let des=document.getElementById("destino");
    des.innerHTML="";
    for (let pss of mapi.values()) {
        let nodo= document.createElement("p");
        let text= "Id Post: "+pss.postId+
        " id: "+pss.id+"<br>"+" name: "+pss.name+
        "<br>"+"Email: "+pss.email+
        "<br>"+pss.body;
        nodo.innerHTML=text;
        des.appendChild(nodo);
    }
}
function verpostid(){
    let num=document.getElementById("number").value;
    let des=document.getElementById("destino");
    des.innerHTML="";
    if (num=="") {
        des.innerHTML = "Debes escribir número de usuario";
        return;
    }

  
    for (let pss of mapi.values()) {
        if(pss.id==num) {
        let nodo= document.createElement("p");
       let text= "Id Usuario: "+pss.postId+
       " id: "+pss.id+"<br>"+" Name: "+pss.name+
       "<br>"+"Email: "+pss.email+
       "<br>"+pss.body;
       nodo.innerHTML=text;
        des.appendChild(nodo);
        }

    }
}
function veruid(){
    let num=document.getElementById("number").value;
    let des=document.getElementById("destino");
    des.innerHTML="";
    if (num=="") {
        des.innerHTML = "Debes escribir número de usuario";
        return;
    }

    for (let pss of mapi.values()) {
        if(pss.postId==num) {
        let nodo= document.createElement("p");
       let text= "Id Usuario: "+pss.postId+
       " id: "+pss.id+"<br>"+" Name: "+pss.name+
       "<br>"+"Email: "+pss.email+
       "<br>"+pss.body;
       nodo.innerHTML=text;
        des.appendChild(nodo);
        }

    }
}