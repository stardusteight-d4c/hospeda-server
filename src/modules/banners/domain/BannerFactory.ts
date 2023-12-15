import { app } from "@setup/bootstrap";

export function useBannerFactory() {
  function makeBanner(params?: Partial<IBanner>): IBanner {
    return {
      title: "My banner",
      buttonLink: "http://localhost:3000",
      buttonTitle: "Register now",
      position: 0,
      ...params
    } as any;
  }

  function makeBannerService() {
    return app().bannerService;
  }

  return {
    makeBanner,
    makeBannerService
  };
}
