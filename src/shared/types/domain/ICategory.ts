type TReference = "rooms" | "hotels" | "events";

interface ICategory {
  id: string;
  reference: TReference;
  title: string;
}
