export function roomToPrisma(room: IRoom) {
  const { status, images, ...roomTransformed } = room;
  return roomTransformed as any;
}
