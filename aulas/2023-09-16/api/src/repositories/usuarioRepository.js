const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const buscar = async () => {
  return prisma.usuario.findMany();
};

const buscarPeloLogin = async (login) => {
  return prisma.usuario.findUnique({
    where: { login: login },
  });
};

const criar = async () => {
  const user = { login: "romario.teste", senha: "flamengo3x0" };

  return prisma.usuario.create({
    data: user,
  });
};

const usuarioRepository = { buscar, criar, buscarPeloLogin };

module.exports = usuarioRepository;
