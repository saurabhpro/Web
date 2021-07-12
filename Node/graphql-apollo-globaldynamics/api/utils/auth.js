import pkg from 'jsonwebtoken';
const { sign, verify } = pkg;

import pkg2 from 'bcryptjs';
const { compareSync, hashSync } = pkg2;

const createToken = (userInfo) =>
  sign(
    { sub: userInfo.id, email: userInfo.email, role: userInfo.role },
    process.env.SECRET
  );

const verifyPassword = (attemptedPw, hashedPw) =>
  compareSync(attemptedPw, hashedPw);

const hashPassword = (password) => hashSync(password);

const verifyToken = (token) => verify(token, process.env.SECRET);

export { createToken, verifyPassword, hashPassword, verifyToken };
