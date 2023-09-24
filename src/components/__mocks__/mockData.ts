export const mockPodcasts = [
  {
    'im:name': { label: 'Podcast 1' },
    'im:image': [{ label: 'image1.jpg', attributes: { height: '600' } }],
    summary: { label: 'This is Podcast 1' },
    id: { label: 'url1', attributes: { 'im:id': '1' } },
  },
  {
    'im:name': { label: 'Podcast 2' },
    'im:image': [{ label: 'image2.jpg', attributes: { height: '600' } }],
    summary: { label: 'This is Podcast 2' },
    id: { label: 'url2', attributes: { 'im:id': '2' } },
  },
  {
    'im:name': { label: 'Podcast 3' },
    'im:image': [{ label: 'image3.jpg', attributes: { height: '600' } }],
    summary: { label: 'This is Podcast 3' },
    id: { label: 'url3', attributes: { 'im:id': '3' } },
  },
];

export const mockPodcastDetail = [
  {
    artworkUrl600: 'image1_600.jpg',
    releaseDate: '2022-01-01T00:00:00Z',
    trackName: 'Podcast 1',
    trackTimeMillis: 3600000,
  },
  {
    artworkUrl600: 'image2_600.jpg',
    releaseDate: '2022-01-02T00:00:00Z',
    trackName: 'Podcast 2',
    trackTimeMillis: 3600000,
  },
  {
    artworkUrl600: 'image3_600.jpg',
    releaseDate: '2022-01-03T00:00:00Z',
    trackName: 'Podcast 3',
    trackTimeMillis: 3600000,
  },
];

export const mockEpisodes = [
  {
    artworkUrl600: 'image1_600.jpg',
    description: 'This is Episode 1 of Podcast 1.',
    previewUrl: 'https://podcast1.com/episodes/1.mp3',
    trackId: 1,
    trackName: 'Episode 1',
    trackTimeMillis: 3600000,
    trackViewUrl: 'https://podcast1.com/episodes/1',
    wrapperType: 'track',
  },
  {
    artworkUrl600: 'image2_600.jpg',
    description: 'This is Episode 1 of Podcast 2.',
    previewUrl: 'https://podcast2.com/episodes/1.mp3',
    trackId: 2,
    trackName: 'Episode 1',
    trackTimeMillis: 3600000,
    trackViewUrl: 'https://podcast2.com/episodes/1',
    wrapperType: 'track',
  },
  {
    artworkUrl600: 'image3_600.jpg',
    description: 'This is Episode 1 of Podcast 3.',
    previewUrl: 'https://podcast3.com/episodes/1.mp3',
    trackId: 3,
    trackName: 'Episode 1',
    trackTimeMillis: 3600000,
    trackViewUrl: 'https://podcast3.com/episodes/1',
    wrapperType: 'track',
  },
];
