import { Injectable, OnModuleInit } from '@nestjs/common';
import { ModuleRef } from '@nestjs/core';
import { ServiceC } from './c.service';

@Injectable()
export class ServiceE implements OnModuleInit {
  serviceC: ServiceC;
  constructor(private readonly moduleRef: ModuleRef) {}
  onModuleInit() {
    this.serviceC = this.moduleRef.get(ServiceC);
    console.log('serviceC from ServiceE', this.serviceC);
  }
}
