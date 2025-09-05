export type Product = {
  title: string;
  price:number;
  id: number;
  imgs?: {
    thumbnails: string[];
    previews: string[];
  };
};
