const Estudiante = require("../models/Estudiante");

// Resolvers
const resolvers = {
  Query: {
    obtenerUsuario: () => "Obteniendo usuario...",
  },
  Mutation: {
    registrarUsuario: async (_, { input }) => {
      try {
        const { email } = input;
        // Verificar que estudiante no exista
        const existeEstudiante = await Estudiante.findOne({ email });
        if (existeEstudiante) {
          throw new Error("El estudiante ya existe");
        }

        const estudiante = new Estudiante(input);
        estudiante.save();
        return estudiante;
      } catch (error) {
        console.log("🚀 ~ file: resolvers.js ~ line 16 ~ error", error.message);
      }
    },
  },
};

module.exports = resolvers;
