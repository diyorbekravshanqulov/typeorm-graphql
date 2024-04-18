import { Field, Int } from '@nestjs/graphql';
import { User } from '../../users/entities/user.entity';

export class CreatePostDto {
  @Field()
  title: string;

  @Field()
  content: string;

  @Field((type) => Int, { nullable: true })
  author: User;
}
