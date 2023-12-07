export class BaseUserDto {
  email: string;
  password: string;
  isLogged: boolean;
}

export class ServiceTokenDto {
  readonly userId: string;
  readonly service: string;
  readonly accessToken: string;
  readonly refreshToken: string;
  readonly expireIn: string;
}

export class ServiceDataDto {
  readonly userId: string;
  readonly service: string;
  readonly data: object;
}

export class AreaDto {
  readonly userId: string;
  readonly areaId: string;
  readonly action: Array<object>;
  readonly reaction: Array<object>;
}

export class FindDto {
  readonly userId: string;
  readonly field: string;
  readonly value: string;
}

export class SpotifyDto extends ServiceTokenDto {
  readonly code: string;
}

export class DeleteArea {
  readonly userId: string;
  // readonly actionService: string
  // readonly reactionService: string
  readonly areaId: string;
}
