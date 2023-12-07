import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
// import

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop()
  services: [
    type: {
      service: string;
      accessToken: string;
      refreshToken: string;
      expireIn: string;
      data: {};
    },
  ];

  @Prop()
  isLogged: boolean;

  @Prop()
  areas: [];
}
export const UserSchema = SchemaFactory.createForClass(User);
