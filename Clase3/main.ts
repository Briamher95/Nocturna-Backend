let nombre: string = "Pepe"

const edades: number[] = [30, 50, 60]

const nombres: string[] = ["pepe", "juan"]

const persona: { nombre: string, apellido: string } = { nombre: "Juancito", apellido: "Hernandez" }

const decirTipoDeDato = (dato: any): void => {
    console.log('El tipo de dato es: ' + typeof dato)
}

decirTipoDeDato(3)
decirTipoDeDato('hola')
decirTipoDeDato(false)



//contarHasta : recibe un numero y muestra por consola los numeros que hay de 0 hasta el numero recibido

//calcularIva : recibe un precio y devuelve el iva del precio

const contarHasta = (numero: number): void => {

    for (let i: number = 0; i <= numero; i++) {
        console.log(i)
    }
}

const calcularIva = (precio: number): number => precio * 0.21


interface Personas {
    nombre: string,
    apellido: string,
    edad: number
}

const personas: Personas[] = []

personas.push({ nombre: 'pepe', apellido: 'suarez', edad: 30 })

//---------------------------------------------------------------


/* Crear un array de objetos con interfaces

libros : Libro[] la interface Libro debe tener las props: titulo, cantPaginas, categoria, autor

productos: Pruducto[] la interface Producto debe tener las props: nombre, precio, id, stock, descripcion

usersConnected : User[] la interface User debe tener las props: nombre, ubicacion, sistemaOperativo 

*/

interface Libro {
    titulo: string,
    cantPaginas: number,
    categoria: string,
    autor: string
}

const libro: Libro[] = []

libro.push({ titulo: 'Harry Potter', cantPaginas: 1000, categoria: 'Fantasia', autor: 'J.K.Rowling' })

interface Producto {
    nombre: string,
    precio: number,
    id: number,
    stock: number,
    descripcion: string
}

const producto: Producto[] = []

producto.push({ nombre: 'lapicera', precio: 25, id: 0, stock: 11, descripcion: 'lapicera para escribir' })



//---------------------------------------------------------------


class Persona {
    nombre: string
    edad: number
    vida: number
    constructor(nombre: string, edad: number) {
        this.nombre = nombre
        this.edad = edad
        this.vida = 100
    }
}

/*  TEORIA HERENCIA  */

class Programador extends Persona {
    teclado: string
    constructor(nombre: string, edad: number) {
        super(nombre, edad)
        this.teclado = 'loGitech 80%'
    }
    hacerTrabajo(cantHrs: number): void {
        console.log('Hacer tiki tiki con teclado ' + this.teclado + ' por ' + cantHrs + ' horas')
    }
}

const programador: Programador = new Programador('pepe', 20)

programador.hacerTrabajo(30)




/*  EJERCICIO
Practica de herencia 
Crear una clase llamada Entidad con las propiedades:

-nombre
-vida
-danio

y los metodos

presentarse => mostrara por consola 'Hola, mi nombre es nombre'

atacar(objetivo : string) => mostrara por consola 'nombre ataco a objetivo y le inflingio danio daño'

obtenerVida( ) => devolvera la vida actual de la entidad


A partir de la clase Entidad

crear la clase Zombie

nuevas propiedades:

fechaDeMuerte:string

nuevos metodos:
revivir() si la vida es negativa o 0, regenerara la vida a 25 y dira por consola 'REEESURRECIION'


*/



class Entidad {
    nombre: string
    vida: number
    danio: number
    constructor(nombre: string, vida: number, danio: number) {
        this.nombre = nombre
        this.vida = vida
        this.danio = danio
    }

    presentarse(): void {
        console.log('Hola, mi nombre es ' + this.nombre)
    }

    atacar(objetivo : string) : void {
        console.log(this.nombre + ' ataco a ' + objetivo + ' y le inflingio ' + this.danio + ' daño')

    }

    obtenerVida(): number {
        return this.vida
    }
}


class Zombie extends Entidad {
    fechaDeMuerte: string
    constructor(nombre: string, vida: number, danio: number , fechaDeMuerte: string) {
        super(nombre, vida, danio)
        this.fechaDeMuerte = fechaDeMuerte
    }
    revivir(): void {
        if (this.vida <= 0) {
            this.vida = 25
            console.log('REEESURRECIIIIIIOOOOOOOOOOOOOOOOOOOON')
        }
    
}}