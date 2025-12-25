import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Project, ProjectSchema } from '../../schemas/project.schema';
import { ProjectsController } from '../../controllers/projects.controller';
import { ProjectsService } from '../../services/projects.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Project.name, schema: ProjectSchema }]),
  ],
  controllers: [ProjectsController],
  providers: [ProjectsService],
  exports: [ProjectsService],
})
export class ProjectsModule {}