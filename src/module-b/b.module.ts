import { Module } from '@nestjs/common';
import { ModuleA } from 'src/module-a/a.module';
import { ServiceC } from 'src/module-a/c.service';
import { ServiceB } from './b.service';
import { ServiceD } from './d.service';

@Module({
  providers: [ServiceB, ServiceD],
  imports: [ModuleA.forFeature({ provide: ServiceC, useClass: ServiceD })],
})
export class ModuleB {}
