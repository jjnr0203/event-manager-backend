import { envs } from 'src/config/envs';
import { DatabaseProviderEnum } from 'src/shared/enums/repository.enum';
import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: DatabaseProviderEnum.POSTGRES,
    useFactory: async () => {
      const {host,database,password,port,username} = envs.database
      
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