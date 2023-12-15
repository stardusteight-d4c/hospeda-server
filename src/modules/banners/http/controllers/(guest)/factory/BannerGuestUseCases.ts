import { FindActiveBanners } from "@modules/banners/app";

namespace BannerGuestUseCases {
  export function makeFindActiveBanners() {
    return new FindActiveBanners();
  }
}

export default BannerGuestUseCases;
