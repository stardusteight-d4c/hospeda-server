import { Room as PrismaRoom } from "@prisma/client";

import { Room } from "@modules/rooms/domain";

export function prismaToRoom(room: PrismaRoom) {
  return new Room(room as any);
}
