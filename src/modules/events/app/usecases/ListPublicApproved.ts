import type { IEventService } from "@modules/events/types";
import { Event } from "@modules/events/domain";
import { Service } from "@modules/events/decorators";
import { parseParams } from "@modules/events/app/usecases/helpers";

import { BadRequestException } from "@shared/errors";

@Service
export class ListPublicApproved {
  service: IEventService;
  params: Partial<EventListDomainDTO>;
  user: UserTokenDTO;

  public constructor(attr: {
    params: Partial<EventListDTO>;
    user: UserTokenDTO;
  }) {
    this.user = attr.user;
    this.params = this.transformRequestParams(attr.params);
  }

  public async execute() {
    this.params.privacy = ["public"];
    this.params.status = ["approved"];

    return this.service
      .list(this.params)
      .then((list) => this.generateReponse(list));
  }

  private generateReponse(list: PaginatedList<Event[]>) {
    return {
      message: `List public and approved events successfully`,
      error: null,
      statusCode: 200,
      data: {
        ...list,
        items: list.items.map((event: any) => {
          return event.get;
        })
      }
    };
  }

  private transformRequestParams(
    attrParams: Partial<EventListDTO>
  ): Partial<EventListDomainDTO> {
    const params = parseParams(attrParams);
    this.validatePagination(params.pageSize, params.currentPage);
    return params;
  }

  private validatePagination(pageSize: number, currentPage: number) {
    if (pageSize <= 0 || currentPage <= 0) {
      throw new BadRequestException("Invalid pagination values");
    }
  }
}
