export class FindByIdCommand implements ICommand {
  name = "find_by_id";
  constructor(readonly id: string) {}
}
