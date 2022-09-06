import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ModuleA } from './module-a/a.module';
import { ModuleB } from './module-b/b.module';

@Module({
  imports: [ModuleA, ModuleB],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
