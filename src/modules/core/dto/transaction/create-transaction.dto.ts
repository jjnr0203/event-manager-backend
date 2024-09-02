import { IsBoolean, IsDate, IsNotEmpty, isNotEmpty, IsString } from "class-validator";


export class CreateTransactionDto {
    
    @IsBoolean()
    @IsNotEmpty()
    state: boolean;
    
    @IsString()
    @IsNotEmpty()
    transactionCode: string;
    
    @IsString()
    @IsNotEmpty()
    errorMessage: string;
    
    @IsDate()
    @IsNotEmpty()
    transactionDate: Date;
    
    @IsNotEmpty()
    payments: string[];
}