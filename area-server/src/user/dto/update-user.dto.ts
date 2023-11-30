import { BaseUserDto, ServiceTokenDto } from "./user.dto";

export class UpdateUserDto extends BaseUserDto {
    password: string;
}
