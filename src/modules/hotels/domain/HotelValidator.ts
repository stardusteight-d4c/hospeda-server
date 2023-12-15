import { Hotel, HotelError } from "@modules/hotels/domain";

export class HotelValidator {
  hotel: Hotel;

  public constructor(hotel: Hotel) {
    this.hotel = hotel;
  }

  public isValidId(): HotelValidator {
    const id = this.hotel.get.id;
    HotelError.idIsRequired.apply(id);
    return this;
  }

  public isValidName(): HotelValidator {
    const name = this.hotel.get.name;
    HotelError.nameIsRequired.apply(name);
    return this;
  }

  public isValidCategories(): HotelValidator {
    const categories = this.hotel.get.categories;
    HotelError.categoriesIsRequired.apply(categories);
    return this;
  }
}
