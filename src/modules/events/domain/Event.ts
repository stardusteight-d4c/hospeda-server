import { randomUUID } from "node:crypto";
import { DateTime } from "@shared/value-objects";

export class Event {
  private props: IEvent;

  constructor(props: IEvent) {
    props.id === undefined && delete props.id;
    props.id === null && delete props.id;
    this.props = {
      id: props.id ?? randomUUID(),
      ...props,
      dateTime: new DateTime(props.dateTime).get
    };
    this.props.slug = this.props.slug ?? this.convertToSlug();
  }

  private convertToSlug() {
    const firstPartOfId = this.props.id.split("-")[0];
    const parsedName =
      this.props.name &&
      this.props.name
        .toLowerCase()
        .replace(/[^\w\s]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-")
        .trim();

    return `${parsedName}-${firstPartOfId}`;
  }

  public get get(): IEvent {
    return this.props;
  }

  public inspect(): Event {
    return this;
  }

  public set(_values: IEvent) {
    throw new Error(
      "Cannot modify Event directly. Use the EventService methods instead"
    );
  }
}
