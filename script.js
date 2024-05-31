function BuscarId(){
    let idd = document.getElementById("aidi").value;
    let result = document.getElementById("informacion");

    class ErrorDeId extends Error{
        constructor(message){
            super(message)
            this.name = 'Todo esta mal'
        }
    }
    class ErrordeNombreNull extends Error{
        constructor(message){
            super(message)
            this.name = 'Todo esta mal'
        }
    }
    class ErrorPropiedadInexistente extends Error{
        constructor(message){
            super(message)
            this.name = 'Todo esta mal'
        }
    }
    class ErrorInexistente extends Error{
        constructor(message){
            super(message)
            this.name = 'Todo esta mal'
        }
    }
    
    try{    
        if(idd == "a")
            {
                result.value =  new ErrorDeId("El id no es un número")
            }
        else if(idd == 2)
            {
                result.value = JSON.stringify(BaseDeDatosFalsa[1]);
            }
        else if(idd == 3)
            {
                result.value = JSON.stringify(BaseDeDatosFalsa[2]);
            }
        else if(idd == 4)
            {
                result.value =  new ErrordeNombreNull("El nombre contiene un null");
            }
        else if(idd == 5)
            {
                result.value = JSON.stringify(BaseDeDatosFalsa[4]);
            }
        else if(idd == 6)
            {
                result.value =  new ErrorPropiedadInexistente("La propiedad no existe ");
            }
        else {
            result.value =  new ErrorInexistente("El ID no existe");
        }                             
    }
    catch(e){
        result.innerHTML= e.name
    }
    
}

let BaseDeDatosFalsa = [
    {
        id: "a",
        nombre: "Juan",
        apellido: "Perez",
        edad: 66,
        profecion: "Ing Mecanico"
    },
    {
        id: 2,
        nombre: "Sofía",
        apellido: "Rodríguez",
        edad: 22,
        profecion: "Lic Marketing Digital"
    },
    {
        id: 3,
        nombre: "Mariana",
        apellido: "García",
        edad: 33,
        profecion: "Ing Sistemas Computacionales"
    },
    {
        id:4,
        nombre: null,
        apellido: "Martínez",
        edad: 18,
        profecion: "Ing Industrial"
    },
    {
        id:5,
        nombre: "Valentina",
        apellido: "Gómez",
        edad: 26,
        profecion: "Lic Derecho"
    },
    {
        id:6,
        nombre: "Alejandro",
        apellido: "Flores",
        edad: 17,
       
    },
]