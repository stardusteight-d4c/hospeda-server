import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";

import { HotelModule } from "@modules/hotels/http";
import { RoomModule } from "@modules/rooms/http";
import { UserModule } from "@modules/users/http";
import { EventModule } from "@modules/events/http";
import { BannerModule } from "@modules/banners/http";

@Module({
  imports: [
    ConfigModule.forRoot(),
    HotelModule,
    RoomModule,
    UserModule,
    EventModule,
    BannerModule
  ]
})
export class AppModule {}
