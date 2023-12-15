type BannerStatus = "active" | "inactive";

interface IBanner {
  id?: string;
  title: string;
  buttonTitle: string;
  buttonLink: string;
  position: number;
  status: BannerStatus;
  image: IMediaFile;
}
