import { app } from "@setup/bootstrap";

import type { IBannerService } from "@modules/banners/types";

interface IService {
  service: IBannerService;
}

export function Service<T extends Constructor>(
  constructor: T
): T | void {
  return class extends constructor implements IService {
    service = app().bannerService;
  };
}
