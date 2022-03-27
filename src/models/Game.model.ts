export interface GameBasicInfo {
  added: number;
  added_by_status: { [key: string]: number }[];
  background_image: string;
  clip: any;
  dominant_color: string;
  esrb_rating: any;
  genres: GameGenre[];
  id: number;
  metacritic: number;
  name: string;
  parent_platforms: GameParentPlatform[];
  platforms: GamePlatform[];
  rating: number;
  ratings: any[];
  rating_count: number;
  playtime: number;
  released: string;
  reviews_count: number;
  reviews_text_count: number;
  saturated_color: string;
  short_screenshots: any[];
  slug: string;
  strores: any[];
  suggestions_count: number;
  stores: any[];
  tba: boolean;
  updated: string;
  user_game: any;
}


export interface GameDetails extends GameBasicInfo {
  website: string;
  movies_count: number;
  creators_count: number;
  achievements_count: number;
  parent_achievements_count: number;
  reddit_url: string;
  reddit_name: string;
  reddit_description: string;
  reddit_logo: string;
  reddit_cout: number;
  twich_count: number;
  youtube_count: number;
  reviews_text_count: number;
  suggestions_count: number;
  playtime: number;
  developers: any[];
  tags: any[];
  description: string;
  description_raw: string;
  publishers: GamePublisher[];
  screenshots: GameScreenshot[];
  movies: any[];
}

interface GameScreenshot {
  id: number;
  image: string;
  width: number;
  height: number;
  is_deleted: boolean;
}
interface GamePublisher {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
}

interface GameGenre {
  games_count: string;
  id: string;
  image_background: string;
  name: string;
  slug: string;
}

interface GamePlatform {
  platform: {
    games_count: number;
    id: number;
    image: any;
    image_background: string;
    name: string;
    slug: string;
    year_end: string;
    year_start: string;
  };
}

interface GameParentPlatform {
  platform: {
    id: number;
    name: string;
    slug: string;
  };
}
