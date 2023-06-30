import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

class BaseController {
  public async index(request: Request, response: Response) {
    const tasks = await prisma.tasks.findMany();
    response.status(201).json(tasks);
  }

  public create (request: Request, response: Response) {

  }

  public store (request: Request, response: Response) {

  }

  public show (request: Request, response: Response) {

  }

  public edit (request: Request, response: Response) {

  }

  public update (request: Request, response: Response) {

  }

  public destroy (request: Request, response: Response) {

  }
}

export default new BaseController();
