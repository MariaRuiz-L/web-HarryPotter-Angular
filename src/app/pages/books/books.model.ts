export interface IBookResponse {
  data: IBook[];
}

export interface IBook {
  id: string;
  type: string;
  attributes: {
    title: string;
    cover: string;
    dedication: string;
    summary: string;
    pages: number;
    release_date: string;
    slug: string;
  }
  relationships: {
    chapters: {
      data: any[];
    };
  };
}


