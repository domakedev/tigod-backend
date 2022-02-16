const Usuario = require("../models/Usuario");

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
  },
  Mutation: {
    registrarUsuario: async (_, { input }) => {
      console.log("🚀----------------->", input);
      try {
        const { email } = input;

        // Verificar que Usuario no exista
        const existeUsuario = await Usuario.findOne({ email });
        if (existeUsuario) {
          throw new Error("El Usuario ya existe");
        }

        const usuario = new Usuario(input);
        usuario.save();
        console.log("🚀 ~ file: resolvers.js ~ line 28 ~ usuario", usuario);
        return usuario;
      } catch (error) {
        console.log("🚀 ~ file: resolvers.js ~ line 16 ~ error", error.message);
      }
    },
    actualizarUsuario: async (_, { email, input }, ctx) => {
      try {
        console.log("🚀 ~ file: resolvers.js ~ line 33 ~ input", input);

        const usuario = await Usuario.findOne({ email });

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
        console.log("🚀 ~ file: resolvers.js ~ line 35 ~ error", error);
      }
    },
  },
};

module.exports = resolvers;
