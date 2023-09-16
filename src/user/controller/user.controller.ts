import {
    Body,
    Controller,
    Get,
    Param,
    ParseIntPipe,
    Post,
    UsePipes,
    ValidationPipe,
    } from '@nestjs/common';
    import { CreateUsersDto } from '../dto/user.dto';
    import { UsersService } from '../service/user.service';
    @Controller('users')
    export class UsersController {
      constructor(private readonly userService: UsersService) {}
      
      @Get()
      getUsers() {
        return this.userService.getUsers();
      }
      
      @Get('id/:id')
      findUsersById(@Param('id', ParseIntPipe) id: number) {
        return this.userService.findUsersById(id);
      }
      

      @Post('create')
      @UsePipes(ValidationPipe)
        async createUsers(@Body() createUserDto: CreateUsersDto) {
        return this.userService.register(createUserDto);
      }
    }