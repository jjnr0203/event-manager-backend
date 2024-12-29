export enum DatabaseProviderEnum{ 
    POSTGRES = 'PG_DATA_SOURCE'
}
export enum CoreRepositoryEnum{ 
    ADDRESS_REPOSITORY = 'ADDRESS_REPOSITORY',
    CATALOGUE_REPOSITORY = 'CATALOGUE_REPOSITORY',
    ORDER_REPOSITORY = 'ORDER_REPOSITORY',
    COLLABORATOR_REPOSITORY = 'COLLABORATOR_REPOSITORY',
    EVENT_REPOSITORY = 'EVENT_REPOSITORY',
    FEEDBACK_REPOSITORY = 'FEEDBACK_REPOSITORY',
    FILE_REPOSITORY = 'FILE_REPOSITORY',
    NOTIFICATION_REPOSITORY = 'NOTIFICATION_REPOSITORY',
    PAYMENT_REPOSITORY = 'PAYMENT_REPOSITORY',
    REGISTRATION_REPOSITORY = 'REGISTRATION_REPOSITORY',
    SPONSOR_REPOSITORY = 'SPONSOR_REPOSITORY',
    TICKET_TYPE_REPOSITORY = 'TICKET_TYPE_REPOSITORY',
    TICKET_REPOSITORY = 'TICKET_REPOSITORY',
    TRANSACTION_REPOSITORY = 'TRANSACTION_REPOSITORY',
    USER_NOTIFICATION_REPOSITORY = 'USER_NOTIFICATION_REPOSITORY',
    VENUE_REPOSITORY = 'VENUE_REPOSITORY',
}

export enum AuthRepositoryEnum{
    USER_REPOSITORY = 'USER_REPOSITORY',
    INFORMATION_USER_REPOSITORY = 'INFORMATION_USER_REPOSITORY',
    ROLE_REPOSITORY = 'ROLE_REPOSITORY',
}