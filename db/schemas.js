const { gql } = require("apollo-server");

// Schemas
const typeDefs = gql`
  type Usuario {
    id: ID
    name: String!
    email: String!
    role: String!
    photo: String
  }

  input UsuarioInput {
    name: String!
    email: String!
    role: String!
    password: String!
  }

  type Mutation {
    registrarUsuario(input: UsuarioInput): Usuario
  }

  type Query {
    obtenerUsuario: String!
  }
`;

module.exports = typeDefs;
