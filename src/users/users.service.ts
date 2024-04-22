import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  create(createUserInput: CreateUserInput) {
    const user = this.userRepository.create(createUserInput);
    return this.userRepository.save(user);
  }

  async findAll() {
    return await this.userRepository.find();
  }

  async findOne(id: number) {
    return await this.userRepository.findOneBy({ id });
  }

  async update(id: number, updateUserInput: UpdateUserInput) {
    const user = await this.findOne(id);
    this.userRepository.merge(user, updateUserInput);
    return this.userRepository.save(user);
  }

  async remove(id: number) {
    const user = this.findOne(id);
    await this.userRepository.delete({ id });
    return user;
  }
}
