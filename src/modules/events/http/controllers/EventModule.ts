import { Module } from "@nestjs/common";
import { EventGuestController } from "./(guest)/EventGuestController";
import { EventPromoterController } from "./(promoter)/EventPromoterController";
import { EventAdminController } from "./(admin)/EventAdminController";

@Module({
  controllers: [
    EventGuestController,
    EventPromoterController,
    EventAdminController
  ]
})
export class EventModule {}
