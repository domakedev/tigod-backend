require("dotenv").config({ path: "variables.env" });
const jwt = require("jsonwebtoken");

function validateToken(token) {
  try {
    const payload = jwt.verify(token, process.env.SECRET_JWT);
    return payload;
  } catch (error) {
    throw new Error("No tienes autorización 8");

  }
}

module.exports = validateToken;
