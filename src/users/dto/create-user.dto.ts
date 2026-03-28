import {
  IsEmail,
  IsString,
  IsNotEmpty,
  IsEnum,
  IsNumber,
} from 'class-validator';

export enum Role {
  Frontend = 'Frontend Developer',
  Backend = 'Backend Developer',
  FullStack = 'Full Stack Developer',
}

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @IsEnum(Role)
  role: Role;

  @IsNumber()
  age: number;
}