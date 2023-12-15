import { afterEach, describe, expect, it, vitest } from "vitest";
import { Err } from "../Err";
import { FastifyReply } from "fastify";
import { Exception } from "../Exception";
import { BadRequestException } from "../BadRequestException";

const mockFastifyReply: Partial<FastifyReply> = {
  status: vitest.fn().mockReturnThis(),
  send: vitest.fn()
};

describe("Err", () => {
  afterEach(() => {
    vitest.clearAllMocks();
  });

  it("should handle Exception", () => {
    const mockException: Exception = new BadRequestException("Found");
    new Err(mockException as any, mockFastifyReply as any);
    expect(mockFastifyReply.status).toHaveBeenCalledWith(400);
    expect(mockFastifyReply.send).toHaveBeenCalledWith(mockException);
  });
});
