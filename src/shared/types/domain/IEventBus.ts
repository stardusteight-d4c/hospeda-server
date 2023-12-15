interface ICommand {
  name: string;
}

interface IObserver {
  watching: string[];
  notifyService(operation: ICommand): Promise<any>;
}

interface IEventBus {
  register(observer: IObserver): void;
  emit(request: {
    command: ICommand;
    targetObserver?: IObserver;
  }): Promise<{ responses: any; uniqueResponse: any }>;
}
