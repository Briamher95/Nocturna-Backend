// ACA NOS ENSEÑAN A EXPORTAR E IMPORTAR .





/* const {usuarios} = require('./src/usuarios.js');


usuarios.forEach(usuario => {
    console.log(`Hola ${usuario.nombre} ${usuario.apellido}`);
})

 */

/* Crear una class llamada chatManager que tenga un atributo llamado chat (arr vacio) y otro llamado idCounter (empieza en 0)

y crearle los metodos:


createMessage(message: objeto (content, author))

Recibira un mensaje, le agregara un id (autoincrementable con el idConter)  y una propiedad llamada fecha (poner siempre la fecha 'hoy'). Luego guardara el mensaje en el array llamado chat

Nos dira por consola mensaje guardado correctamente

getMessageById(id)

Nos devolvera el mensaje en caso de existir 

Sino devolvera null


*/

const filesystem = require("fs")

class chatManager {
    constructor() {
        this.chat = [];
        this.idCounter = 0;
    }

    async createMessage(message) {
        this.chat.push({ ...message, id: this.idCounter++, fecha: "Hoy" })

        console.log("Mensaje guardado correctamente")

        await filesystem.promises.writeFile("db/chat-.json", JSON.stringify(this.chat), "utf-8")


    }

    getMessageById(id) {
        const messageFound = this.chat.find(message => message.id === id);
        return messageFound ? messageFound : null
    }

}

const nuevoChat = new chatManager();

nuevoChat.createMessage({ content: "Hola mundo", author: "Jose" });
nuevoChat.createMessage({ content: "Hola Espacio", author: "Feli" });

/* console.log(nuevoChat.getMessageById(1)); */

//Al momento de crear un msje se debera crear un archivo usando el filesystem donde guarda el contenido del msje 