export class AddressError {
  public static get idIsRequired() {
    const error = `<id> field is required`;
    function apply(id: string) {
      if (!id) {
        throw new Error(error);
      }
    }
    return { error, apply };
  }

  public static get invalidLocal() {
    const error = `<local> field must not be empty and must contain at least 5 characters`;
    function apply(local: string) {
      if (local.trim().length < 5) {
        throw new Error(error);
      }
    }
    return { error, apply };
  }

  public static get invalidStreet() {
    const error = `<street> field must not be empty and must contain at least 15 characters`;
    function apply(street: string) {
      if (street.trim().length < 15) {
        throw new Error(error);
      }
    }
    return { error, apply };
  }

  public static get invalidNeighbourhood() {
    const error = `<neighbourhood> field must not be empty and must contain at least 5 characters`;
    function apply(neighbourhood: string) {
      if (neighbourhood.trim().length < 5) {
        throw new Error(error);
      }
    }
    return { error, apply };
  }

  public static get invalidPostalCode() {
    const error = `<postalCode> field is invalid`;
    function apply(postalCode: string) {
      const postalCodeBr = /^\d{5}-?\d{3}$/;
      if (!postalCodeBr.test(postalCode)) {
        throw new Error(error);
      }
    }
    return { error, apply };
  }

  public static get cityIsRiquired() {
    const error = `<city> field is required`;
    function apply(city: string) {
      if (city.length <= 0 || !city) {
        throw new Error(error);
      }
    }
    return { error, apply };
  }

  public static get invalidState() {
    const error = `<state> field must be just your abbreviation, and must contain only two letters`;
    function apply(state: string) {
      if (state.length !== 2) {
        throw new Error(error);
      }
    }
    return { error, apply };
  }

  public static get invalidLatitude() {
    const error = `<latitude> field is invalid`;
    function apply(latitude: number) {
      if (latitude) {
        if (
          typeof latitude !== "number" ||
          latitude < -90 ||
          latitude > 90
        ) {
          throw new Error(error);
        }
      }
    }
    return { error, apply };
  }

  public static get invalidLongitude() {
    const error = `<longitude> field is invalid`;
    function apply(longitude: number) {
      if (longitude) {
        if (
          typeof longitude !== "number" ||
          longitude < -180 ||
          longitude > 180
        ) {
          throw new Error(error);
        }
      }
    }
    return { error, apply };
  }
}
