import { DatabaseProviderEnum } from 'src/shared/enums/repository.enum';
import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: DatabaseProviderEnum.POSTGRES,
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: '1234',
        database: 'event_manager',
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