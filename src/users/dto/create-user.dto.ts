import { IsString, Length, IsEmail } from "class-validator";

export class CreateUserDto {
  @IsString({ message: "email должен быть строкой" })
  @IsEmail({}, { message: "Это не email" })
  readonly email: string;
  @IsString({ message: "пароль должен быть строкой" })
  @Length(4, 16, {
    message: "паароль должен быть не меньше 4 символов и не больше 16",
  })
  readonly password: string;
}
