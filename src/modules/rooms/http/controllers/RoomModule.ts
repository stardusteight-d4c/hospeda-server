import { Module } from "@nestjs/common";
import { RoomGuestController } from "./(guest)/RoomGuestController";
import { RoomAdminController } from "./(admin)/RoomAdminController";

@Module({
  controllers: [RoomGuestController, RoomAdminController]
})
export class RoomModule {}
