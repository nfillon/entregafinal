const minutoHora = 24;
const diaMes= 30;


let arregloInstancias = [{
    id: 1,
    tipo: "t2.nano2",
    description:  "Vcpu = 1 <br> Memoria = 0,5 GB <br> Storage = EBS",
    precio: "Valor por Minuto 0.0058"
}, {
    id: 2,
    tipo: "t2.micro",
    description:  "Vcpu = 1 <br> Memoria = 1 GB <br> Storage = EBS ",
    precio: "Valor por Minuto 0.0116"
},{
    id: 3,
    tipo: "t2.small",
    description:  "Vcpu = 1 <br> Memoria = 2 <br> Storage = EBS ",
    precio: "Valor por Minuto 0.023"
},{
    id: 4,
    tipo : "t2.medium",
    description : "Vcpu <br> 2 Memoria = <br>  Storage = EBS" ,
    precio: "Valor por Minuto 0.0464"
},{
    id: 5,
    tipo : "t2.large",
    description : "Vcpu = 2 <br> Memoria = 8 <br> Storage = EBS " ,
    precio : "Valor por Minuto 0.0928"
}];

//Titulo con HTML dinamico

let IdWelcome = document.getElementById('IdWelcome')
IdWelcome.innerHTML=`<h3><strong>Hola vas a iniciar la contratacion de instancias Ec2</strong></span>`


//Recorro el arreglo y armo las card
let idCard = document.getElementById('idCard')

arregloInstancias.forEach(instancias =>  { idCard.innerHTML += `
  <div class="col-sm-6 w-25 mb-1" >
        <div class="card" >
            <div class="card-body" id="instancia${instancias.id}">
            <h5 class="card-title text-center">Instancia Tipo: ${instancias.tipo}</h5>
            <p class="card-text text-center">${instancias.description}</p>
            <p class="card-text text-center"><strong> ${instancias.precio}</strong></p>
            <div class="text-center"> 
                <a href="#" class="btn btn-primary justify-content-center" type="submit" >Agregar al carrito</a>
            </div>
        </div>
   </div>
  `
})
//Voy a ir armado el proceso de contratacion
let carrito = document.getElementById('instancia${instancias.id}')

carrito.click('submit',(e) => { 
    e.preventDefault()
    console.log(hola)
    // let idInstacion = document.getElementById('instancia${instancias.id}')
    // console.log(idInstacion)
})
