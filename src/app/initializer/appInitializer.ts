import { ConfigurationService } from '../services/configuration.service';

export const appInitializerFactory =
  (configService: ConfigurationService) => () =>
    configService.loadConfiguration();
