import { ConfigType } from '@nestjs/config';
import { config } from 'src/config/config';
import { DatabaseProviderEnum } from 'src/shared/enums/repository.enum';
import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: DatabaseProviderEnum.POSTGRES,
    inject: [config.KEY],    
    useFactory: async (configService:ConfigType<typeof config>) => {
      const {host, port, username, password,database } = configService.database
      
      const dataSource = new DataSource({ 
        type: 'postgres',
        host,
        port,
        username,
        password,
        database,
        entities: [
            __dirname + '/../**/*.entity{.ts,.js}',
        ],
        synchronize: true,
        // dropSchema:true  
      });

      return dataSource.initialize();
    },
  },
];