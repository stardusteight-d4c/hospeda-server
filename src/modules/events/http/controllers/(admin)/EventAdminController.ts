import { FastifyReply } from "fastify";
import {
  Body,
  Controller,
  Param,
  Post,
  Put,
  Res,
  UseGuards
} from "@nestjs/common";

import { EventAdminUseCases } from "@modules/events/http/controllers/(admin)";

import { Err } from "@shared/errors";
import { Reply } from "@shared/response/Reply";
import { RequireAdminPermission } from "@shared/middlewares/RequireAdminPermission";

@Controller("events")
@UseGuards(RequireAdminPermission)
export class EventAdminController {
  uc = EventAdminUseCases;

  @Post(":eventId/approved")
  public async approveSolicitation(
    @Body() approvalData: ApproveSolicitationDTO,
    @Param("eventId") eventId: string,
    @Res() reply: FastifyReply
  ) {
    return this.uc
      .makeApproveSolicitation(eventId, approvalData)
      .execute()
      .then((res) => new Reply(res, reply))
      .catch((err) => new Err(err, reply));
  }

  @Put(":eventId")
  public async editSolicitation(
    @Body() editSolicitationBody: EditSolicitationBodyDTO,
    @Param("eventId") eventId: string,
    @Res() reply: FastifyReply
  ) {
    return this.uc
      .makeEditSolicitation(
        eventId,
        editSolicitationBody.editedData,
        editSolicitationBody.createdEventHotelRoomData
      )
      .execute()
      .then((res) => new Reply(res, reply))
      .catch((err) => new Err(err, reply));
  }
}
