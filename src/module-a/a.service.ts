import { Injectable } from '@nestjs/common';
import { ICommonProvider } from 'src/common-provider.interface';
import { ServiceC } from './c.service';

@Injectable()
export class ServiceA implements ICommonProvider {
  constructor(private readonly serviceC: ServiceC) {
    this.logSelf();
  }

  logSelf() {
    console.log('I am ServiceA');
    console.log('Below my ServiceC:');
    this.serviceC.logSelf();
  }
}
