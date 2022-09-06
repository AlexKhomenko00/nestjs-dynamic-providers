import { Injectable } from '@nestjs/common';
import { AbstractService } from 'src/abstract.service';

@Injectable()
export class ServiceC extends AbstractService {
  logSelf() {
    console.log('I am ServiceC');
  }
}
