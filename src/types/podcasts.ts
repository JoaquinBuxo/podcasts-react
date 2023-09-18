export type Podcast = {
  'im:name': string;
  'im:image': Image[];
  summary: string;
  'im:price': Price;
  'im:contentType': ContentType;
  rights: string;
  title: string;
  link: Link;
  id: Id;
  'im:artist': Artist;
  category: Category;
  'im:releaseDate': ReleaseDate;
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
