import { describe, expect, it } from "vitest";

import { Event, useEventFactory } from "@modules/events/domain";

const { makeEvent } = useEventFactory();

describe("Event", () => {
  it("must be not able to access the attributes directly", () => {
    const event = new Event(makeEvent());
    // @ts-ignore
    expect(event.id).toBeUndefined();
    // @ts-ignore
    expect(event.name).toBeUndefined();
  });
});
