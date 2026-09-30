export interface IMovie{
  id:string;
  attributes: {
    title: string;
    poster: string;
    summary: string;
    trailer: string;
    director: string;
    producers: string[];
    releaseDate: string;
  };
}

export interface IMovieResponse{
  data: IMovie[];
}
