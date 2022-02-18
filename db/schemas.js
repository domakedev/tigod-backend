const { gql } = require("apollo-server");

// Schemas
const typeDefs = gql`
  type Usuario {
    id: ID
    name: String!
    email: String!
    role: String!
    photo: String
    isOnline: Boolean
    workPlaces: [String]
    chatUsername: String
    chatUserSecret: String
  }

  input UsuarioInput {
    name: String
    email: String
    role: String
    isOnline: Boolean
    photo: String
    workPlaces: [String]
    chatUsername: String
    chatUserSecret: String
  }

  type Mutation {
    registrarUsuario(input: UsuarioInput): Usuario
    actualizarUsuario(email: String, input: UsuarioInput): Usuario
  }

  type Query {
    obtenerUsuario(email: String!): Usuario
  }
`;

module.exports = typeDefs;
