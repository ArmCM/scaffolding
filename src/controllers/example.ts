import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client'
import LocationModel from '../models/location';

const prisma = new PrismaClient()

export const getHandler = async (req: Request, res: Response) => {
  try {
    const locations = await LocationModel.all();
    res.status(201).json(locations);
  } catch (e) {
    console.log(e);
  }
};

export const postHandler = (req: Request, res: Response) => {
  res.send('Respuesta del controlador para POST');
};
