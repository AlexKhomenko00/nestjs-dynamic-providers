import { DynamicModule, Module, Provider } from '@nestjs/common';
import { ServiceA } from './a.service';
import { ServiceC } from './c.service';
import { ServiceE } from './e.service';

@Module({
  providers: [
    ServiceA,
    // { provide: AbstractService, useClass: ServiceC } -  if used with abstract class
    ServiceC,
    ServiceE,
  ],
  exports: [ServiceA],
})
export class ModuleA {
  //                                Provider<AbstractService> if used with abstract class
  static forFeature(customProvider: Provider<ServiceC>): DynamicModule {
    return {
      module: ModuleA,
      providers: [customProvider],
    };
  }
}
