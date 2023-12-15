import { Module } from "@nestjs/common";
import { HotelGuestController } from "./(guest)/HotelGuestController";
import { HotelAdminController } from "./(admin)/HotelAdminController";

@Module({
  controllers: [HotelGuestController, HotelAdminController]
})
export class HotelModule {}
