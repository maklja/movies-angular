import { ConfigurationService } from '../shared/data-access/configuration.service';

export const appInitializerFactory =
  (configService: ConfigurationService) => () =>
    configService.loadConfiguration();
