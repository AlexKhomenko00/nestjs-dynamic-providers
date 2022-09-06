import { Injectable } from '@nestjs/common';
import { AbstractService } from 'src/abstract.service';

@Injectable()
export class ServiceD extends AbstractService {
  logSelf(): void {
    console.log('I am ServiceD');
  }
}
