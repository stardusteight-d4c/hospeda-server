import { afterAll, beforeEach, describe, expect, it } from "vitest";

import { RoomError, useRoomFactory } from "@modules/rooms/domain";
import { HotelError, useHotelFactory } from "@modules/hotels/domain";

import {
  MediaFile,
  useMediaFileFactory
} from "@shared/value-objects";

const { makeRoom, makeService } = useRoomFactory();
const { makeHotel, makeService: makeHotelService } =
  useHotelFactory();
const { makeMediaFile } = useMediaFileFactory();

const service = makeService();
let hotelId: string;

describe("RoomService", () => {
  beforeEach(async () => {
    await service.removeAll();
    await service.removeAll();
    const hotel = makeHotel();
    hotelId = (await makeHotelService().register(hotel)).get.id;
  });

  afterAll(async () => {
    await service.removeAll();
    await service.removeAll();
  });

  it("must be able to <register> a new room", async () => {
    const room = makeRoom({ hotelId });
    expect((await service.register(room)).get.name).toStrictEqual(
      room.name
    );
  });

  it("must be able to <get> a room by id", async () => {
    const newRoom = await service.register(makeRoom({ hotelId }));
    const getRoomById = await service.get(newRoom.get.id);
    expect(getRoomById.get.id).toStrictEqual(newRoom.get.id);
  });

  it("must be able to <getAll> rooms", async () => {
    await service.register(makeRoom({ hotelId }));
    await service.register(makeRoom({ hotelId }));
    await service.register(makeRoom({ hotelId }));
    const getRooms = await service.getAll();
    expect(getRooms.length).toStrictEqual(3);
  });

  it("must be able to <remove> a room", async () => {
    const room = await service.register(makeRoom({ hotelId }));
    await service.get(room.get.id);
    await service.remove(room.get.id);
    expect(
      async () => await service.get(room.get.id)
    ).rejects.toThrowError(RoomError.roomNotfound.error);
  });

  it("must be able to <edit> a room", async () => {
    const {hotelId: hotelID, ...roomTransformed} = await service
      .register(makeRoom({ hotelId }))
      .then((room) => {
        const copyRoom = room.get;
        delete copyRoom.images;
        const commodities = room.get.commodities.map(
          (commodity) => commodity.id
        );
        const categories = room.get.categories.map(
          (category) => category.id
        );
        return { ...copyRoom, commodities, categories };
      });
    await service.edit({
      ...roomTransformed,
      name: "New name"
    } as any);
    const editedRoom = await service.get(roomTransformed.id);
    expect(editedRoom.get.name).toStrictEqual("New name");
    expect(editedRoom.get.id).toStrictEqual(roomTransformed.id);
  });

  it("must be able upload images and return the saved media files", async () => {
    const room = await service.register(makeRoom({ hotelId }));
    const images = [
      makeMediaFile({
        referenceId: room.get.id,
        tableReference: "rooms"
      }),
      makeMediaFile({
        referenceId: room.get.id,
        tableReference: "room"
      })
    ];
    const result = await service.uploadImages(images);
    expect(result[0]).toBeInstanceOf(MediaFile);
    expect(result.length).toStrictEqual(2);
  });

  it("must be able remove images for a room and handle errors", async () => {
    const room = await service.register(makeRoom({ hotelId }));
    const images = [
      makeMediaFile({
        referenceId: room.get.id,
        tableReference: "rooms"
      }),
      makeMediaFile({
        referenceId: room.get.id,
        tableReference: "rooms"
      })
    ];
    const result = await service.uploadImages(images);
    await service.removeImages({
      roomId: room.get.id,
      images: [result[0].get.id]
    });
    const updatedRoomImages = await service.get(room.get.id);
    expect(updatedRoomImages.get.images.length).toStrictEqual(1);
  });

  it("must be able list hotels based on input parameters", async () => {
    await service.register(makeRoom({ hotelId }));
    await service.register(makeRoom({ hotelId }));
    await service.register(makeRoom({ hotelId }));

    const input1 = {
      currentPage: 1,
      pageSize: 2
    };
    const result1 = await service.getByPagination(input1);
    expect(result1.currentPage).toStrictEqual(1);
    expect(result1.totalPages).toStrictEqual(2);
    expect(result1.totalItems).toStrictEqual(3);
    expect(result1.itemsOnPage).toStrictEqual(2);

    const input2 = {
      currentPage: 2,
      pageSize: 2
    };
    const result2 = await service.getByPagination(input2);
    expect(result2.currentPage).toStrictEqual(2);
    expect(result2.totalPages).toStrictEqual(2);
    expect(result2.totalItems).toStrictEqual(3);
    expect(result2.itemsOnPage).toStrictEqual(1);
  });

  it("must be able get all by hotelId", async () => {
    await service.register(makeRoom({ hotelId }));
    await service.register(makeRoom({ hotelId }));
    await service.register(makeRoom({ hotelId }));
    const result = await service.getAllByHotel(hotelId);
    expect(result.length).toStrictEqual(3);
  });

  it("must be not able edit a room with not existing <id>", async () => {
    const { hotelId: hotelID, ...filteredRoom } = makeRoom({
      hotelId
    });
    expect(
      async () => await service.edit(filteredRoom as any)
    ).rejects.toThrowError(RoomError.roomNotfound.error);
  });

  it("must be not able to send the property <images> in the room registry", async () => {
    expect(
      async () => await service.register(makeRoom({ images: [] }))
    ).rejects.toThrowError(RoomError.propertyImagesNotAccepted.error);
  });

  it("must be not able to send the property <id> in the room registry", async () => {
    expect(
      async () =>
        await service.register(makeRoom({ id: "my-fake-id" }))
    ).rejects.toThrowError(RoomError.propertyIdNotAccepted.error);
  });

  it("must be throw an error if submitting a <hotelId> on edit", async () => {
    const room = await service.register(makeRoom({ hotelId }));
    expect(
      async () =>
        await service.edit(
          makeRoom({ id: room.get.id, hotelId: "fake-hotel-id" })
        )
    ).rejects.toThrowError(RoomError.hotelIdIsNotAccepted.error);
  });
});
