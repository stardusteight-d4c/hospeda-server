import { describe, expect, it } from "vitest";

import { IHotelService } from "@modules/hotels/types";
import { HotelObserver } from "@modules/hotels/domain/HotelObserver";

describe("HotelObserver", () => {
  it("must be throw an error if hotelService is not provided when creating the first instance", () => {
    expect(() => HotelObserver.getInstance()).toThrowError(
      "HotelService must be provided when creating the first instance of HotelObserver"
    );
  });

  it("must be able create a new instance if none exists and hotelService is provided", () => {
    const mockHotelService = {} as IHotelService;
    const instance = HotelObserver.getInstance(mockHotelService);
    expect(instance).toBeInstanceOf(HotelObserver);
  });

  it("must be return the existing instance if one already exists", () => {
    const mockHotelService = {} as IHotelService;
    const firstInstance = HotelObserver.getInstance(mockHotelService);
    const secondInstance = HotelObserver.getInstance();
    expect(secondInstance).toBe(firstInstance);
  });
});
