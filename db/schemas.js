const { gql } = require("apollo-server");

// Schemas
const typeDefs = gql`
  type Estudiante {
    id: ID
    name: String!
    email: String!
    role: String!
    photo: String
  }

  input EstudianteInput {
    name: String!
    email: String!
    role: String!
    password: String!
  }

  type Mutation {
    registrarEstudiante(input: EstudianteInput): Estudiante
  }

  type Query {
    obtenerEstudiante(id: ID!): Estudiante
  }
`;

module.exports = typeDefs;
