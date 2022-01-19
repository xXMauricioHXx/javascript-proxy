import { UserService } from './user';

setImmediate(async () => {
  const userService = new UserService();
  console.log(await userService.list());
  console.log(await userService.listById('2'));
});
