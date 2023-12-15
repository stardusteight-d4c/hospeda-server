export class DateTime {
  #startDate: Date;
  #endDate: Date;
  #startTime: string;
  #endTime: string;

  public constructor(attr: IDateTime) {
    this.#startDate = attr.startDate;
    this.#endDate = attr.endDate;
    this.#startTime = attr.startTime;
    this.#endTime = attr.endTime;
  }

  public get get(): IDateTime {
    return {
      startDate: this.#startDate,
      endDate: this.#endDate,
      startTime: this.#startTime,
      endTime: this.#endTime
    };
  }

  public inspect(): DateTime {
    return this;
  }

  public set(_values: IDateTime) {
    throw new Error(
      "Cannot modify DateTime directly. Use the entity-related service that uses this Value Object"
    );
  }
}
