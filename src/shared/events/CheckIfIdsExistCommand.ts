export class CheckIfIdsExistCommand implements ICommand {
  name = "check_if_ids_exist";
  constructor(readonly ids: string[]) {}
}
