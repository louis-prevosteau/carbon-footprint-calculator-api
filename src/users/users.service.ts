import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async create(createUserInput: CreateUserInput) {
    const password = createUserInput.password;
    createUserInput.password = await bcrypt.hash(password, 10);
    const user = this.userRepository.create(createUserInput);
    return this.userRepository.save(user);
  }

  async findAll() {
    return await this.userRepository.find();
  }

  async findOne(filter: any) {
    return await this.userRepository.findOneBy(filter);
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
