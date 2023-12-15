import { afterEach, beforeAll, describe, expect, it } from "vitest";

import { HotelError, useHotelFactory } from "@modules/hotels/domain";

import {
  MediaFile,
  useMediaFileFactory,
  useAddressFactory
} from "@shared/value-objects";
import { BadRequestException } from "@shared/errors";

const { makeHotel, makeService } = useHotelFactory();
const { makeMediaFile } = useMediaFileFactory();
const { makeAddress } = useAddressFactory();
const service = makeService();

describe("HotelService", () => {
  beforeAll(async () => {
    await service.removeAll();
  });

  afterEach(async () => {
    await service.removeAll();
  });

  it("must be able to <register> a new hotel", async () => {
    expect(
      async () => await service.register(makeHotel())
    ).toBeTruthy();
  });

  it("must be able to <get> a hotel by id", async () => {
    const hotel = await service.register(makeHotel());
    const getHotelById = await service.get(hotel.get.id);
    expect(getHotelById.get.id).toStrictEqual(hotel.get.id);
  });

  it("must be able to <getAll> hotels", async () => {
    await service.register(makeHotel());
    await service.register(makeHotel());
    await service.register(makeHotel());
    const getHotels = await service.getAll();
    expect(getHotels.length).toStrictEqual(3);
  });

  it("must be able to <remove> a hotel", async () => {
    const hotel = await service.register(makeHotel());
    await service.remove(hotel.get.id);
    expect(
      async () => await service.get(hotel.get.id)
    ).rejects.toThrow(HotelError.hotelIdDoesNotExist.error);
  });

  it("must be able to <edit> a hotel", async () => {
    const hotel = await service.register(makeHotel());
    const commodities = hotel.get.commodities.map(
      (commodity: any) => commodity.id
    );
    await service.edit({
      ...hotel.get,
      name: "New name",
      images: undefined,
      commodities
    });
    const editedHotel = await service.get(hotel.get.id);
    expect(editedHotel.get.name).toStrictEqual("New name");
    expect(editedHotel.get.id).toStrictEqual(hotel.get.id);
  });

  it("must be able upload images and return the saved media files", async () => {
    const hotel = await service.register(makeHotel());
    const images = [
      makeMediaFile({
        referenceId: hotel.get.id,
        tableReference: "hotels"
      }),
      makeMediaFile({
        referenceId: hotel.get.id,
        tableReference: "hotels"
      })
    ];
    const result = await service.uploadImages(images);
    expect(result[0]).toBeInstanceOf(MediaFile);
    expect(result.length).toStrictEqual(2);
  });

  it("must be able remove images for a hotel and handle errors", async () => {
    const hotel = await service.register(makeHotel());
    const images = [
      makeMediaFile({
        referenceId: hotel.get.id,
        tableReference: "hotels"
      }),
      makeMediaFile({
        referenceId: hotel.get.id,
        tableReference: "hotels"
      })
    ];
    const result = await service.uploadImages(images);
    await service.removeImages({
      hotelId: hotel.get.id,
      images: [result[0].get.id]
    });
    const updatedHotelImages = await service.get(hotel.get.id);
    expect(updatedHotelImages.get.images.length).toStrictEqual(1);
  });

  it("must be not able to send the property <images> in the hotel registry", async () => {
    expect(
      async () => await service.register(makeHotel({ images: [] }))
    ).rejects.toThrowError(
      HotelError.propertyImagesNotAccepted.error
    );
  });

  it("must be not able to send the property <id> in the hotel registry", async () => {
    expect(
      async () =>
        await service.register(makeHotel({ id: "my-fake-id" }))
    ).rejects.toThrowError(HotelError.propertyIdNotAccepted.error);
  });

  it("must be able to list the cities of registered hotels", async () => {
    const address1 = {
      address: makeAddress({
        id: undefined,
        city: "São Paulo"
      })
    };
    const address2 = {
      address: makeAddress({
        id: undefined,
        city: "Rio de Janeiro"
      })
    };
    const address3 = {
      address: makeAddress({
        id: undefined,
        city: "São Paulo"
      })
    };
    await service.register(makeHotel(address1));
    await service.register(makeHotel(address2));
    await service.register(makeHotel(address3));
    const cities = await service.getCities();
    expect(cities.length).toStrictEqual(2);
  });

  it("must be able to list the states of registered hotels", async () => {
    const address1 = {
      address: makeAddress({
        id: undefined,
        state: "SP"
      })
    };
    const address2 = {
      address: makeAddress({
        id: undefined,
        city: "RJ"
      })
    };
    const address3 = {
      address: makeAddress({
        id: undefined,
        city: "SP"
      })
    };
    await service.register(makeHotel(address1));
    await service.register(makeHotel(address2));
    await service.register(makeHotel(address3));
    const states = await service.getStates();
    expect(states.length).toStrictEqual(2);
  });

  it("must be able list hotels based on input parameters", async () => {
    await service.register(makeHotel());
    await service.register(makeHotel());
    await service.register(makeHotel());

    const input1: Partial<HotelListDomainDTO> = {
      currentPage: 1,
      pageSize: 2
    };
    const result1 = await service.list(input1);
    expect(result1.currentPage).toStrictEqual(1);
    expect(result1.totalPages).toStrictEqual(2);
    expect(result1.totalItems).toStrictEqual(3);
    expect(result1.itemsOnPage).toStrictEqual(2);

    const input2: Partial<HotelListDomainDTO> = {
      currentPage: 2,
      pageSize: 2
    };
    const result2 = await service.list(input2);
    expect(result2.currentPage).toStrictEqual(2);
    expect(result2.totalPages).toStrictEqual(2);
    expect(result2.totalItems).toStrictEqual(3);
    expect(result2.itemsOnPage).toStrictEqual(1);
  });

  it("must be able throw BadRequestException if id is not provided", () => {
    const id = "";
    const { apply, error } = HotelError.idIsRequired;
    expect(() => {
      apply(id);
    }).toThrowError(BadRequestException);
    expect(() => {
      apply(id);
    }).toThrowError(error);
  });

  it("must be able throw BadRequestException if files length is greater than 10", () => {
    const { apply, error1 } = HotelError.invalidFilesQuantity;
    const filesLength = 11;
    expect(() => {
      apply(filesLength);
    }).toThrowError(BadRequestException);
    expect(() => {
      apply(filesLength);
    }).toThrowError(error1);
  });

  it("must be able throw BadRequestException if files length is 0", () => {
    const { apply, error2 } = HotelError.invalidFilesQuantity;
    const filesLength = 0;
    expect(() => {
      apply(filesLength);
    }).toThrowError(BadRequestException);
    expect(() => {
      apply(filesLength);
    }).toThrowError(error2);
  });

  it("should not throw an error if files length is between 1 and 5", () => {
    const { apply } = HotelError.invalidFilesQuantity;
    const filesLength = 3;
    expect(() => {
      apply(filesLength);
    }).not.toThrow();
  });
});
