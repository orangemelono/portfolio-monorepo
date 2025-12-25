import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CacheModule } from '@nestjs/cache-manager';
import * as redisStore from 'cache-manager-redis-store';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjectsModule } from './modules/projects/projects.module';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGODB_URI || 'mongodb://localhost:27017/portfolio'),
    CacheModule.register({
      store: redisStore,
      host: process.env.REDIS_HOST || 'localhost',
      port: parseInt(process.env.REDIS_PORT) || 6379,
      ttl: 60, // seconds
    }),
    ProjectsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
