const { ApolloServer } = require("apollo-server");
const typeDefs = require("./db/schemas");
const resolvers = require("./db/resolvers");
const conectarDB = require("./config/db");

// Servidor
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Conectar a la DB
conectarDB();

// Iniciar el server
server.listen().then(({ url }) => {
  console.log("Servidor listo en la url: " + url);
});
