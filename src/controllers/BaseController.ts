import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client'
import BaseService from "../services/baseService";
import State from "../services/state";
import User from "../services/user";
import Visibility from "../services/visibility";

const prisma = new PrismaClient();

class BaseController {
  public async index(request: Request, response: Response) {
    const page = parseInt(String(request.query.page)) || 1;

    const  tasks = await BaseService.paginate(page).all();

    return response.status(tasks.code).json({ tasks });
  }

  public async create (request: Request, response: Response) {

  }

  public async store (request: Request, response: Response) {
    const status: any = await State.findById(request.body.status);
    const createdBy: any = await User.findOne();
    const visibility: any = await Visibility.findByName(request.body.visibility);

    await BaseService.create({
      title: request.body.title,
      description: request.body.description,
      status: status.id,
      delivery_date: new Date(request.body.delivery_date),
      publishable: request.body.publishable,
      comments: request.body.comments,
      created_by: String(createdBy.id),
      tags: request.body.tags,
      file: request.body.file,
      visibility: visibility.id,
    });

    response.status(201).json();
  }

  public async show (request: Request, response: Response) {
    const taskId = parseInt(request.params.id);

    const task = await BaseService.findOne(taskId);

    response.status(task.code).json({ task: task });
  }

  public async edit (request: Request, response: Response) {

  }

  public async update (request: Request, response: Response)   {

  }

  public async destroy (request: Request, response: Response) {

  }
}

export default new BaseController();
