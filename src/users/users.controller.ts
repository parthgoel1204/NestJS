import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Patch,
  Delete,
  Query,
} from '@nestjs/common';
import { UsersService } from './users.service';
import type { User, Role } from './users.types';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAll(@Query('role') role?: Role) {
    return this.usersService.findAll(role);
  }

  // @Get(':interns')
  // findAllInterns() {
  //   return [];
  // }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Post()
  create(@Body() user: Omit<User, 'id'>) {
    return this.usersService.create(user);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() userUpdate: Partial<User>,
  ) {
    return this.usersService.update(+id, userUpdate);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.usersService.delete(+id);
  }
}