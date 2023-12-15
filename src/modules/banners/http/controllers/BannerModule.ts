import { Module } from "@nestjs/common";
import { BannerGuestController } from "./(guest)/BannerGuestController";
import { BannerAdminController } from "./(admin)/BannerAdminController";

@Module({
  controllers: [BannerGuestController, BannerAdminController]
})
export class BannerModule {}
