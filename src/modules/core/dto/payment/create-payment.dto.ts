import { IsDate, IsInt, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { UserEntity } from "src/modules/auth/entities/user.entity";
import { PaymentEntity } from "../../entities/payment.entity";
import { TicketTypeEntity } from "../../entities/ticket-type.entity";
import { TransactionEntity } from "../../entities/transaction.entity";

export class CreatePaymentDto {
    
    @IsDate()
    @IsNotEmpty()
    amount: Date;
    
    @IsString()
    @IsNotEmpty()
    state:string;

    @IsDate()
    @IsNotEmpty()
    purchase_date:Date;
    
    @IsInt()
    @IsNotEmpty()
    cuantity:string;

    @IsString()
    user: UserEntity[];

    @IsString()
    paymentMethod: PaymentEntity[];

    @IsString()
    ticketType: TicketTypeEntity[];

    @IsString()
    transaction: TransactionEntity[];


}