const express = require('express');
const router = express.Router();
const Joi = require('joi')

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

router.get("/api/docentes", (req, res) => {
    res.send(docentes);
})

router.get("/api/docentes/:id", (req, res) => {
    let idDocente = parseInt(req.params.id);
    const elDocente = docentes.find((user) => {
        return user.id === idDocente
    });
    if (!elDocente) {
        res.status(404).send("No se ha encontrado el Docente con ese id")
    } else {
        res.send(elDocente)
    }
})


module.exports = router