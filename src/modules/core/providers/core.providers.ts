import { CoreRepositoryEnum } from "src/shared/enums/repository.enum";
import { DataSource } from "typeorm";
import { FeedbackEntity } from "../entities/feedback.entity";


export const coreProviders = [
    {
        provide: CoreRepositoryEnum.FEEDBACK_REPOSITORY,
        useFactory: (dataSource: DataSource) => dataSource.getRepository(FeedbackEntity),
        inject: ['PG_DATA_SOURCE'],
      },
]