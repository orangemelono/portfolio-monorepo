import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Project, ProjectDocument } from '../schemas/project.schema';

@Injectable()
export class ProjectsService {
  constructor(
    @InjectModel(Project.name) private projectModel: Model<ProjectDocument>,
  ) {}

  async findAll(page: number, limit: number, category?: string): Promise<{ data: Project[]; total: number; page: number; limit: number }> {
    const skip = (page - 1) * limit;
    
    const filter: any = {};
    if (category) {
      filter.category = category;
    }
    
    const data = await this.projectModel
      .find(filter)
      .skip(skip)
      .limit(limit)
      .sort({ createdAt: -1 })
      .exec();
    
    const total = await this.projectModel.countDocuments(filter);
    
    return { data, total, page, limit };
  }

  async findOne(id: string): Promise<Project> {
    const project = await this.projectModel.findById(id).exec();
    if (!project) {
      throw new NotFoundException(`Project with ID ${id} not found`);
    }
    return project;
  }

  async create(createProjectDto: Partial<Project>): Promise<Project> {
    const createdProject = new this.projectModel(createProjectDto);
    return await createdProject.save();
  }

  async update(id: string, updateProjectDto: Partial<Project>): Promise<Project> {
    const updatedProject = await this.projectModel
      .findByIdAndUpdate(id, updateProjectDto, { new: true })
      .exec();
    if (!updatedProject) {
      throw new NotFoundException(`Project with ID ${id} not found`);
    }
    return updatedProject;
  }

  async remove(id: string): Promise<Project> {
    const deletedProject = await this.projectModel.findByIdAndDelete(id).exec();
    if (!deletedProject) {
      throw new NotFoundException(`Project with ID ${id} not found`);
    }
    return deletedProject;
  }
}