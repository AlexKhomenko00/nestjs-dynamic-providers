import { Injectable } from '@nestjs/common';
import { ICommonProvider } from 'src/common-provider.interface';
import { ServiceA } from 'src/module-a/a.service';

@Injectable()
export class ServiceB implements ICommonProvider {
  constructor(private readonly serviceA: ServiceA) {
    this.logSelf();
  }

  logSelf(): void {
    console.log('I am ServiceB');
    console.log('Below log of my ServiceA:');
    this.serviceA.logSelf();
  }
}
