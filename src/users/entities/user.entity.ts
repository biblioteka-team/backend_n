import { HydratedDocument } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';

export type UserDocument = HydratedDocument<User>;

@Schema({ timestamps: true })
export class User {
  @ApiProperty({
    title: 'This is email of user',
    example: 'user@mail.com',
  })
  @Prop({ required: true, unique: true })
  email: string;

  @ApiProperty({
    title: 'This is password of user',
    example: '987654',
  })
  @Prop({ required: true })
  password?: string;

  @Prop({ default: 'user', enum: ['user', 'admin'] })
  role: string;

  @Prop()
  googleId?: string;
}
export const UserSchema = SchemaFactory.createForClass(User);
