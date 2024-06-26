export type SDeal<IsDetail extends boolean = false> = {
  title: string;
  imgURL: string;
  price: number;
  likesCount: number;
  location: string;
  id: number;
} & (IsDetail extends true
  ? {
      seller: {
        avatarImgURL: string;
        email: string;
      };
      createdAt: number;
      content: string;
      viewsCount: number;
    }
  : {});
