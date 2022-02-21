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
    vocation: String
    universityInterestedIn: [String]
    goals: [String]
    qualities: [String]
    profession: String
    actualWorkPlace: String
  }

  type Token {
    token: String
  }

  type Universidad {
    university: String
  }

  input UniversidadInput {
    university: String
  }

  type Usuarios {
    usuario: Usuario
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
    vocation: String
    universityInterestedIn: [String]
    goals: [String]
    qualities: [String]
    profession: String
    actualWorkPlace: String
  }

  type Mutation {
    registrarUsuario(input: UsuarioInput): Usuario
    actualizarUsuario(email: String, input: UsuarioInput): Usuario
    autenticarUsuario(input: UsuarioInput): LoginPayload
  }

  type Query {
    obtenerUsuario(email: String!): Usuario
    obtenerUsuarios: [Usuario]
  }
`;

module.exports = typeDefs;
