import { Interceptor } from '../interceptor';
import { User } from '.';

const users: User[] = [
  { id: '1', name: 'Mauricio Henrique' },
  { id: '2', name: 'Joyce Trindade' },
];

export class UserService extends Interceptor {
  async list(): Promise<User[]> {
    return Promise.resolve(users);
  }

  async listById(id: string): Promise<User | undefined> {
    const user = users.find(user => user.id === id);

    return Promise.resolve(user);
  }
}
