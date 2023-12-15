class Event implements IEventBus {
  private static instance: Event;
  private registeredObservers: IObserver[];

  private constructor() {
    this.registeredObservers = [];
  }

  public static getInstance(): Event {
    if (!Event.instance) {
      Event.instance = new Event();
    }
    return Event.instance;
  }

  public register(observer: IObserver) {
    if (!this.registeredObservers.includes(observer)) {
      this.registeredObservers.push(observer);
    }
  }

  public async emit(request: {
    command: ICommand;
    targetObserver?: IObserver;
  }): Promise<{ responses: any[]; uniqueResponse: any }> {
    const { command, targetObserver } = request;
    const responses: any[] = [];
    let uniqueResponse: any;
    if (targetObserver) {
      if (targetObserver.watching.includes(command.name)) {
        const response = await targetObserver.notifyService(command);
        uniqueResponse = response;
      }
    } else {
      for (const observer of this.registeredObservers) {
        const response = await observer.notifyService(command);
        responses.push(response);
      }
    }
    return { responses, uniqueResponse };
  }
}

export const event = Event.getInstance();
