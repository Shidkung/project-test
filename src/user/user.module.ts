import { Module } from '@nestjs/common';
import { UsersController } from './controller/user.controller';
import { UsersService } from './service/user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersS } from 'index';
@Module({
  imports:[TypeOrmModule.forFeature([UsersS])],
  controllers: [UsersController],
  providers: [UsersService],
  exports:[UsersService]
})
export class UsersModule {}
