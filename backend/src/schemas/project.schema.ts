import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProjectDocument = Project & Document;

@Schema({ timestamps: true })
export class Project {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  imageUrl: string;

  @Prop({ required: true })
  projectUrl: string;

  @Prop({ type: [String], required: true })
  technologies: string[];

  @Prop()
  category?: string;

  @Prop()
  githubUrl?: string;
}

export const ProjectSchema = SchemaFactory.createForClass(Project);