import { randomUUID } from "node:crypto";

import { HotelValidator } from "@modules/hotels/domain";

export class Hotel {
  private props: IHotel;

  constructor(props: IHotel) {
    props.id === undefined && delete props.id;
    props.id === null && delete props.id;
    this.props = {
      id: props.id ?? randomUUID(),
      ...props
    };
    this.props.slug = this.props.slug ?? this.convertToSlug();
  }

  private convertToSlug() {
    const firstPartOfId = this.props.id.split("-")[0];
    const parsedName = this.props.name && this.props.name
      .toLowerCase()
      .replace(/[^\w\s]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .trim();

    return `${parsedName}-${firstPartOfId}`;
  }

  public get get(): IHotel {
    return this.props;
  }

  public inspect(): Hotel {
    new HotelValidator(this)
      .isValidId()
      .isValidName()
      .isValidCategories();
    return this;
  }

  public set(_values: IHotel) {
    throw new Error(
      "Cannot modify Hotel directly. Use the HotelService methods instead"
    );
  }
}
