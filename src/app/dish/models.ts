const { getReaponse } = require('../../helpers/responses.js');
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

exports.getDishsMod = async (req: any, res: any) => {
  let message;
  const query = await prisma.dish.findMany();
  if (query.length >= 0) {
    message = getReaponse('OK', query);
  } else {
    message = getReaponse('DB-ERROR');
  }
  return res.status(message.statusCode).json(message);
}