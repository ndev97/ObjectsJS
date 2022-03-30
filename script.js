class App{
    constructor(descargas, peso){
        this.downloads = descargas;
        this.weight = peso;
        this.installed = false;
        this.open = false;
    }
    install(){
        if(this.installed === false){
            this.installed = true;
            alert("Instalado correctamente.");
        } else if(this.installed === true){
            alert("La App ya esta instalada.")
        }
    }
    uninstall(){
        if(this.installed === true){
            this.installed = false;
            alert("App desinstalada correctamente.");
        } else{
            alert("ERROR. No se puede desinstalar sin haber instalado previamente.");
        }
    }
    run(){
        if(this.open === false && this.installed === true){
            this.open = true;
            alert("App abierta correctamente.");
        } else if(this.open === true){
            alert("La app ya esta abierta.");
        } else{
            alert("ERROR. No se puede abrir si no esta instalada.");
        }
    }
    close(){
        if(this.open === true && this.installed === true){
            this.open = false;
            alert("App cerrada correctamente.");
        } else if(this.installed === false){
            alert("ERROR. La app no esta instalada.");
        } else if(this.open === false){
            alert("ERROR. La app ya esta cerrada.");
        }
    }
}

const app = new App("430K", "210MB");

let click = 0;
function Info(){
    click++;
    if(click >= 2){
        return alert("No se puede mostrar dos veces la misma informacion.");
    }
    const contenedor = document.getElementById("btn-box");
    let newDiv = document.createElement("div");
    newDiv.classList.add("contenedorParrafo");
    newDiv.innerHTML=`
        <p><b>Cantidad de descargas de la app:</b> +${app.downloads}</p>
        <p><b>Peso de la app:</b> ${app.weight}</p>
    `;
    contenedor.appendChild(newDiv);
    console.log(click);
}
const info = document.getElementById("info");
info.addEventListener("click", Info);


const instalar = document.getElementById("install");
const abrir = document.getElementById("open");
const cerrar = document.getElementById("close");
const desinstalar = document.getElementById("uninstall");

instalar.addEventListener("click", function(){
    app.install();
});
desinstalar.addEventListener("click", function(){
    app.uninstall();
});
abrir.addEventListener("click", function(){
    app.run();
});
cerrar.addEventListener("click", function(){
    app.close();
});