import { event } from "@config/event";

import { HotelService, HotelObserver } from "@modules/hotels/domain";
import { HotelPrismaRepository } from "@modules/hotels/http";

import { RoomObserver, RoomService } from "@modules/rooms/domain";
import { RoomPrismaRepository } from "@modules/rooms/http";

import { UserService, UserObserver } from "@modules/users/domain";
import { UserPrismaRepository } from "@modules/users/http";

import { EventService, EventObserver } from "@modules/events/domain";
import {
  EventHotelPrismaRepository,
  EventPrismaRepository,
  EventHotelRoomPrismaRepository
} from "@modules/events/http";

import { BannerService } from "@modules/banners/domain";
import { BannerPrismaRepository } from "@modules/banners/http";

import { EventHotelService } from "@modules/events/domain";

import { EventHotelRoomService } from "@modules/events/domain";

import type {
  IHotelService,
  IHotelRepository
} from "@modules/hotels/types";
import type {
  IRoomService,
  IRoomRepository
} from "@modules/rooms/types";
import type {
  IUserService,
  IUserRepository
} from "@modules/users/types";
import type {
  IEventService,
  IEventRepository
} from "@modules/events/types";
import type {
  IEventHotelRepository,
  IEventHotelService
} from "@modules/events/types/event-hotel";
import type {
  IEventHotelRoomRepository,
  IEventHotelRoomService
} from "@modules/events/types/event-hotel-room";
import type {
  IBannerRepository,
  IBannerService
} from "@modules/banners/types";

class InitializeModules {
  #userService: IUserService;
  #hotelService: IHotelService;
  #roomService: IRoomService;
  #eventService: IEventService;
  #eventHotelService: IEventHotelService;
  #eventHotelRoomService: IEventHotelRoomService;
  #bannerService: IBannerService;

  private readonly userRepository: IUserRepository;
  private readonly hotelRepository: IHotelRepository;
  private readonly roomRepository: IRoomRepository;
  private readonly eventRepository: IEventRepository;
  private readonly eventHotelRepository: IEventHotelRepository;
  private readonly eventHotelRoomRepository: IEventHotelRoomRepository;
  private readonly bannerRepository: IBannerRepository;

  constructor(repositories: {
    userRepository: IUserRepository;
    hotelRepository: IHotelRepository;
    roomRepository: IRoomRepository;
    eventRepository: IEventRepository;
    eventHotelRepository: IEventHotelRepository;
    eventHotelRoomRepository: IEventHotelRoomRepository;
    bannerRepository: IBannerRepository;
  }) {
    this.userRepository = repositories.userRepository;
    this.hotelRepository = repositories.hotelRepository;
    this.roomRepository = repositories.roomRepository;
    this.eventRepository = repositories.eventRepository;
    this.eventHotelRepository = repositories.eventHotelRepository;
    this.eventHotelRoomRepository =
      repositories.eventHotelRoomRepository;
    this.bannerRepository = repositories.bannerRepository;
    this.initialization();
  }

  private initialization() {
    this.#userService = new UserService(this.userRepository);
    this.#hotelService = new HotelService(this.hotelRepository);
    this.#roomService = new RoomService(this.roomRepository);
    this.#eventService = new EventService(this.eventRepository);
    this.#eventHotelService = new EventHotelService(
      this.eventHotelRepository
    );
    this.#eventHotelRoomService = new EventHotelRoomService(
      this.eventHotelRoomRepository
    );
    this.#bannerService = new BannerService(this.bannerRepository);
    event.register(HotelObserver.getInstance(this.#hotelService));
    event.register(EventObserver.getInstance(this.#eventService));
    event.register(UserObserver.getInstance(this.#userService));
    event.register(RoomObserver.getInstance(this.#roomService));
  }

  public get userService(): IUserService {
    return this.#userService;
  }

  public get hotelService(): IHotelService {
    return this.#hotelService;
  }

  public get roomService(): IRoomService {
    return this.#roomService;
  }

  public get eventService(): IEventService {
    return this.#eventService;
  }

  public get eventHotelService(): IEventHotelService {
    return this.#eventHotelService;
  }

  public get eventHotelRoomService(): IEventHotelRoomService {
    return this.#eventHotelRoomService;
  }

  public get bannerService(): IBannerService {
    return this.#bannerService;
  }
}

export const app = () => {
  const prismaRepository = {
    userRepository: UserPrismaRepository.getInstance(),
    hotelRepository: HotelPrismaRepository.getInstance(),
    roomRepository: RoomPrismaRepository.getInstance(),
    eventRepository: EventPrismaRepository.getInstance(),
    eventHotelRepository: EventHotelPrismaRepository.getInstance(),
    eventHotelRoomRepository:
      EventHotelRoomPrismaRepository.getInstance(),
    bannerRepository: BannerPrismaRepository.getInstance()
  };
  return new InitializeModules(prismaRepository);
};
