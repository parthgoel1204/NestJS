import { Injectable } from '@nestjs/common';
import { User, Role } from './users.types';

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      id: 1,
      name: 'Parth Goel',
      email: 'parth.goel@example.com',
      age: 22,
      role: 'Full Stack Developer',
    },
    {
      id: 2,
      name: 'Aarav Sharma',
      email: 'aarav.sharma@example.com',
      age: 24,
      role: 'Backend Developer',
    },
    {
      id: 3,
      name: 'Riya Kapoor',
      email: 'riya.kapoor@example.com',
      age: 21,
      role: 'Frontend Developer',
    },
    {
      id: 4,
      name: 'Karan Mehta',
      email: 'karan.mehta@example.com',
      age: 26,
      role: 'Backend Developer',
    },
    {
      id: 5,
      name: 'Sneha Verma',
      email: 'sneha.verma@example.com',
      age: 23,
      role: 'Frontend Developer',
    },
  ];

  findAll(role?: Role): User[] {
    if (role) {
      return this.users.filter((user) => user.role === role);
    }

    return this.users;
  }

  findOne(id: number): User | undefined {
    const user = this.users.find((user) => user.id === id);

    return user;
  }

  create(user: Omit<User, 'id'>): User {
    const usersByHighestId = [...this.users].sort((a, b) => b.id - a.id);

    const newUser: User = {
      id: usersByHighestId[0].id + 1,
      ...user,
    };

    this.users.push(newUser);

    return newUser;
  }

  update(id: number, updatedUser: Partial<User>): User | undefined {
    this.users = this.users.map((user) => {
      if (user.id === id) {
        return { ...user, ...updatedUser };
      }

      return user;
    });

    return this.findOne(id);
  }

  delete(id: number): User | undefined {
    const removedUser = this.findOne(id);

    this.users = this.users.filter((user) => user.id !== id);

    return removedUser;
  }
}