import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    title: 'This is email of user',
    example: 'user@mail.com',
  })
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsEmail()
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    title: 'This is password of user',
    example: '987654',
  })
  
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsNotEmpty()
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @MinLength(6)
  password: string;

}
