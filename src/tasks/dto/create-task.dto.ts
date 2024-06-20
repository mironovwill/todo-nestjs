import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateTaskDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @MaxLength(30)
  @MinLength(5)
  title: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @MaxLength(300)
  @MinLength(5)
  description?: string;

  @ApiProperty({ required: false, default: false })
  @IsNotEmpty()
  @IsBoolean()
  done: boolean = false;
}
