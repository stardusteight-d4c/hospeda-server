import { describe, expect, it } from "vitest";

import { Banner, useBannerFactory } from "@modules/banners/domain";

const { makeBanner } = useBannerFactory();

describe("Banner", () => {
  it("must be not able to access the attributes directly", () => {
    const banner = new Banner(makeBanner());
    // @ts-ignore
    expect(banner.id).toBeUndefined();
    // @ts-ignore
    expect(banner.title).toBeUndefined();
  });
});
