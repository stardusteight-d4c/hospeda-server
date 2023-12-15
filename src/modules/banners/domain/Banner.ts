import { randomUUID } from "node:crypto";

export class Banner {
  private props: IBanner;

  constructor(props: IBanner) {
    props.id === undefined && delete props.id;
    props.id === null && delete props.id;
    this.props = {
      id: props.id ?? randomUUID(),
      ...props
    };
  }

  public get get(): IBanner {
    return this.props;
  }

  public inspect(): Banner {
  
    return this;
  }

  public set(_values: IBanner) {
    throw new Error(
      "Cannot modify Banner directly. Use the BannerService methods instead"
    );
  }
}
