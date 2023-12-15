import { describe, expect, it, afterEach, beforeAll } from "vitest";

import { useBannerFactory } from "@modules/banners/domain";

const { makeBanner, makeBannerService } = useBannerFactory();

const bannerService = makeBannerService();

describe("BannerService", () => {
  beforeAll(async () => {
    await bannerService.removeAll();
  });

  afterEach(async () => {
    await bannerService.removeAll();
  });

  it("must be able to <create> a new banner", async () => {
    expect(
      async () => await bannerService.create(makeBanner())
    ).toBeTruthy();
  });

  it("must be able to <get> a  banner", async () => {
    const createdBanner = await bannerService.create(makeBanner());
    const getedBanner = await bannerService.get(createdBanner.get.id);
    expect(getedBanner.get.id).toStrictEqual(createdBanner.get.id);
  });

  it("must be able to <edit> a banner", async () => {
    const createdBanner = await bannerService.create(makeBanner());
    const editedBanner = await bannerService.edit({
      ...createdBanner.get,
      title: "New title"
    });
    expect(editedBanner.get.title).not.toStrictEqual(
      createdBanner.get.title
    );
  });

  it("must be able to <remove> a banner", async () => {
    const createdBanner = await bannerService.create(makeBanner());
    await bannerService.remove(createdBanner.get.id);
    const getedBanner = await bannerService.get(createdBanner.get.id);
    expect(getedBanner).toStrictEqual(null);
  });

  it("must be able to <getAll> onlyActive banners", async () => {
    await bannerService.create(makeBanner({ status: "inactive" }));
    const getActivesBanners = await bannerService.getAll({
      onlyActive: true
    });

    expect(getActivesBanners).toStrictEqual([]);
  });

  it("must be able to <getAll> banners", async () => {
    await bannerService.create(makeBanner());
    await bannerService.create(makeBanner());
    const banners = await bannerService.getAll({onlyActive: false});
    expect(banners.length).toStrictEqual(2);
  });
});
