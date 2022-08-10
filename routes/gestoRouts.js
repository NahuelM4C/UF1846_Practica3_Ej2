const express = require('express');
const router = express.Router();
const Joi = require('joi')

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

router.get("/", (req, res) => {
    res.send("Welcome to Fotored API's");
})

router.get("/api/usuarios", (req, res) => {
    res.send(usuarios);
})

router.get("/api/usuario/:id", (req, res) => {
    let idUsuario = parseInt(req.params.id);
    const elUsuario = usuarios.find((user) => {
        return user.id === idUsuario
    });
    if (!elUsuario) {
        res.status(404).send("No se ha encontrado el usuario con ese id")
    } else {
        res.send(elUsuario)
    }
})

// //? -1 -	Crear un nuevo usuario
router.post("/api/usuarios", (req, res) => {
    const nuevoUser = {
        id: usuarios.length + 1,
        nombre: req.body.nombre,
        mensajes: req.body.mensajes,
        conectado: req.body.conectado,
        seguidores: req.body.seguidores,
        siguiendo: req.body.siguiendo,
        puntuacion: req.body.puntuacion,
    };
    usuarios.push(nuevoUser);
    res.status(200).send(usuarios)
})

// //? -2	     Eliminar un usuario 
router.delete("/api/usuarios/:id", (req, res) => {
    let idUsuarios = parseInt(req.params.id);
    const elUsuario = usuarios.find((user) => {
        return user.id === idUsuarios;
    })
    if (!elUsuario) {
        res.status(404).send("No coincide la id del usuario")
        return
    }
    const position = usuarios.indexOf(elUsuario);
    usuarios.splice(position, 1);
    res.status(200).send(usuarios);
});

// //?  -3	Añadir nuevos mensajes al usuario
router.patch("/api/usuarios/mensajes/:id", (req, res) => {
    let idUsuarios = parseInt(req.params.id);
    const elUsuario = usuarios.find((user) => {
        return user.id === idUsuarios;
    })
    if (!elUsuario) {
        res.status(404).send("No coincide la id del usuario")
        return
    }

    elUsuario.mensajes.push(req.body.mensajes)
    res.status(200).send(elUsuario)
});

// //?   -4 -	Cambiar el estado de conexión del usuario
router.put("/api/usuarios/conexion/:id", (req, res) => {
    let idUsuarios = parseInt(req.params.id);
    const elUsuario = usuarios.find((user) => {
        return user.id === idUsuarios;
    })
    if (!elUsuario) {
        res.status(404).send("No coincide la id del usuario")
        return
    }

    //! Validamos que el valor que le pasemos sea unicamente booleano, sino da error
    const schema = Joi.object({
        conectado: Joi.boolean()
    })
    const validation = schema.validate(req.body, { convert: false });  // asignando la conversion en falso, limita el resto de entradas que no sea booleano
    if (validation.error) {
        console.log(validation.error.details[0].message);
        res.status(400).send(validation.error.details[0].message);
        return
    }

    elUsuario.conectado = req.body.conectado;
    res.status(200).send(elUsuario)
});

// //? -5	Modificar la puntuación del usuario
router.put("/api/usuarios/puntuacion/:id", (req, res) => {
    let idUsuarios = parseInt(req.params.id);
    const elUsuario = usuarios.find((user) => {
        return user.id === idUsuarios;
    })
    if (!elUsuario) {
        res.status(404).send("No coincide la id del usuario")
        return
    }
    elUsuario.puntuacion = req.body.puntuacion;
    res.status(200).send(elUsuario)
});

module.exports = router