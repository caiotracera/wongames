type Platform = 'windows' | 'mac' | 'linux';

export type Rating = 'BR0' | 'BR10' | 'BR12' | 'BR14' | 'BR16' | 'BR18';

export type GameDetailsProps = {
  developer: string;
  releaseDate?: string;
  platforms: Platform[];
  publisher: string;
  rating: Rating;
  genres: string[];
};
