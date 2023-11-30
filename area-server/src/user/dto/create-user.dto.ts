import { BaseUserDto } from './user.dto';

export class CreateUserDto extends BaseUserDto {
  email: string;
  password: string;
  services: Array<object>;
  isLogged: boolean;
}
