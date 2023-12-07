import { Injectable, Type } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './schemas/user.schema';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import {
  AreaDto,
  DeleteArea,
  ServiceDataDto,
  ServiceTokenDto,
  SpotifyDto,
} from './dto/user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) public readonly model: Model<UserDocument>,
  ) {}

  async findAll(): Promise<User[]> {
    return await this.model.find().exec();
  }

  async findOne(id: string): Promise<User> {
    return await this.model.findById(id);
  }

  async findbyAttribute(
    userAttribute: string,
    value: string,
  ): Promise<User | null> {
    const user: any = await this.model.find({ [userAttribute]: value });
    return user;
  }

  async create(createUserDto: CreateUserDto): Promise<User> {
    createUserDto.isLogged = true;
    const user = await new this.model({
      ...createUserDto,
    }).save();
    this.model
      .updateOne(
        { _id: user._id },
        {
          $push: {
            services: {
              $each: [
                {
                  service: 'Spotify',
                  accessToken: 'empty',
                  refreshToken: 'empty',
                  expireIn: 'empty',
                  code: 'empty',
                },
                {
                  service: 'Discord',
                  accessToken: 'empty',
                  refreshToken: 'empty',
                  expireIn: 'empty',
                },
                {
                  service: 'Drive',
                  accessToken: 'empty',
                  refreshToken: 'empty',
                  expireIn: 'empty',
                },
                {
                  service: 'Google',
                  accessToken: 'empty',
                  refreshToken: 'empty',
                  expireIn: 'empty',
                },
                {
                  service: 'Gmail',
                  accessToken: 'empty',
                  refreshToken: 'empty',
                  expireIn: 'empty',
                },
                {
                  service: 'Youtube',
                  accessToken: 'empty',
                  refreshToken: 'empty',
                  expireIn: 'empty',
                },
                {
                  service: 'Calendar',
                  accessToken: 'empty',
                  refreshToken: 'empty',
                  expireIn: 'empty',
                },
              ],
            },
          },
        },
      )
      .then(() => {
        console.log('user update');
      })
      .catch((e) => {
        console.log(e);
      });
    return user;
  }

  async update(id: string, updateTodoDto: UpdateUserDto): Promise<User> {
    return await this.model.findByIdAndUpdate(id, updateTodoDto).exec();
  }

  async updateService(serviceToken: ServiceTokenDto): Promise<User | boolean> {
    try {
      this.model
        .updateOne(
          {
            _id: serviceToken.userId,
            'services.service': serviceToken.service,
          },
          {
            $set: {
              'services.$.accessToken': serviceToken.accessToken,
              'services.$.refreshToken': serviceToken.refreshToken,
              'services.$.expireIn': serviceToken.expireIn,
            },
          },
        )
        .then(() => {
          console.log('Service updated successfully');
        })
        .catch((err) => {
          console.error('Error updating service:', err);
        });
    } catch (error) {
      console.log(error);
      return false;
    }
    return true;
  }

  async updateServiceData(
    serviceDataDto: ServiceDataDto,
  ): Promise<User | boolean> {
    let returnValue = true;
    this.model
      .updateOne(
        {
          _id: serviceDataDto.userId,
          'services.service': serviceDataDto.service,
        },
        {
          $set: {
            'services.$.data': serviceDataDto.data,
          },
        },
      )
      .then(() => {
        console.log('service data update');
      })
      .catch((err) => {
        console.log(err);
        returnValue = false;
      });
    return returnValue;
  }

  async addService(serviceToken: ServiceTokenDto): Promise<User | boolean> {
    let returnValue = true;
    this.model
      .updateOne(
        { _id: serviceToken.userId },
        {
          $push: {
            services: {
              service: serviceToken.service,
              accessToken: serviceToken.accessToken,
              refreshToken: serviceToken.refreshToken,
              expireIn: serviceToken.expireIn,
            },
          },
        },
      )
      .then(() => {
        console.log('service data update');
      })
      .catch((err) => {
        console.log(err);
        returnValue = false;
      });
    return returnValue;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async createArea(areaData: AreaDto): Promise<boolean> {
    const areaDto: any = areaData;
    let returnValue = true;
    if (areaDto.action.name === '1') {
      areaDto.action.name = 'neige';
    } else if (areaDto.action.name === '2') {
      areaDto.action.name = 'pluie';
    } else if (areaDto.action.name === '3') {
      areaDto.action.name = 'iss';
    }
    this.model
      .updateOne(
        { _id: areaDto.userId },
        {
          $push: {
            areas: {
              action: areaDto.action,
              reaction: areaDto.reaction,
            },
          },
        },
      )
      .then(() => {
        console.log('area created');
      })
      .catch((err) => {
        console.log(err);
        returnValue = false;
      });
    return returnValue;
  }

  async delete(id: string): Promise<any> {
    return await this.model.findByIdAndDelete(id).exec();
  }

  checkValidEmail(email: string): boolean {
    const expression = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return expression.test(email);
  }

  checkIfUserExists(email: string): boolean {
    const user = this.model.find({
      email: { $exist: true },
    });
    console.log(user);
    return true;
  }

  async searchUser(email: string): Promise<boolean | null> {
    const user = await this.model.findOne({ email }).exec();
    if (user == null) return true;
    return false;
  }

  async getUserPassword(email: string): Promise<string> {
    const password = 'maniok';

    const query = this.model.find({ email: email }).then((res) => {
      console.log('id =', res[0].password, typeof res[0].password);
    });
    return password;
  }

  async logout(id: string): Promise<boolean> {
    let retValue = true;
    this.model
      .updateOne({ _id: id }, { $set: { isLogged: false } })
      .then(() => {
        console.log('user successfuly disconnected');
      })
      .catch((e) => {
        retValue = false;
        console.log(e);
      });
    return retValue;
  }

  async updateSpotifyInfo(spotifyDto: SpotifyDto): Promise<boolean> {
    const retValue = true;
    try {
      this.model
        .updateOne(
          { _id: spotifyDto.userId, 'services.service': spotifyDto.service },
          {
            $set: {
              'services.$.accessToken': spotifyDto.accessToken,
              'services.$.refreshToken': spotifyDto.refreshToken,
              'services.$.expireIn': spotifyDto.expireIn,
              'services.$.code': spotifyDto.code,
            },
          },
        )
        .then(() => {
          console.log('Service updated successfully');
        })
        .catch((err) => {
          console.error('Error updating service:', err);
        });
    } catch (error) {
      console.log(error);
      return false;
    }
    return true;
  }

  async deleteArea(deleteArea: DeleteArea): Promise<boolean> {
    let retValue = true;
    const queryString: string = 'areas.' + deleteArea.areaId.toString();

    try {
      this.model
        .updateOne(
          { _id: deleteArea.userId },
          {
            $set: {
              [queryString]: {},
            },
          },
        )
        .then(() => {
          console.log('Area removed successfully');
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      retValue = false;
      console.log(error);
    }
    return retValue;
  }

  async getArea(userId: string) {
    return this.model.findOne({ _id: userId });
  }

  async getAllMail() {
    const emailList: string[] = [];
    (await this.model.find()).forEach((document) => {
      emailList.push(document.email);
    });
    return emailList;
  }

  async getUserEmailByArea(areaType: string) {
    const emailList: string[] = [];
    (await this.model.find()).forEach((document) => {
      document.areas.forEach((area: any) => {
        if (area.action.name === areaType) {
          emailList.push(document.email);
        }
      });
    });
    return emailList;
  }
}
