import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CloudinaryModule } from './cloudinary/cloudinary.module';
import { UsersModule } from './users/users.module';
import { MongooseModule } from './db/mongoose.module';

@Module({
  imports: [CloudinaryModule, UsersModule, MongooseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
