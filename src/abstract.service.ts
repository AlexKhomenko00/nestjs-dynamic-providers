import { ICommonProvider } from './common-provider.interface';

export abstract class AbstractService implements ICommonProvider {
  abstract logSelf(): void;
}
