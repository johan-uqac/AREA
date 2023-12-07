import {
  Body,
  Controller,
  Get,
  Param,
  Req,
  Post,
  Put,
  NotAcceptableException,
  Delete,
  Query,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { OAuth2Client } from 'google-auth-library';
import { Request } from 'express';
import {
  AreaDto,
  BaseUserDto,
  DeleteArea,
  ServiceDataDto,
  ServiceTokenDto,
  SpotifyDto,
} from './dto/user.dto';
// import { User } from 'discord.js';

const client = new OAuth2Client(
  process.env.CLIENT_ID_GOOGLE,
  process.env.CLIENT_SECRET_GOOGLE,
);

@Controller('user')
export class UserController {
  constructor(private readonly service: UserService) {}

  @Get('/test')
  test() {
    // return 'hello world';
    return this.service.getUserEmailByArea('pluie');
  }

  @Get()
  async findAll() {
    return await this.service.findAll();
  }

  @Get('areas')
  async findAllAreas(@Query() id: any) {
    // console.log('id : ', id.userId);
    return await this.service.getArea(id.userId);
  }

  @Get(':id')
  async findbyId(@Param('id') id: string) {
    return await this.service.findOne(id);
  }

  @Post('/sign-up')
  async create(@Body() CreateUserDto: CreateUserDto) {
    console.log('user request : ', CreateUserDto);
    if (!Boolean(CreateUserDto.email) || !Boolean(CreateUserDto.password)) {
      console.log('wrong email or password from user :', CreateUserDto);
      throw new NotAcceptableException('Enter email or password');
    } else if (this.service.checkValidEmail(CreateUserDto.email) == false) {
      console.log('wrong email from user : ', CreateUserDto);
      throw new NotAcceptableException('invalid email');
    } else if ((await this.service.searchUser(CreateUserDto.email)) == false) {
      console.log('user already exist : ', CreateUserDto);
      throw new NotAcceptableException('user already exist');
    } else {
      console.log('new user');
      return await this.service.create(CreateUserDto);
    }
  }

  @Post('/sign-in')
  async login(@Body() user: BaseUserDto) {
    console.log('user info :', user);
    if (!Boolean(user.email) || !Boolean(user.password)) {
      console.log('wrong email or password from user :', user);
      throw new NotAcceptableException('Enter email or password');
    } else if (this.service.checkValidEmail(user.email) == false) {
      console.log('wrong email from user : ', user);
      throw new NotAcceptableException('Please enter a valid email');
    } else if ((await this.service.searchUser(user.email)) == true)
      throw new NotAcceptableException('user not exist');
    else {
      const userInfo = await this.service.findbyAttribute('email', user.email);
      const password = userInfo[0].password;
      if (user.password == password) return userInfo;
      else throw new NotAcceptableException('Wrong password');
    }
  }

  @Post('/google-auth')
  async googleCreateAccount(@Req() req: Request): Promise<any> {
    const ticket = await client.verifyIdToken({
      idToken: req.body['res']['credential'],
      audience: process.env.CLIENT_ID_GOOGLE,
    });
    const payload = ticket.getPayload();
    console.log(payload);
    const email = payload.email;
    if ((await this.service.searchUser(email)) == false) {
      return await this.service.findbyAttribute('email', email);
    }
    return this.service.create({
      email: email,
      password: 'a',
      services: [],
      isLogged: true,
    });
  }

  @Put('/access')
  async getAccessToken(@Body() serviceToken: ServiceTokenDto) {
    console.log('access token to set for user : ', serviceToken);
    return this.service.updateService(serviceToken);
  }

  @Put('/access/spotify')
  async getSpotifyToken(@Body() spotifyDto: SpotifyDto) {
    console.log('spotify info for user : ', spotifyDto);
    return this.service.updateSpotifyInfo(spotifyDto);
  }

  @Put('/add-service')
  async addService(@Body() serviceToken: ServiceTokenDto) {
    console.log(serviceToken);
    return this.service.addService(serviceToken);
  }

  @Put('/data')
  async updateServiceData(@Body() serviceDataDto: ServiceDataDto) {
    console.log(serviceDataDto);
    return this.service.updateServiceData(serviceDataDto);
  }

  @Put('/create-area')
  async createArea(@Body() areaDto: AreaDto) {
    console.log('area :', areaDto);
    return this.service.createArea(areaDto);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return await this.service.update(id, updateUserDto);
  }

  @Put('/logout/:id')
  async logout(@Param('id') id: string) {
    this.service.logout(id);
  }

  @Delete('/deleteArea')
  async removeArea(@Body() deleteArea: DeleteArea) {
    console.log(deleteArea);
    return this.service.deleteArea(deleteArea);
  }
}
