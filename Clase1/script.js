/* Creamos nuestro primer codigo de node.js 
Node.js se ejecuta en la computador (lo ejecuta v8 de node)
*/


/*  Ejercicio 1
Una vez creada la class proyecto se debera crear el metodo agregarParticipante ( participante)
A su vez crear la class Participante que tendra las propiedades (nombre, apellido, dinero (empieza en 0) y amigos (empieza en array vacio))


eliminarParticipante(nombre) el metodo eliminarPa|rticipante recibe el nombre y elimina del array al participante

reestimarElProyecto(nueva estimacion) permitira cambiar el tiempo estimado del proyecto

nombrarParticipantes() por cada participante debera decir el nombre y apellido del participante

(Agregar la propiedad remuneracion al participante)
(Agregar el metodo a participante) pagar sueldo () incrementara su dinero por la remuneracion del participante

pagarSueldos() por cada participante activara el metodo pagar sueldo

  */


class Proyecto {
    constructor(nombre, precio, categoria, duracionEstimada) {
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = categoria;
        this.duracionEstimada = duracionEstimada;
        this.participantes = [];
    }

    agregarParticipante(participante) {
        this.participantes.push(participante);
    }

    EliminarParticipante(nombre) {
        this.participantes = this.participantes.filter(participante => participante.nombre !== nombre);
    }

    reestimarElProyecto(nuevaEstimacion) {
        this.duracionEstimada = nuevaEstimacion
}

    nombrarParticipantes() {
        this.participantes.forEach(participante => {
            console.log(participante.nombre, participante.apellido)
        });
    }

    Pagar(){
        this.participantes.forEach(participante => { participante.pagarSueldo()})
    }
}

class Participante{
        constructor(nombre, apellido, remuneracion){
            this.nombre = nombre
            this.apellido = apellido
            this.dinero = 0
            this.amigos = []
            this.remuneracion = remuneracion        
}

    pagarSueldo() {
        this.dinero += this.remuneracion
    }
}

const proyecto1 = new Proyecto('Desarrollo de una app', 50000, 'Desarrollo', 10);

proyecto1.agregarParticipante(new Participante('Pepe', 'Argento', 200))
proyecto1.agregarParticipante(new Participante('Josefo', 'Alsamendi', 400))

proyecto1.EliminarParticipante("Pepe")

proyecto1.reestimarElProyecto(25)

console.log(proyecto1.nombrarParticipantes())

proyecto1.Pagar()


console.log(proyecto1)


