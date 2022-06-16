function peticion1(){
    fetch('https://www.el-tiempo.net/api/json/v2/provincias/26')
    .then(response => response.json())
    .then(data => prueba (data));
}
function prueba(data) {
    var titulo=data.title;
    var title=document.getElementById("title");
        title.innerHTML +=
        `<header>
            <h1>` + titulo+`</h1>
        </header>`
} 



function llenarTabla(data) {
    var table="<tr><th>Nombre</th><th>Estado del cielo</th><th>Temperatura máxima</th><th>Temperatura mínima</th></tr>";
    var obj = data.ciudades;

    for (i = 0; i <obj.length; i++) { 
           table += "<tr><td>"+ 
            obj[i].name+
            "</td><td>"+
            obj[i].stateSky.description+
            "</td><td>"+
            obj[i].temperatures.max+
            "</td><td>"+
            obj[i].temperatures.min+
            
            "</td></tr>";
    }
    document.getElementById("tabla").innerHTML = table;
}

function llenarParrafoHoy(data) {
    var parrafohoy="<h2>HOY<h2>";
    var datos1 = data.today;

    parrafohoy += "<h3>"+ 
            datos1.p+
            "</h3>";
    
    document.getElementById("hoy").innerHTML = parrafohoy;
}

function llenarParrafoMañana(data) {
    var parrafomañana="<h2>MAÑANA</h2>";
    var datos2 = data.tomorrow;

    
    parrafomañana += "<h3>"+ 
        datos2.p+
            "</h3>";
    
    document.getElementById("mañana").innerHTML = parrafomañana;
}



        function loadTiempo() {
            const options = {
              method: "GET",
            };
            
            fetch("https://www.el-tiempo.net/api/json/v2/provincias/26", options)
                  .then(response => response.json())
                  .then(data => llenarTabla(data));
        }

        function loadHoy() {
            const options = {
              method: "GET",
            };
            
            fetch("https://www.el-tiempo.net/api/json/v2/provincias/26", options)
                  .then(response => response.json())
                  .then(data => llenarParrafoHoy(data));
        }

        function loadTomorrow() {
            const options = {
              method: "GET",
            };
            
            fetch("https://www.el-tiempo.net/api/json/v2/provincias/26", options)
                  .then(response => response.json())
                  .then(data => llenarParrafoMañana(data));
        }


