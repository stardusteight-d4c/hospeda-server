import { describe, expect, it, vitest } from "vitest";

import { event } from "./";

describe("Event", () => {
  it("must be able notify all registered observers when emitting an event", async () => {
    const observer1 = {
      watching: ["someEvent"],
      notifyService: vitest
        .fn()
        .mockReturnValue("Response from Observer 1")
    };
    const observer2 = {
      watching: ["someEvent"],
      notifyService: vitest
        .fn()
        .mockReturnValue("Response from Observer 2")
    };
    const command = { name: "someEvent" };

    event.register(observer1);
    event.register(observer2);

    const { responses, uniqueResponse } = await event.emit({
      command
    });

    expect(observer1.notifyService).toHaveBeenCalledWith(command);
    expect(observer2.notifyService).toHaveBeenCalledWith(command);

    expect(responses).toEqual([
      "Response from Observer 1",
      "Response from Observer 2"
    ]);
    expect(uniqueResponse).toBeUndefined();
  });
});
