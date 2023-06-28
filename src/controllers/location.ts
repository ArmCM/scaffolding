import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const index = async (req: Request, res: Response) => {
  const locations = await prisma.locations.findMany();
  res.status(201).json(locations);
};

export const create = (req: Request, res: Response) => {
  res.send('Respuesta del controlador para POST');
};

export const store = (req: Request, res: Response) => {
  res.send('Respuesta del controlador para POST');
};

export const show = (req: Request, res: Response) => {
  res.send('Respuesta del controlador para POST');
};

export const edit = (req: Request, res: Response) => {
  res.send('Respuesta del controlador para POST');
};

export const update = (req: Request, res: Response) => {
  res.send('Respuesta del controlador para POST');
};

export const destroy = (req: Request, res: Response) => {
  res.send('Respuesta del controlador para POST');
};
