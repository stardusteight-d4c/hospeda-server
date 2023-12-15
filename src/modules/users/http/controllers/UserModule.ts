import { Module } from "@nestjs/common";
import { UserGuestController } from "./(guest)/UserGuestController";
import { UserUserController } from "./(user)/UserUserController";

@Module({
  controllers: [UserGuestController, UserUserController]
})
export class UserModule {}
