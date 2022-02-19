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
    isAuth: Boolean
  }

  type Token {
    token: String
  }

  type LoginPayload {
    user: Usuario
    token: String!
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
    isAuth: Boolean
  }

  type Mutation {
    registrarUsuario(input: UsuarioInput): Usuario
    actualizarUsuario(email: String, input: UsuarioInput): Usuario
    autenticarUsuario(input: UsuarioInput): LoginPayload
  }

  type Query {
    obtenerUsuario(email: String!): Usuario
  }
`;

module.exports = typeDefs;
