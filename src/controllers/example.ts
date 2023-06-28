import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const getHandler = async (req: Request, res: Response) => {
  const locations = await prisma.locations.findMany()
  res.status(201).json(locations);
};

export const postHandler = (req: Request, res: Response) => {
  res.send('Respuesta del controlador para POST');
};
