const Usuario = require("../models/Usuario");
require("dotenv").config({ path: "variables.env" });
const jwt = require("jsonwebtoken");

// Resolvers
const resolvers = {
  Query: {
    obtenerUsuario: async (_, { email }) => {
      const usuario = await Usuario.findOne({ email });
      if (!usuario) {
        throw new Error("No existe ese Usuario");
      }
      return usuario;
    },
    obtenerUsuarios: async () => {
      try {
        const usuarios = await Usuario.find();

        return usuarios;
      } catch (error) {
        console.log("🚀 ~ file: resolvers.js ~ line 23 ~ error", error);
      }
    },
  },
  Mutation: {
    registrarUsuario: async (_, { input }) => {
      try {
        const { email } = input;

        // Verificar que Usuario no exista
        const existeUsuario = await Usuario.findOne({ email });
        if (existeUsuario) {
          throw new Error("El Usuario ya existe 33");
        }

        const usuario = new Usuario(input);
        usuario.save();
        return usuario;
      } catch (error) {
        throw new Error("El Usuario ya existe 40");
      }
    },
    actualizarUsuario: async (_, { email, input }, ctx) => {
      try {
        const usuario = await Usuario.findOne({ email });

        // Autorizar usuario
        if (email !== ctx?.currentUser?.email) {
          throw new Error("No tienes autorización");
        }
        //Si el usuario no existe
        if (!usuario) {
          throw new Error("El Usuario no existe");
        }

        const usuarioActualizado = await Usuario.findOneAndUpdate(
          { email },
          input,
          { new: true }
        );

        return usuarioActualizado;
      } catch (error) {
        throw new Error("Error desde 57 no tienes autorizacion");
      }
    },
    autenticarUsuario: async (_, { input }, ctx) => {
      const { email, isAuth } = input;

      // Si no existe usuario
      const usuario = await Usuario.findOne({ email });
      if (!usuario) {
        throw new Error("El Usuario no existe");
      }

      // Verificar si esta autenticado con auth0
      if (!isAuth) {
        throw new Error("El usuario no esta autenticado");
      }

      const userToToken = {
        email: usuario.email,
      };

      const token = jwt.sign(userToToken, process.env.SECRET_JWT, {
        expiresIn: "24h", // 1 hora en ms
      });

      const dataToSend = {
        user: usuario,
        token: token,
      };

      return dataToSend;
    },
  },
};

module.exports = resolvers;
