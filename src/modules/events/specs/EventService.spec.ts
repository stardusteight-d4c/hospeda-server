import { afterAll, beforeAll, describe, expect, it } from "vitest";

import { useEventFactory } from "@modules/events/domain";
import { useUserFactory } from "@modules/users/domain";
import { useHotelFactory } from "@modules/hotels/domain";

const { makeEvent, makeService } = useEventFactory();
const { make: makeUser, makeService: makeUserService } =
  useUserFactory();
const { makeHotel, makeService: makeHotelService } =
  useHotelFactory();

const eventService = makeService();
const hotelService = makeHotelService();
const userService = makeUserService();

let userId: string;
let hotelId: string;

describe("EventService", () => {
  beforeAll(async () => {
    await eventService.removeAll();
    await userService.removeAll();
    await hotelService.removeAll();
    hotelId = (await hotelService.register(makeHotel())).get.id;
    userId = (await userService.register(makeUser())).get.id;
    await userService.registerCompany(
      {
        cnpj: "1025520/41",
        email: "email@email.com",
        name: "my company name",
        phoneNumber: "988885536",
        segment: "Turismo",
        address: {
          postalCode: "12345-678",
          number: "123",
          street: "Avenida das Palmeiras",
          complement: "Andar 5, Suíte 501",
          neighbourhood: "Praia Azul",
          city: "Cidade Maravilhosa",
          state: "SP",
          latitude: -22.987654,
          longitude: -43.123456
        }
      },
      userId
    );
  });

  afterAll(async () => {
    await eventService.removeAll();
    await userService.removeAll();
  });

  it("must be able to <register> a new event", async () => {
    expect(
      async () =>
        await eventService.register(
          makeEvent({ hotels: [hotelId], officialHotels: [hotelId] }),
          userId
        )
    ).toBeTruthy();
  });

  it("must be able to generate a slug on register a event", async () => {
    const event = await eventService.register(
      makeEvent({ hotels: [hotelId], officialHotels: [hotelId] }),
      userId
    );
    expect(event.get.slug).toStrictEqual(
      "fight-club-" + event.get.id.split("-")[0]
    );
  });

  it("must be able to get a event by slug", async () => {
    const event = await eventService.register(
      makeEvent({ hotels: [hotelId], officialHotels: [hotelId] }),
      userId
    );
    const getedEvent = await eventService.getBySlug(
      "fight-club-" + event.get.id.split("-")[0]
    );
    expect(getedEvent.get.id).toStrictEqual(event.get.id);
  });

  it("must be able to edit a event", async () => {
    const event = await eventService.register(
      makeEvent({ hotels: [hotelId], officialHotels: [hotelId] }),
      userId
    );
    delete event.get.hotels;
    delete event.get.officialHotels;
    const editedEvent = await eventService.edit({
      ...event.get,
      name: "New name"
    });
    expect(editedEvent.get.id).toStrictEqual(event.get.id);
    expect(editedEvent.get.name).not.toStrictEqual(event.get.name);
  });

  it("must be able to delete a event", async () => {
    const event = await eventService.register(
      makeEvent({ hotels: [hotelId], officialHotels: [hotelId] }),
      userId
    );
    await eventService.remove(event.get.id);
    const deletedHotel = await eventService.get(event.get.id);
    expect(deletedHotel).toStrictEqual(null);
  });

  it("must be able to delete a banner", async () => {
    const event = await eventService.register(
      makeEvent({ hotels: [hotelId], officialHotels: [hotelId] }),
      userId
    );
    await eventService.removeBanner(event.get.id);
    const eventWithoutBanner = await eventService.get(event.get.id);
    expect(eventWithoutBanner.get.banner).toStrictEqual(null);
  });
});
