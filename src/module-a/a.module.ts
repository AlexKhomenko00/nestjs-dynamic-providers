import { DynamicModule, Module, Provider } from '@nestjs/common';
import { ServiceA } from './a.service';
import { ServiceC } from './c.service';

@Module({
  providers: [
    ServiceA,
    // { provide: AbstractService, useClass: ServiceC } -  if used with abstract class
    ServiceC,
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
