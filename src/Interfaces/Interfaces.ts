export interface ISpace {
  count: number;
  next: string;
  previous: null;
  results: IResult[];
}

export interface IResult {
  id: number;
  title: string;
  url: string;
  image_url: string;
  news_site: string;
  summary: string;
  published_at: string;
  updated_at: string;
  featured: boolean;
  launches: ILaunch[];
  events: unknown[];
}

export interface ILaunch {
  launch_id: string;
  provider: string;
}
