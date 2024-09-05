import { IsDate, IsInt, isNotEmpty, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { UserEntity } from "src/modules/auth/entities/user.entity";
import { PaymentEntity } from "../../entities/payment.entity";
import { TicketTypeEntity } from "../../entities/ticket-type.entity";
import { TransactionEntity } from "../../entities/transaction.entity";
import { CatalogueEntity } from "../../entities/catalogue.entity";
import { CreateTransactionDto } from "../transaction/create-transaction.dto";

export class CreatePaymentDto {
    
    @IsNumber()
    @IsNotEmpty()
    amount: number;
    
    @IsNotEmpty()
    state:CatalogueEntity;

    @IsDate()
    @IsNotEmpty()
    purchase_date:Date;
    
    @IsNumber()
    @IsNotEmpty()
    cuantity:number;

    @IsNotEmpty()
    user: UserEntity[];

    @IsNotEmpty()
    paymentMethod: CatalogueEntity[];

    @IsNotEmpty()
    ticketType: TicketTypeEntity[];

    @IsNotEmpty()
    transaction: CreateTransactionDto[];


}