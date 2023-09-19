export type Podcast = {
  'im:name': Label;
  'im:image': Image[];
  summary: Label;
  'im:price': Price;
  'im:contentType': ContentType;
  rights: Label;
  title: Label;
  link: Link;
  id: Id;
  'im:artist': Artist;
  category: Category;
  'im:releaseDate': ReleaseDate;
};

export type PodcastDetail = {
  artistId: number;
  artistName: string;
  artistViewUrl: string;
  artworkUrl30: string;
  artworkUrl60: string;
  artworkUrl100: string;
  artworkUrl600: string;
  collectionCensoredName: string;
  collectionExplicitness: string;
  collectionHdPrice: number;
  collectionId: number;
  collectionName: string;
  collectionPrice: number;
  collectionViewUrl: string;
  country: string;
  currency: string;
  feedUrl: string;
  genreIds: string[];
  genres: string[];
  kind: string;
  primaryGenreName: string;
  releaseDate: string;
  trackCensoredName: string;
  trackCount: number;
  trackExplicitness: string;
  trackId: number;
  trackName: string;
  trackPrice: number;
  trackTimeMillis: number;
  trackViewUrl: string;
  wrapperType: string;
};

export type PodcastDetailResult = {
  resultCount: number;
  results: [PodcastDetail, ...Episode[]];
};

export type Episode = {
  artistIds: number[];
  artistViewUrl: string;
  artworkUrl60: string;
  artworkUrl160: string;
  artworkUrl600: string;
  closedCaptioning: string;
  collectionId: number;
  collectionName: string;
  collectionViewUrl: string;
  contentAdvisoryRating: string;
  country: string;
  description: string;
  episodeContentType: string;
  episodeFileExtension: string;
  episodeGuid: string;
  episodeUrl: string;
  feedUrl: string;
  genres: { name: string; id: string }[];
  kind: string;
  previewUrl: string;
  releaseDate: string;
  shortDescription: string;
  trackId: number;
  trackName: string;
  trackTimeMillis: number;
  trackViewUrl: string;
  wrapperType: string;
};

type Label = {
  label: string;
};

type Image = {
  label: string;
  attributes: {
    height: string;
  };
};

type Price = {
  label: string;
  attributes: {
    amount: string;
    currency: string;
  };
};

type ContentType = {
  attributes: {
    term: string;
    label: string;
  };
};

type Link = {
  attributes: {
    rel: string;
    type: string;
    href: string;
  };
};

type Id = {
  label: string;
  attributes: {
    'im:id': string;
  };
};

type Artist = {
  label: string;
  attributes: {
    href: string;
  };
};

type Category = {
  attributes: {
    'im:id': string;
    term: string;
    scheme: string;
    label: string;
  };
};

type ReleaseDate = {
  label: string;
  attributes: {
    label: string;
  };
};

export type Podcasts = Podcast[];
