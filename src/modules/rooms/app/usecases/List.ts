import type { IRoomService } from "@modules/rooms/types";
import { Room } from "@modules/rooms/domain";
import { Service } from "@modules/rooms/decorators";
import { parseParams } from "@modules/rooms/app/usecases/helpers";

import { BadRequestException } from "@shared/errors";

@Service
export class List {
  service: IRoomService;
  params: Partial<RoomListDomainDTO>;
  role: TUserRole | undefined;

  public constructor(attr: {
    params: Partial<RoomListDTO>;
    role: TUserRole | undefined;
  }) {
    this.params = this.transformRequestParams(attr.params);
    this.role = attr.role;
  }

  public async execute() {
    return this.service
      .list(this.params)
      .then((list) => this.generateReponse(list));
  }

  private generateReponse(list: PaginatedList<Room[]>) {
    const message =
      this.role !== "admin"
        ? "List rooms successfully"
        : "List rooms with internal informations";
    return {
      message,
      error: null,
      statusCode: 200,
      data: {
        ...list,
        items: list.items.map((item) => item.get)
      }
    };
  }

  private transformRequestParams(
    attrParams: Partial<RoomListDTO>
  ): Partial<RoomListDomainDTO> {
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
