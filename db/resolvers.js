const Estudiante = require("../models/Estudiante");

// Resolvers
const resolvers = {
  Query: {
    obtenerEstudiante: async (_, { id }) => {
      const estudiante = await Estudiante.findById({ _id: id });
      if (!estudiante) {
        throw new Error("No existe ese estudiante");
      }
      return estudiante;
    },
  },
  Mutation: {
    registrarEstudiante: async (_, { input }) => {
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
