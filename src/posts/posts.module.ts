import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Posts } from './entities/post.entity';
import { User } from '../users/entities/user.entity';
import { UsersResolver } from '../users/users.resolver';
import { UsersService } from '../users/users.service';

@Module({
  imports: [TypeOrmModule.forFeature([Posts, User])],
  controllers: [PostsController],
  providers: [PostsService, UsersService, UsersResolver],
})
export class PostsModule {}
