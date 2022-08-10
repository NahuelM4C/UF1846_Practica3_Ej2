const express = require('express');
const Joi = require('joi')
const app = express();
const rutasUsers = require('./routes/gestoRouts')
const rutasDocent = require('./routes/rutasDocents')

const helmet = require('helmet')
const morgan = require('morgan')
port = 3000;

app.use(express.json());
app.use(helmet());
app.use(morgan('common'))

const usuarios = [{
    id: 1,
    nombre: 'Lady Nati',
    mensajes: ['Eso no es así', 'Te falta cerrar parentesis', 'linea 76, lo tienes mal'],
    conectado: true,
    seguidores: 41,
    siguiendo: 4,
    puntuacion: 78
}, {
    id: 2,
    nombre: 'Samuel Mathew',
    mensajes: ['50€', 'eso son 50€', 'te apunto en la lista'],
    conectado: true,
    seguidores: 5,
    siguiendo: 398,
    puntuacion: 3
}, {
    id: 3,
    nombre: 'Hector Anderson',
    mensajes: ['...', 'eso con orientacion a objetos es mas facil', 'back-end es la monda'],
    conectado: false,
    seguidores: 62,
    siguiendo: 10,
    puntuacion: 54
}, {
    id: 4,
    nombre: 'Luis Sacrificer',
    mensajes: ['Empiezo a cogerle el tranquillo', 'Tendré que encargar par de cabras', 'Star Treck es mejor que Star Wars'],
    conectado: true,
    seguidores: 50,
    siguiendo: 128,
    puntuacion: 47
}]

const docentes = [
    {
        id: 1,
        nombre: 'Valka',
        apellidos: 'Dondarr',
        dni: '42.556.777-M',
        email: 'valka@sunmmail.com',
        password: 'valkita98?=',
    },
    {
        id: 2,
        nombre: 'Adrián',
        apellidos: 'Santos',
        dni: '43.123.444-B',
        email: 'adrian@sunmmail.com',
        password: 'adsan45*!',
    },
    {
        id: 3,
        nombre: 'Cristo',
        apellidos: 'Rey Santos',
        dni: '42.111.222-C',
        email: 'inri@sunmmail.com',
        password: 'inricrist0?¿=',
    },
    {
        id: 4,
        nombre: 'Lucifer',
        apellidos: 'Hell Hell',
        dni: '66.666.666-A',
        email: 'lucihell@sunmmail.com',
        password: '66666666',
    },
    {
        id: 5,
        nombre: 'Valdimiro',
        apellidos: 'Rebollo',
        dni: '41.544.778-O',
        email: 'vladi@sunmmail.com',
        password: 'vladiFuckYou4U,:*',
    },
    {
        id: 6,
        nombre: 'Lara',
        apellidos: 'Sanz',
        dni: '43.566.622-F',
        email: 'laraz@sunmmail.com',
        password: 'larili456',
    },
];

app.get("/", rutasUsers)

app.get("/api/usuarios", rutasUsers)
//! Endpoint docentes
app.get("/api/docentes", rutasDocent)
//! Endpoint  por id docentes
app.get("/api/docentes/:id", rutasDocent)

app.get("/api/usuario/:id", rutasUsers)

app.post("/api/usuarios", rutasUsers)

app.delete("/api/usuarios/:id", rutasUsers);

app.patch("/api/usuarios/mensajes/:id", rutasUsers);

app.put("/api/usuarios/conexion/:id", rutasUsers);

app.put("/api/usuarios/puntuacion/:id", rutasUsers);



app.listen(port, () => {
    console.log(`Escuchando el puerto ${port}...`);
})
