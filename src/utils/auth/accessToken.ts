import jwt from "jsonwebtoken";
require('dotenv').config()

const SECRET_TOKEN = process.env.ACCESS_TOKEN;

export function createAccessToken(payload) {
  return new Promise((resolve, reject) => {
    jwt.sign(
      payload,
      SECRET_TOKEN,
      {
        expiresIn: "1d",
      },
      (err, token) => {
        if (err) {
          reject(err);
        }
        resolve(token);
      }
    );
  });
}
