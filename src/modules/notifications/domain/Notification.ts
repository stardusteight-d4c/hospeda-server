import { randomUUID } from "node:crypto";

export class Notification {
  private props: INotification;

  constructor(props: INotification) {
    props.id === undefined && delete props.id;
    props.id === null && delete props.id;
    this.props = {
      id: props.id ?? randomUUID(),
      ...props
    };
  }

  public get get(): INotification {
    return this.props;
  }

  public inspect(): Notification {
    return this;
  }

  public set(_values: INotification) {
    throw new Error(
      "Cannot modify Notification directly. Use the NotificationService methods instead"
    );
  }
}
