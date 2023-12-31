import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersS } from '../typeors';
import { Repository } from 'typeorm';
import { CreateUsersDto } from '../dto/user.dto';


@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UsersS) private readonly userRepository: Repository<UsersS>,
  ) {}
      
 
  async findUserByUsername(username : string){
    return await this.userRepository.findOne({where:{username:username}})
  }
 async register(createUserDto: CreateUsersDto) {
   
    const newUser = this.userRepository.create(createUserDto);
    return this.userRepository.save(newUser)
     
  }
  findUsersById(id: number) {
    return this.userRepository.findOne({where:{user_id:id}});
  }

  getUsers(){
    return this.userRepository.find()
  }
}