import { describe, expect, it, vitest } from "vitest";

import { cloudinary } from "@/connect";

describe("Cloudinary Configuration", () => {
  it("must be able configure Cloudinary with the provided environment variables", () => {
    const CLOUD_NAME = process.env.CLOUDINARY_CLOUD_NAME;
    const API_KEY = process.env.CLOUDINARY_API_KEY;
    const API_SECRET = process.env.CLOUDINARY_API_SECRET;

    const configuredCloudinary = cloudinary();

    expect(configuredCloudinary.config().cloud_name).toBe(CLOUD_NAME);
    expect(configuredCloudinary.config().api_key).toBe(API_KEY);
    expect(configuredCloudinary.config().api_secret).toBe(API_SECRET);
    expect(configuredCloudinary.config().secure).toBe(true);
  });
});
