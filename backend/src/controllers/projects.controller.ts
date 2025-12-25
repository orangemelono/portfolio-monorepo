import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  UseInterceptors,
  CacheInterceptor,
} from '@nestjs/common';
import { ProjectsService } from '../services/projects.service';
import { Project } from '../schemas/project.schema';

@Controller('projects')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Post()
  create(@Body() createProjectDto: Partial<Project>) {
    return this.projectsService.create(createProjectDto);
  }

  @Get()
  @UseInterceptors(CacheInterceptor)
  findAll(
    @Query('page') page = 1,
    @Query('limit') limit = 10,
    @Query('category') category?: string,
  ) {
    return this.projectsService.findAll(+page, +limit, category);
  }

  @Get(':id')
  @UseInterceptors(CacheInterceptor)
  findOne(@Param('id') id: string) {
    return this.projectsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProjectDto: Partial<Project>) {
    return this.projectsService.update(id, updateProjectDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.projectsService.remove(id);
  }
}